import React, { useState } from "react";
import { useSelector } from "react-redux";
import Header from "../../Components/Header";
import { FaRegTrashAlt } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import NotFound from "../../Components/NotFound";

const Basket = () => {
  const [values, setValues] = useState(useSelector((state) => state.baskets));
  const [quantities, setQuantities] = useState({});
  const [cartItemCount, setCartItemCount] = useState(values.length);

  const calculateTotal = (price, quantity) => {
    return price * quantity;
  };

  const handleIncrement = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: (prevQuantities[id] || 0) + 1,
    }));
    setCartItemCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = (id) => {
    if (quantities[id] > 0) {
      setQuantities((prevQuantities) => ({
        ...prevQuantities,
        [id]: prevQuantities[id] - 1,
      }));
      setCartItemCount((prevCount) => prevCount - 1);
    }
  };

  const handleRemove = (id) => {
    setValues(values.filter((item) => item.id !== id));

    // Sepetteki ürün sayısını güncelle
    setCartItemCount((prevCount) => prevCount - 1);

    // Eğer miktarları da sıfırlamak isterseniz:
    setQuantities((prevQuantities) => {
      const newQuantities = { ...prevQuantities };
      delete newQuantities[id];
      return newQuantities;
    });
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
          <thead className="bg-gray-50">
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
            {values.map(({ id, name, imgUrl, price }) => (
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
                      <button onClick={() => handleIncrement(id)}>
                        <CiCirclePlus />
                      </button>
                    </div>
                    <div>
                      <span>{quantities[id] || 0}</span>
                    </div>
                    <div>
                      <button onClick={() => handleDecrement(id)}>
                        <CiCircleMinus />
                      </button>
                    </div>
                  </div>
                </td>

                <td className="px-6 py-4 ">
                  <div className="text-sm text-gray-900">
                    {calculateTotal(price, quantities[id] || 0)}
                  </div>
                </td>
                <td className="px-6 py-4   ">
                  <button
                    className="text-red-700 hover:text-red-900"
                    onClick={() => handleRemove(id)}
                  >
                    <FaRegTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Basket;
