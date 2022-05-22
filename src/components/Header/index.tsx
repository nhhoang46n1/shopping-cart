import React, { FC } from "react";
import Cart from "./Cart";
import HeaderName from "./HeaderName";
import Navigation from "./Navigation";

const Header: FC = () => {
  return (
    <div className="bg-pink-300 shadow-md">
      <div className="container mx-auto px-10">
        <div className="flex items-center justify-between py-2">
          <div className="flex items-center gap-8 w-1/3">
            <Navigation />
          </div>
          <div className="w-1/3">
            <HeaderName />
          </div>
          <div className="w-1/3">
            <Cart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
