import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const URL = "http://localhost:3000/products/";
const Products = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  useEffect(() => {
    axios.get(URL).then(({ data }) => {
      setFilteredProducts(data.slice(2));
    });
  }, []);

  return (
    <div className="flex flex-col justify-center items-center">
      <h5 className="font-normal text-[12px] leading-[18px] tracking-[2px] uppercase pt-[6%] pb-[6%]  ">
        More Products
      </h5>
      <div className="flex gap-5 flex-wrap items-center justify-center text-center">
        {filteredProducts.map(({ id, imgUrl, name, price }) => (
          <div key={id}>
            <Link to={`/singlepage/${id}`}>
              <img width="305px" height="380px" src={imgUrl} alt={name} />
            </Link>
            <p className="font-normal text-[20px] leading-[30px] pt-6 pb-1">
              {name}
            </p>
            <p className="font-normal text-[16px] leading-[28px] pb-7 ">
              {price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
