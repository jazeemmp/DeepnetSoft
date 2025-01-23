import banner3 from "../../assets/Rectangle3.png";
import cocktail2 from "../../assets/cocktail.png";
import cocktail from "../../assets/orange.png";
import frame1 from "../../assets/Frame1.png";
import frame2 from "../../assets/Frame2.png";
import { useEffect, useState } from "react";
import CreateMenuModal from "./CreateMenuModal";
import axios from "../../api/axios";
import banner2 from "../../assets/Rectangle2.png";
import { FormValues } from "../../interface/interface";

const Main = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [menus, setMenus] = useState<any>([]);
  const [currentMenu, setCurrentMenu] = useState<any>([]);
  const getMenus = async () => {
    try {
      const { data } = await axios.get("/get/menu");
      setMenus(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async(values:FormValues)=>{
    try {
      const {data} = await axios.post('/add/menu', values);
      console.log(data);
      setMenus((prevMenus: any) => {
        const existingMenuIndex = prevMenus.findIndex((menu: any) => menu.menuName === data.menuName);

        if (existingMenuIndex > -1) {
          const updatedMenus = [...prevMenus];
          updatedMenus[existingMenuIndex] = data; 
          return updatedMenus;
        } else {
          return [...prevMenus, data];
        }
      });
      setCurrentMenu(data)
      setOpenModal(false);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getMenus();
  }, []);
  return (
    <>
      {" "}
      <div
        className="w-full p-5 bg-cover bg-center flex gap-5 items-center justify-center overflow-y-auto"
        style={{ backgroundImage: `url(${banner2})` }}
      >
        {menus.map((menu: any) => (
          <button
            style={{ textShadow: "2px 1px 0px #800020" }}
            onClick={() => setCurrentMenu(menu)}
            className="md:w-[114px] w-[72px] md:h-[50px] h-[31px] uppercase bg-black text-white font-[oswald] font-semibold md:text-[18px] text-[12px] leading-[27px] border-[0.5px] border-[#0796EF]"
          >
            {menu.menuName}
          </button>
        ))}
      </div>
      <main
        className="w-full h-[650px] bg-cover bg-center flex items-center justify-center md:justify-between"
        style={{ backgroundImage: `url(${banner3})` }}
      >
        <img src={frame1} className="hidden md:block" />
        <div className="w-[80%] h-[416px] md:px-20 px-5 border-4 border-[#fff] relative flex flex-col items-center py-10">
          <img
            src={cocktail}
            className="absolute md:-left-14 md:-top-36 -top-5 -left-0 md:w-[190px] w-[76px]"
            alt=""
          />
          <img
            src={cocktail2}
            className="absolute -right-2 md:-bottom-8 -bottom-4 md:w-[190px] w-[76px]"
            alt=""
          />
          <div className="flex items-center gap-5">
            <div className="md:w-[68px] w-[50px] h-[3px] bg-[#857878] rounded-2xl"></div>
            <h1
              style={{ textShadow: "4px 3px 0px #800020" }}
              className="text-white md:text-[50px] text-[30px] text-center font-[Oswald] w-[140px]  md:w-full"
            >
              BRUNCH COCKTAILS
            </h1>
            <div className="md:w-[68px] w-[50px] h-[3px] bg-[#857878] rounded-2xl"></div>
          </div>
          {currentMenu?.items?.length > 0 ? (
            <div className="w-full mt-5 h-full overflow-y-auto custom-scrollbar">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
                {currentMenu.items.map((item: any, index: number) => (
                  <div
                    key={item.itemName}
                    className={`mb-5 ${index % 2 === 0 ? "mt-0" : ""}`}
                  >
                    <p className="text-white md:text-[24px] text-[16px] uppercase flex items-center justify-between">
                      <span>{item.itemName}</span>
                      <span className="flex-grow border-dotted border-b-[3px] border-white mx-2"></span>
                      <span className="text-white text-[20px]">{`$${item.price}`}</span>
                    </p>
                    <p className="text-gray-300 kelly-slab-regular md:text-[16px] text-[14px] leading-[1.5]">
                      {item.itemDescription}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center">
              <p className="font-[Oswald] text-white text-[30px] mt-20">
                Please select a menu to see items.
              </p>
            </div>
          )}

          {menus.length <= 0 && (
            <div className="text-center">
              <p className="font-[Oswald] text-white text-[20px] ">
                The menu is empty. Please click the button below to add an item.
              </p>
            </div>
          )}
          <button
            onClick={() => setOpenModal(true)}
            className="uppercase absolute -bottom-5 cursor-pointer font-[Oswald] text-white bg-[#0796EF] py-1 px-3 mt-5"
          >
            Add Menu
          </button>
          {openModal && <CreateMenuModal handleSubmit={handleSubmit} setOpenModal={setOpenModal} />}
        </div>

        <img src={frame2} className="hidden md:block" />
      </main>
    </>
  );
};

export default Main;
