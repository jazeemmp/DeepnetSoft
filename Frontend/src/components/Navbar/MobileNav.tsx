import { RxCross1 } from "react-icons/rx";

interface MobileNavProps {  
  setShow: (show: boolean) => void;
}
const MobileNav:React.FC<MobileNavProps> = ({setShow}) => {
  return (
    <div className="w-[70%] h-screen bg-[#121618] fixed top-0 right-0 z-50">
      <div className="flex justify-start p-8">
        <div onClick={()=>setShow(false)} className="text-[#fff] text-3xl">
          <RxCross1 />
        </div>
      </div>
      <ul className="flex font-[Oswald] flex-col gap-5 items-center justify-center text-[#fff]">
        <li className="hover:text-[#0796EF] cursor-pointer">HOME</li>
        <li className="hover:text-[#0796EF] cursor-pointer">MENU</li>
        <li className="hover:text-[#0796EF] cursor-pointer">MAKE A RESERVATION</li>
        <li className="hover:text-[#0796EF] cursor-pointer">CONTACT US</li>
      </ul>
    </div>
  )
}

export default MobileNav