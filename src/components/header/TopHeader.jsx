import React from "react";

const TopHeader = () => {
  return (
    <div className="bg-black w-full min-h-[48px] flex items-center gap-3 justify-between px-3 md:px-4">
      <div className="flex-grow flex justify-center">
        <div className="flex items-center gap-0 md:gap-2">
          <p className="text-[#FAFAFA] text-[9px] md:text-[14px]">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>
          <a
            className="text-white underline text-[12px] md:text-[14px]"
            href="#"
          >
            ShopNow
          </a>
        </div>
      </div>
      <select
        name="lang"
        id="lang"
        className="text-black p-1 rounded w-[40px] md:w-[90px]"
      >
        <option value="English" defaultValue>
          English
        </option>
        <option value="Arabic">Arabic</option>
      </select>
    </div>
  );
};

export default TopHeader;
