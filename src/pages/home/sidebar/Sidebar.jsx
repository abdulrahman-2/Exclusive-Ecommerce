import { IoIosArrowForward } from "react-icons/io";
import { SidebarWrap } from "./Sidebar.style";

const Sidebar = () => {
  return (
    <SidebarWrap className="sidebar mt-10 pr-5 w-[220px] hidden lg:block">
      <ul className="flex flex-col gap-[16px] font-medium">
        <li className="flex items-center justify-between">
          Woman’s Fashion
          <IoIosArrowForward />
        </li>
        <li className="flex items-center justify-between">
          Men’s Fashion
          <IoIosArrowForward />
        </li>
        <li>Electronics</li>
        <li>Home & Lifestyle</li>
        <li>Medicine</li>
        <li>Sports & Outdoor</li>
        <li>Baby’s & Toys</li>
        <li>Groceries & Pets</li>
        <li>Health & Beauty</li>
      </ul>
    </SidebarWrap>
  );
};

export default Sidebar;
