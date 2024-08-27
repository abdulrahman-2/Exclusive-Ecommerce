import { images } from "../../../assets/images";

images;
const Services = () => {
  return (
    <div>
      <div className="services my-[100px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className="service flex items-center justify-center flex-col">
          <div className="w-[70px] h-[70px] rounded-full bg-black border-[10px] border-[#ccc] flex items-center justify-center">
            <img src={images.delivery} alt="" />
          </div>
          <h4 className="mt-[20px] mb-[5px] text-[20px] font-[600]">
            FREE AND FAST DELIVERY
          </h4>
          <p>Free delivery for all orders over $140</p>
        </div>
        <div className="service flex items-center justify-center flex-col">
          <div className="w-[70px] h-[70px] rounded-full bg-black border-[10px] border-[#ccc] flex items-center justify-center">
            <img src={images.customer} alt="" />
          </div>
          <h4 className="mt-[20px] mb-[5px] text-[20px] font-[600]">
            24/7 CUSTOMER SERVICE
          </h4>
          <p>Friendly 24/7 customer support</p>
        </div>
        <div className="service flex items-center justify-center flex-col">
          <div className="w-[70px] h-[70px] rounded-full bg-black border-[10px] border-[#ccc] flex items-center justify-center">
            <img src={images.secure} alt="" />
          </div>
          <h4 className="mt-[20px] mb-[5px] text-[20px] font-[600]">
            MONEY BACK GUARANTEE
          </h4>
          <p>We return money within 30 days</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
