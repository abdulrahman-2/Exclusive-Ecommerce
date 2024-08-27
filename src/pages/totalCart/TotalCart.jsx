import React, { useState } from "react";
import { Link } from "react-router-dom";

const TotalCart = () => {
  // const [quantities, setQuantities] = useState([1, 1]); // Assuming 2 products

  const products = [
    {
      name: "LCD Monitor",
      price: 650,
      image: "images/product/g27cq4-500x500 1.png",
    },
    {
      name: "H1 Gamepad",
      price: 50,
      image: "images/product/GP11_PRD3 1.png",
    },
  ];

  const handleQuantityChange = (index, value) => {
    const newQuantities = [...quantities];
    newQuantities[index] = parseInt(value, 10);
    setQuantities(newQuantities);
  };

  const handleDecrement = (index) => {
    const newQuantities = [...quantities];
    if (newQuantities[index] > 1) {
      newQuantities[index]--;
      setQuantities(newQuantities);
    }
  };

  const handleIncrement = (index) => {
    const newQuantities = [...quantities];
    newQuantities[index]++;
    setQuantities(newQuantities);
  };

  const calculateSubtotal = (price, quantity) => {
    return price * quantity;
  };

  const totalCost = quantities.reduce(
    (acc, quantity, index) =>
      acc + calculateSubtotal(products[index].price, quantity),
    0
  );

  return (
    <div className="my-14 px-4 md:px-8">
      <div className="text-[14px] flex items-center gap-2 mb-14">
        <span className="text-gray-400">Home</span>
        <span>/</span>
        <span>Cart</span>
      </div>
      <div className="table-responsive overflow-x-auto w-full mb-6">
        <table className="table-auto w-full border-collapse">
          <thead>
            <tr className="border-b">
              <th className="p-4 text-left">Product Image</th>
              <th className="p-4 text-left">Product Name</th>
              <th className="p-4 text-center">Quantity</th>
              <th className="p-4 text-center">Unit Price</th>
              <th className="p-4 text-center">Total</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index} className="border-b">
                <td className="p-4 text-left">
                  <img
                    className="w-16 h-16"
                    src={product.image}
                    alt={product.name}
                  />
                </td>
                <td className="p-4 text-left">{product.name}</td>
                <td className="p-4 text-center">
                  <div className="flex justify-center items-center">
                    <button
                      className="border px-2 py-1"
                      onClick={() => handleDecrement(index)}
                    >
                      -
                    </button>
                    <input
                      type="text"
                      value={quantities[index]}
                      onChange={(e) =>
                        handleQuantityChange(index, e.target.value)
                      }
                      className="w-12 text-center border mx-2"
                    />
                    <button
                      className="border px-2 py-1"
                      onClick={() => handleIncrement(index)}
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className="p-4 text-center">{product.price} LE</td>
                <td className="p-4 text-center">
                  {calculateSubtotal(product.price, quantities[index])} LE
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between mb-10 gap-5">
        <button className="py-2 px-4 md:py-3 md:px-8 border-2 border-gray-400 rounded-sm text-center">
          Return To Shop
        </button>
        <button className="py-2 px-4 md:py-3 md:px-8 border-2 border-gray-400 rounded-sm text-center">
          Update Cart
        </button>
      </div>
      <div className="flex flex-col md:flex-row justify-center md:justify-between gap-5">
        <div className="flex flex-col md:flex-row items-center gap-3 mb-5 md:mb-0">
          <input
            className="outline-none border-[1px] border-gray-300 py-2 px-3 md:px-5 rounded-sm"
            type="text"
            placeholder="Coupon Code"
          />
          <button className="py-2 px-4 md:px-8 bg-[#DB4444] text-white font-[500] rounded-sm">
            Apply Coupon
          </button>
        </div>
        <div className="p-5 border-2 border-gray-300 rounded w-full md:w-[370px]">
          <h4 className="text-[20px] font-medium mb-6">Cart Total</h4>
          <div className="flex items-center justify-between pb-3 border-b-[1px] border-gray-300">
            <span>Subtotal:</span>
            <span>${totalCost}</span>
          </div>
          <div className="flex items-center justify-between my-4 pb-3 border-b-[1px] border-gray-300">
            <span>Shipping:</span>
            <span>Free</span>
          </div>
          <div className="flex items-center justify-between pb-3 border-b-[1px] border-gray-300">
            <span>Total:</span>
            <span>${totalCost}</span>
          </div>
          <Link to={"/CheckOut"}>
            <button className="py-2 px-4 md:py-3 md:px-8 bg-[#DB4444] text-white font-[500] mt-4 mx-auto block rounded-sm">
              Proceed to Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TotalCart;
