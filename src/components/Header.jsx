import React from "react";
import { GiConverseShoe } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

const Header = () => {
  //! yönlendirme için navigate kullandım
  const navigate = useNavigate();
 
  return (
    <header className="border-b-2 flex justify-around p-5 items-center">
      <div
        onClick={() => navigate("/")}
        className="flex items-center gap-3 cursor-pointer"
      >
        <h1 className="text-3xl font-bold">Sneakers</h1>
        <GiConverseShoe className="text-3xl" />
      </div>

      <nav>
        <ul className="flex text-gray-500 items-center gap-5">
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>

      <div className="flex gap-4">
        <FaShoppingCart
          onClick={() => navigate("/basket/basket-list")}
          className="text-xl cursor-pointer"
        />
        <RxAvatar className="text-xl" />
      </div>
    </header>
  );
};

export default Header;
