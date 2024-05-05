import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const URL = "http://localhost:3000/products/";
const Products = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortingOrder, setSortingOrder] = useState("Sorting by title");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    axios.get(URL).then(({ data }) => {
      setFilteredProducts(data.slice(2));
    });
  }, []);

  const handleSortingChange = (event) => {
    setSortingOrder(event.target.value);
    sortProducts(event.target.value);
  };

  const sortProducts = (order) => {
    const sortedProducts = [...filteredProducts].sort((a, b) => {
      const comparison = a.name.localeCompare(b.name);
      return order === "asc" ? comparison : -comparison;
    });
    setFilteredProducts(sortedProducts);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    filterProducts(event.target.value);
  };

  const filterProducts = (query) => {
    const filtered = query
      ? filteredProducts.filter((product) =>
          product.name.toLowerCase().includes(query.toLowerCase())
        )
      : filteredProducts;
    setFilteredProducts(filtered);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h5 className="font-normal text-[12px] leading-[18px] tracking-[2px] uppercase pt-[6%] pb-[4%]  ">
        More Products
      </h5>
      <div className="flex justify-center gap-5 mb-8">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="p-2 border border-gray-300 rounded-md w-full"
        />

        <select
          value={sortingOrder}
          onChange={handleSortingChange}
          className="ml-2 p-2 border border-gray-300 rounded-md"
        >
          <option value="Sorting by title" disabled>
            Sorting by title
          </option>
          <option value="asc">A-Z</option>
          <option value="desc">Z-A</option>
        </select>
      </div>
      <div className="flex gap-5 flex-wrap items-center justify-center text-center">
        {filteredProducts.map(({ id, imgUrl, name, price }) => (
          <div key={id}>
            <Link to={`/singlepage/${id}`}>
              <img
                className="w-[305px] h-[340px] hover:text-secondry transform translate-x-0 duration-300 hover:scale-105"
                src={imgUrl}
                alt={name}
              />
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
