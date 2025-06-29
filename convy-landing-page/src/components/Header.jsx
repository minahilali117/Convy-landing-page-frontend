import React from "react";
const Header = () => {
  return (
    <nav className="shadow-sm bg-[#00B0C8] h-[70px] w-full flex items-center justify-between px-[100px]">
      <img src="/images/Convy_app_logo 1.png" className="h-[33px] pl-[35px]" />
      <button className="w-[168px] h-[45px] border border-white rounded-full text-center text-white text-[18px] font-['Montserrat'] font-semibold">
        Get The App
      </button>
    </nav>
  );
};

export default Header;
