import { data } from "autoprefixer";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const URL = "http://localhost:3000/products/";
const ProductsDetail = () => {
  const [products, setProducts] = useState({});
  const { sId } = useParams();

  useEffect(() => {
    axios.get(URL + sId).then(({ data }) => {
      setProducts(data);
    });
  }, [sId]);

  return (
    <>
      <div className="container mx-auto px-[15%]">
        <div key={products?.id} className="flex justify-center mt-10  gap-6">
          <div className="w-full h-[400px]">
            <img className="h-full w-full " src={products?.imgUrl} />
          </div>
          <div className="w-full mt-[6%]">
            <p className="font-normal text-[32px] leading-[30px] mb-2 ">
              {products?.name}
            </p>

            <div className="border-b-2 text-black border-opacity-30 w-[70%]"></div>
            <p className="font-normal text-[23px] leading-[32px]   mt-6 text-gray-500  w-[340px]">
              {products?.description}
            </p>
            <p className="font-normal text-[25px] leading-[28px]  mt-5 ">
              {products?.price}
            </p>
            <button className="bg-black rounded-md py-[10px] px-[30px] mt-[10%] text-white font-bold  text-[15px] leading-[18px] tracking-[2px] uppercase">
              Shop
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsDetail;
