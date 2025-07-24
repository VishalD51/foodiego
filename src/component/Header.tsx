import { useEffect, useState } from "react";
import foodieGoLogo from "../assets/FoodiGO_Logo.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  useEffect(() => {
    console.log("header render");
  }, [btnName]);

  const cartItem = useSelector((store) => store.cart.cartItem);

  return (
    <div className="flex justify-between p-[10px] shadow-md shadow-gray-500 mb-2.5">
      <div className="w-24">
        <img alt="logo" src={foodieGoLogo} className="rounded-full" />
      </div>
      <div className="flex gap-2.5 items-center">
        <ul className="flex flex-nowrap items-center gap-8 mr-3">
          <li className="hover:text-blue-500">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-blue-500">
            <Link to="about-us">About us</Link>
          </li>
          <li className="hover:text-blue-500">
            <Link to="contact-us">Contact us</Link>
          </li>
          <li className="hover:text-blue-500">
            <Link to="grocery">Grocery</Link>
          </li>
          <li className="hover:text-blue-500">
            <Link to="cart">Cart - {cartItem.length}</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
