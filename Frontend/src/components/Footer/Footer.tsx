import { GrPhone } from "react-icons/gr";
import { CiMail } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import logo from "../../assets/Logo.png";
import { SlSocialFacebook } from "react-icons/sl";
import { RiTwitterXFill } from "react-icons/ri";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-screen bg-black container md:p-20 p-8 pt-20  pb-16">
      <div className=" mx-auto p-3 w-full flex flex-col md:flex-row justify-around gap-5">
        <div className=" md:hidden border-[1px] md:border-2 border-[#fff] md:w-[373px] rounded-xl flex flex-col items-center justify-center p-5 relative">
          <img
            src={logo}
            alt=""
            className="absolute w-[74px] bg-black -top-10"
          />
          <div className="flex gap-3 font-[Oswald] font-normal  text-[35px] leading-[51.87px]  mt-5">
            <div className="gap-2 flex ">
              <span className="text-[#0796EF]">DEEP</span>
              <span className="text-[#fff]">NET</span>
            </div>
            <p className="text-[#857878] tracking-[5%]">SOFT</p>
          </div>
          <div className="flex text-[#857878] justify-center items-center gap-4 mt-2">
            <SlSocialFacebook />
            <RiTwitterXFill />
            <AiOutlineYoutube />
            <FaInstagram />
          </div>
        </div>
        <div className="border-[1px] md:border-2 border-[#fff] md:w-[373px] rounded-xl flex flex-col items-center justify-center p-5">
          <h1 className="uppercase text-[#0796EF] font-medium font-[Oswald] text-[14px] md:text[16px]">
            Connect with Us
          </h1>
          <div className="flex gap-2 justify-center items-center">
            <GrPhone className="text-[#C5A059]" />
            <p className="text-[#857878]">+91 9567843340</p>
          </div>
          <div className="flex gap-2 justify-center items-center">
            <CiMail className="text-[#C5A059]" />
            <p className="text-[#857878]">info@deepnetsoft.com</p>
          </div>
        </div>
        <div className="hidden md:flex border-[1px] md:border-2 border-[#fff] md:w-[373px] rounded-xl  flex-col items-center justify-center p-5 relative">
          <img
            src={logo}
            alt=""
            className="absolute w-[74px] bg-black -top-10"
          />
          <div className="flex gap-3 font-[Oswald] font-normal  text-[35px] leading-[51.87px]  mt-5">
            <div className="gap-2 flex ">
              <span className="text-[#0796EF]">DEEP</span>
              <span className="text-[#fff]">NET</span>
            </div>
            <p className="text-[#857878] tracking-[5%]">SOFT</p>
          </div>
          <div className="flex text-[#857878] justify-center items-center gap-4 mt-2">
            <SlSocialFacebook />
            <RiTwitterXFill />
            <AiOutlineYoutube />
            <FaInstagram />
          </div>
        </div>
        <div className="border-[1px] md:border-2 border-[#fff] md:w-[373px] rounded-xl flex flex-col items-center justify-center p-5">
          <h1 className="uppercase text-[#0796EF] font-medium font-Oswald text-[14px] md:text[16px]">
            Find us
          </h1>
          <div className="flex gap-2 justify-center items-center text-center">
            <IoLocationOutline className="text-[#C5A059]" />
            <p className="text-[#857878]">
              First floor, Geo infopark,
              <br /> Infopark EXPY, Kakkanad
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;