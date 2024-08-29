import Button from "../../components/button/Button";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { MdDeleteForever } from "react-icons/md";
import {
  removeFromCart,
  incrementProduct,
  decrementProduct,
  removeAllProducts,
} from "../../redux/cart/cartSlice";

const TotalCart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (cartItem) => {
    dispatch(removeFromCart(cartItem));
  };

  const handleRemoveAllProducts = () => {
    dispatch(removeAllProducts());
  };

  const handleDecrement = (cartItem) => {
    dispatch(decrementProduct(cartItem));
  };

  const handleIncrement = (cartItem) => {
    dispatch(incrementProduct(cartItem));
  };

  const calculateSubtotal = (price, quantity) => {
    return price * quantity;
  };

  const calculateTotalCost = () => {
    return cartItems.reduce((total, cartItem) => {
      return total + calculateSubtotal(cartItem.price, cartItem.cartQuantity);
    }, 0);
  };

  const totalCost = calculateTotalCost();

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
              <th className="p-4 text-center">Delete</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((cartItem) => (
              <tr key={cartItem.id} className="border-b">
                <td className="p-4 text-left">
                  <img
                    className="w-16 h-16"
                    src={cartItem.image}
                    alt={cartItem.name}
                  />
                </td>
                <td className="p-4 text-left">{cartItem.name}</td>
                <td className="p-4 text-center">
                  <div className="flex justify-center items-center">
                    <button
                      className="border px-2 py-1"
                      onClick={() => handleDecrement(cartItem)}
                    >
                      -
                    </button>
                    <input
                      type="text"
                      value={cartItem.cartQuantity}
                      readOnly
                      className="w-12 text-center border mx-2"
                    />
                    <button
                      className="border px-2 py-1"
                      onClick={() => handleIncrement(cartItem)}
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className="p-4 text-center">{`$${cartItem.price}`}</td>
                <td className="p-4 text-center">
                  {`$${calculateSubtotal(
                    cartItem.price,
                    cartItem.cartQuantity
                  ).toFixed(2)}`}
                </td>
                <td>
                  <div className="flex items-center justify-center">
                    <MdDeleteForever
                      size={28}
                      className="text-[#DB4444] cursor-pointer flex items-center justify-center"
                      onClick={() => handleRemoveFromCart(cartItem)}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex flex-col-reverse md:flex-row items-center justify-between mb-10 gap-5">
        <Link to="/">
          <Button
            name="Return To Shop"
            style="md:py-3 md:px-8 border-2 border-gray-400 text-center"
          />
        </Link>
        <Button
          name="Remove all Cart"
          style="bg-[#DB4444] text-white md:py-3 text-center"
          onClick={handleRemoveAllProducts}
        />
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
            <span>{`$${totalCost.toFixed(2)}`}</span>
          </div>
          <div className="flex items-center justify-between my-4 pb-3 border-b-[1px] border-gray-300">
            <span>Shipping:</span>
            <span>Free</span>
          </div>
          <div className="flex items-center justify-between pb-3 border-b-[1px] border-gray-300">
            <span>Total:</span>
            <span>{`$${totalCost.toFixed(2)}`}</span>
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
