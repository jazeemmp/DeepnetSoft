import banner from "../assets/Rectangle1.png";

const Banner = () => {
  return (
    <>
      <div
        className="w-full h-96 bg-cover bg-center flex flex-col items-center justify-center"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <h1
          style={{ textShadow: "4px 3px 0px #800020" }}
          className="md:text-[75px] text-[40px] font-[Oswald] font-semibold leading-[111.15px] tracking-[0.03em] text-white"
        >
          MENU
        </h1>
        <p className="text-[#BBBBBB] md:text-[18px] text-[12px] kelly-slab-regular text-center">
          Please take a look at our menu featuring food, drinks, and brunch. If
          you'd like to <br />
          place an order, use the "Order Online" button located below the menu.
        </p>
      </div>
    </>
  );
};

export default Banner;
