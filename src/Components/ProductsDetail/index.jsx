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
      <div className="container  ">
        <div
          key={products?.id}
          className="flex justify-center   flex-wrap mt-10 gap-8 "
        >
          <div>
            <img className="lg:w-50% h-[300px]" src={products?.imgUrl} />
          </div>
          <div>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsDetail;
