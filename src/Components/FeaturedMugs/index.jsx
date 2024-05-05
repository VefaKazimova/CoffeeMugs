import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Url = "http://localhost:3000/products/?_limit=2";
const FeaturedMugs = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(Url).then(({ data }) => {
      setProducts(data);
    });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center ">
      <h5 className="font-normal text-[12px] leading-[18px] tracking-[2px] uppercase pb-[5%]">
        Featured Mugs
      </h5>
      <div className="flex flex-wrap gap-7 justify-center items-center">
        {products.map(({ id, imgUrl, name, price, lastPrice }) => (
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
              <span className="font-normal text-[19px] leading-[32px]  text-[#A25F4B]">
                {lastPrice}
              </span>
              <span className="font-normal text-[16px] leading-[28px]  text-[#1D1F2E] ">
                {price}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedMugs;
