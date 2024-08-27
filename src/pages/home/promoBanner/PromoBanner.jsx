import { useState, useEffect } from "react";
import { images } from "../../../assets/images";

const PromoBanner = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const countDownDate = new Date("Aug 26, 2024 00:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      if (countDownDate > now) {
        const distance = countDownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    const intervalId = setInterval(updateCountdown, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const { days, hours, minutes, seconds } = timeLeft;
  return (
    <div className="bg-black w-full p-10 mb-10 mt-20 rounded-sm flex flex-col lg:flex-row items-center justify-between">
      <div className="info flex flex-col self-start gap-4 md:gap-6 lg:gap-8 mb-6 lg:mb-0">
        <span className="text-green-400">Categories</span>
        <h2 className="text-white text-2xl md:text-4xl lg:text-5xl font-semibold leading-none">
          Enhance Your <br /> Music Experience
        </h2>
        <div className="countDown">
          <div className="expireTime flex items-center gap-2 md:gap-4">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full flex flex-col items-center justify-center bg-white">
              <p className="text-sm md:text-base lg:text-lg font-bold">
                {days}
              </p>
              <span className="text-[12px] font-medium">days</span>
            </div>
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full flex flex-col items-center justify-center bg-white">
              <p className="text-sm md:text-base lg:text-lg font-bold">
                {hours}
              </p>
              <span className="text-[12px] font-medium">hours</span>
            </div>
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full flex flex-col items-center justify-center bg-white">
              <p className="text-sm md:text-base lg:text-lg font-bold">
                {minutes}
              </p>
              <span className="text-[12px] font-medium">minutes</span>
            </div>
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full flex flex-col items-center justify-center bg-white">
              <p className="text-sm md:text-base lg:text-lg font-bold">
                {seconds}
              </p>
              <span className="text-[12px] font-medium">seconds</span>
            </div>
          </div>
        </div>
        <button className="w-40 md:w-48 lg:w-56 bg-green-400 py-2 md:py-3 lg:py-4 px-4 md:px-6 lg:px-8 rounded-sm text-white">
          Buy Now!
        </button>
      </div>
      <div className="w-full lg:w-auto">
        <img src={images.JBL} alt="Promo Image" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default PromoBanner;
