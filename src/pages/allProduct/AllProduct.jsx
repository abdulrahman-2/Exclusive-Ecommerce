import Cart from "../../components/cart/Cart";
import { useSelector } from "react-redux";

const AllProduct = () => {
  const products = useSelector((state) => state.product.products);
  return (
    <div className="my-14 px-4 md:px-8">
      <div className="text-[14px] flex items-center gap-2 mb-14">
        <span className="text-gray-400">Home</span>
        <span>/</span>
        <span>All Products</span>
      </div>
      <div className="products my-14 grid gap-8 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => {
          return <Cart key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default AllProduct;
