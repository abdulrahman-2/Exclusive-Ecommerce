import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import Button from "../../components/button/Button";

const Contact = () => {
  return (
    <div className="my-14">
      <div className="text-[14px] flex items-center gap-2 mb-14">
        <span className="text-gray-400">Home</span>
        <span>/</span>
        <span>Contact</span>
      </div>
      <div className="flex flex-col md:flex-row gap-5">
        <div className="p-7 border-[1px] border-[#F5F5F5]">
          <div className="flex flex-col gap-7 pb-6 border-b-2 border-gray-300">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-[40px] h-[40px] bg-[#DB4444] rounded-full">
                <FiPhone size={24} className="text-white" />
              </div>
              <span>Call To Us</span>
            </div>
            <span className="text-[14px]">
              We are available 24/7, 7 days a week.
            </span>
            <span className="text-[14px]">Phone: +8801611112222</span>
          </div>
          <div className="flex flex-col gap-7 mt-7">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-[40px] h-[40px] bg-[#DB4444] rounded-full">
                <MdOutlineEmail size={24} className="text-white" />
              </div>
              <span>Write To US</span>
            </div>
            <p className="text-[14px]">
              Fill out our form and we will contact <br /> you within 24 hours.
            </p>
            <span className="text-[14px]">Emails: customer@exclusive.com</span>
            <span className="text-[14px]">Emails: support@exclusive.com</span>
          </div>
        </div>
        <div className="p-7 flex-1 border-[1px] border-[#F5F5F5]">
          <form>
            <div className="flex flex-col md:flex-row items-center gap-5">
              <input
                type="text"
                placeholder="Your Name *"
                className="p-2 text-white w-full border-none outline-none bg-[#F5F5F5] rounded"
              />
              <input
                type="email"
                placeholder="Your Email *"
                className="p-2 text-white w-full border-none outline-none bg-[#F5F5F5] rounded"
              />
              <input
                type="phone"
                placeholder="Your Phone *"
                className="p-2 text-white w-full border-none outline-none bg-[#F5F5F5] rounded"
              />
            </div>
            <textarea
              className="h-[210px] resize-none my-7 p-4 bg-[#F5F5F5] rounded w-full"
              placeholder="Your Massage"
            ></textarea>
            <div className="mb-4 sm:mb-5">
              <Button name="Send Massage" style={"ml-auto"} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
