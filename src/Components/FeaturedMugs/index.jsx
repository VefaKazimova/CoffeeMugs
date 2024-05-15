import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { incremented } from "../../Slice";

const Url = "http://localhost:3000/products/?_limit=2";
const FeaturedMugs = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    axios.get(Url).then(({ data }) => {
      setProducts(data);
    });
  }, []);

  const addToCard = ({ id, name, imgUrl, price, lastPrice }) => {
    dispatch(
      incremented({
        id,
        name,
        imgUrl,
        price,
        lastPrice,
      })
    );
    console.log(addToCard);
  };
  return (
    <div className="flex flex-col items-center justify-center ">
      <h5 className="font-normal text-[12px] leading-[18px] tracking-[2px] uppercase pb-[5%]">
        Featured Mugs
      </h5>
      <div className="flex flex-wrap gap-7 justify-center items-center">
        {products.map((prod) => {
          const { id, imgUrl, name, price, lastPrice } = prod;
          return (
            <div key={id} className="text-center">
              <Link to={`singlepage/${id}`}>
                <img
                  className="w-[305px] h-[250px] md:w-[460px] md:h-[480px] lg:w-[460px] lg:h-[480px] hover:text-secondry transform translate-x-0 duration-300 hover:scale-105"
                  src={imgUrl}
                />
              </Link>
              <h1 className="font-normal text-[20px] leading-[30px] pt-5  ">
                {name}
              </h1>
              <div className="flex gap-5 first-line:items-center text-center justify-center">
                <span
                  before="$"
                  after="USD"
                  className="font-normal text-[16px] leading-[32px]  text-[#A25F4B]  before:content-[attr(before)] after:content-[attr(after)] after:m-1"
                >
                  {lastPrice}
                </span>
                <span
                  before="$"
                  after="USD"
                  className="  before:content-[attr(before)] after:content-[attr(after)] after:m-1 font-normal text-[16px] leading-[32px]  text-[#1D1F2E] "
                >
                  {price}
                </span>
              </div>
              <button
                onClick={() => {
                  addToCard(prod);
                }}
                className="bg-black rounded-md py-[10px] px-[30px] mt-[1%] mb-8 text-white font-bold  text-[15px] leading-[18px] tracking-[2px] uppercase"
              >
                Shop
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeaturedMugs;
