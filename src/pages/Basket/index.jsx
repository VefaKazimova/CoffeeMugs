import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../Components/Header";
import { FaRegTrashAlt } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import NotFound from "../../Components/NotFound";
import { decremented, incremented, removeProduct } from "../../Slice";

const Basket = () => {
  const values = useSelector((state) => state.baskets);
  const dispatch = useDispatch();

  const removeToCard = ({ id }) => {
    dispatch(
      decremented({
        id,
      })
    );
  };

  const _removeProduct = ({ id }) => {
    dispatch(
      removeProduct({
        id,
      })
    );
  };

  const addToCard = ({ id }) => {
    dispatch(
      incremented({
        id,
      })
    );
  };

  if (values.length === 0) {
    return (
      <>
        <Header />
        <NotFound />
      </>
    );
  }

  return (
    <div>
      <Header />
      <div className="flex justify-center items-center">
        <table className="w-[90%] mt-6">
          <thead className="bg-gray-50 ">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Product
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Price
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Quantity
              </th>

              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Subtotal
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Remove
              </th>
            </tr>
          </thead>
          <tbody className="bg-white ">
            {values.map((prod) => {
              const { id, imgUrl, name, price, count } = prod;

              return (
                <tr key={id}>
                  <td className="px-6 py-4 ">
                    <div className="flex items-center ">
                      <div className=" h-10 w-10">
                        <img
                          className="h-10 w-10 rounded-full"
                          src={imgUrl}
                          alt={name}
                        />
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 ">
                    <div className="text-sm font-medium text-gray-900">
                      {name}
                    </div>
                  </td>
                  <td className="px-6 py-4 ">
                    <div className="text-sm text-gray-900">{price}</div>
                  </td>
                  <td className="px-6 py-4 ">
                    <div className="text-sm text-gray-900 flex items-center gap-5">
                      <div>
                        <button
                          onClick={() => {
                            addToCard(prod);
                          }}
                        >
                          <CiCirclePlus />
                        </button>
                      </div>
                      <div>
                        <span>{count}</span>
                      </div>
                      <div>
                        <button>
                          <button
                            onClick={() => {
                              removeToCard(prod);
                            }}
                            className="text-red-700 hover:text-red-900"
                          >
                            <CiCircleMinus />
                          </button>
                        </button>
                      </div>
                    </div>
                  </td>

                  <td className="px-6 py-4 ">
                    <div
                      before="$"
                      after="USD"
                      className="text-sm text-gray-900 before:content-[attr(before)] after:content-[attr(after)] after:m-1 before:mr-1"
                    >
                      {price}
                    </div>
                  </td>
                  <td className="px-6 py-4   ">
                    <button
                      onClick={() => {
                        _removeProduct(prod);
                      }}
                      className="text-red-700 hover:text-red-900"
                    >
                      <FaRegTrashAlt />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Basket;
