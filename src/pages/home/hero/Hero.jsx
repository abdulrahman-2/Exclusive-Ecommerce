import { HeroWrap } from "./Hero.style";
import { FaArrowRight } from "react-icons/fa6";
import { images } from "../../../assets/images";

const Hero = () => {
  return (
    <HeroWrap className="hero relative lg:left-10 flex items-center justify-between mt-10 h-[344px] bg-[#000000] py-3 pl-5 md:py-[50px] md:pl-[70px] rounded-xl">
      <div>
        <div className="flex items-center gap-1 md:gap-6 text-white">
          <img className="" src="images/apple-logo.png" alt="" />
          <span className="text-[10px] md:text-[16px]">iPhone 14 Series</span>
        </div>
        <h2 className="text-[25px] md:text-[35px] lg:text-[48px] font-semibold text-white my-[10px] md:my-[20px] lg:my-[30px]">
          Up to 10% off Voucher
        </h2>
        <div className="text-white flex items-center gap-6">
          <span className="text-[12px] md:text-[16px]">Shop Now</span>
          <FaArrowRight />
        </div>
      </div>
      <div>
        <img src={images.hero} alt="" />
      </div>
    </HeroWrap>
  );
};

export default Hero;
