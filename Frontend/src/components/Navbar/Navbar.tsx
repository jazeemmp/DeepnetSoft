import { useState } from "react";
import logo from "../../assets/Logo.png";
import { AiOutlineMenu } from "react-icons/ai";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const [show, setShow] = useState<boolean>(false);
  return (
    <nav className="w-screen relative h-[100px] bg-[#121618] flex justify-around items-end  pb-2 z-10">
      <div className="flex  relative left-0  md:-bottom-13">
        <img
          src={logo}
          className="w-[86px] h-[76px] relative -bottom-11 md:bottom-0"
        />
        <div className="hidden md:flex flex-col font-[Oswald] font-normal  text-[35px] leading-[51.87px] ">
          <div className="gap-2 flex ">
            <span className="text-[#0796EF]">DEEP</span>
            <span className="text-[#fff]">NET</span>
          </div>
          <p className="text-[#857878] tracking-[5%] leading-none text-nowrap">
            SOFT
          </p>
        </div>
      </div>
      <div onClick={()=>setShow(true)} className="flex md:hidden right-5 top-[50%]  transform -translate-y-1/2 absolute justify-end items-center h-full ">
        <AiOutlineMenu className="md:hidden text-3xl text-[#857878]" />
      </div>

      <div className="md:flex hidden font-[Oswald] justify-end text-white h-full items-end ">
        <ul className="flex gap-10 text-[16px] leading-[30px]">
          <li className="hover:text-[#0796EF] cursor-pointer">HOME</li>
          <li className="hover:text-[#0796EF] cursor-pointer">MENU</li>
          <li className="hover:text-[#0796EF] cursor-pointer">
            MAKE A RESERVATION
          </li>
          <li className="hover:text-[#0796EF] cursor-pointer">CONTACT US</li>
        </ul>
      </div>
      {show && (<MobileNav setShow={setShow} />)}
    </nav>
  );
};

export default Navbar;
