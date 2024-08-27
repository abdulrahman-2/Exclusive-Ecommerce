import React from "react";

const CheckOut = () => {
  return (
    <div className="my-14">
      <div className="text-[12px] md:text-sm flex items-center gap-2 mb-14 text-gray-500">
        <span>Account</span>
        <span>/</span>
        <span>My Account</span>
        <span>/</span>
        <span>Product</span>
        <span>/</span>
        <span>View Cart</span>
        <span>/</span>
        <span className="text-black">CheckOut</span>
      </div>
      <div className="flex flex-col lg:flex-row gap-20 md:gap-40">
        <div className="flex-1">
          <h4 className="text-xl font-semibold mb-6">Billing Details</h4>

          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium">
                First Name
              </label>
              <input
                type="text"
                className="bg-[#F5F5F5] outline-none w-full mt-2 px-3 py-2 border rounded-md shadow-sm"
                id="name"
                name="name"
              />
            </div>

            <div>
              <label
                htmlFor="companyName"
                className="block text-sm font-medium"
              >
                Company Name
              </label>
              <input
                type="text"
                className="bg-[#F5F5F5] outline-none w-full mt-2 px-3 py-2 border rounded-md shadow-sm"
                id="companyName"
                name="companyName"
              />
            </div>

            <div>
              <label
                htmlFor="streetAddress"
                className="block text-sm font-medium"
              >
                Street Address
              </label>
              <input
                type="text"
                className="bg-[#F5F5F5] outline-none w-full mt-2 px-3 py-2 border rounded-md shadow-sm"
                id="streetAddress"
                name="streetAddress"
              />
            </div>

            <div>
              <label htmlFor="apartment" className="block text-sm font-medium">
                Apartment, floor, etc. (optional)
              </label>
              <input
                type="text"
                className="bg-[#F5F5F5] outline-none w-full mt-2 px-3 py-2 border rounded-md shadow-sm"
                id="apartment"
                name="apartment"
              />
            </div>

            <div>
              <label htmlFor="city" className="block text-sm font-medium">
                Town/City
              </label>
              <input
                type="text"
                className="bg-[#F5F5F5] outline-none w-full mt-2 px-3 py-2 border rounded-md shadow-sm"
                id="city"
                name="city"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium">
                Phone
              </label>
              <input
                type="text"
                className="bg-[#F5F5F5] outline-none w-full mt-2 px-3 py-2 border rounded-md shadow-sm"
                id="phone"
                name="phone"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Email Address
              </label>
              <input
                type="email"
                className="bg-[#F5F5F5] outline-none w-full mt-2 px-3 py-2 border rounded-md shadow-sm"
                id="email"
                name="email"
              />
            </div>

            <div className="flex items-center">
              <input
                className="h-4 w-4 text-gray-600 focus:ring-gray-500 border-gray-300 rounded"
                type="checkbox"
                id="saveInfo"
                name="saveInfo"
                value="info"
              />
              <label htmlFor="saveInfo" className="ml-2 text-sm">
                Save this information for faster check-out next time
              </label>
            </div>
          </form>
        </div>

        <div className="flex-1 p-6">
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <img
                  src="images/product/g27cq4-500x500 1.png"
                  alt="g27cq4-500x5"
                  className="w-[50px] h-[42px] object-cover"
                />
                <h6 className="text-sm font-medium">LCD Monitor</h6>
              </div>
              <div>
                <p className="text-sm">$650</p>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <img
                  src="images/product/GP11_PRD3 1.png"
                  alt="HI Gamepad"
                  className="w-[50px] h-[42px] object-cover"
                />
                <h6 className="text-sm font-medium">HI Gamepad</h6>
              </div>
              <div>
                <p className="text-sm">$1100</p>
              </div>
            </div>

            <div className="border-t pt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <p className="font-medium">Subtotal</p>
                <p>$1750</p>
              </div>
              <div className="flex justify-between text-sm">
                <p className="font-medium">Shipping</p>
                <p>Free</p>
              </div>
              <div className="flex justify-between text-lg font-bold">
                <p>Total</p>
                <p>$1750</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="bank"
                    name="payment"
                    className="text-gray-600 focus:ring-gray-500 border-gray-300 rounded"
                  />
                  <label htmlFor="bank" className="ml-2">
                    Bank
                  </label>
                </div>
                <div className="flex items-center gap-3">
                  <img src="../../../../public/images/image 30.png" alt="" />
                  <img src="../../../../public/images/image 31.png" alt="" />
                  <img src="../../../../public/images/image 32.png" alt="" />
                  <img src="../../../../public/images/image 33.png" alt="" />
                </div>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="cash"
                  name="payment"
                  className="text-gray-600 focus:ring-gray-500 border-gray-300 rounded"
                />
                <label htmlFor="cash" className="ml-2">
                  Cash on Delivery
                </label>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <input
                className="flex-1 px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-500"
                placeholder="Coupon Code"
              />
              <button className="px-4 py-2 bg-red-600 text-white rounded-md">
                Apply Coupon
              </button>
            </div>

            <button className="w-full py-3 bg-red-600 text-white font-semibold rounded-md">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
