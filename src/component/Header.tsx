import { useEffect, useState } from "react";
import foodieGoLogo from "../assets/FoodiGO_Logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  useEffect(() => {
    console.log("header render");
  }, [btnName]);

  return (
    <div className="header">
      <div className="logo-container">
        <img alt="logo" src={foodieGoLogo} />
      </div>
      <div className="nav-item">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="about-us">About us</Link>
          </li>
          <li>
            <Link to="contact-us">Contact us</Link>
          </li>
          <li>Cart</li>
        </ul>
        <button
          onClick={() => {
            btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
          }}
        >
          {btnName}
        </button>
      </div>
    </div>
  );
};

export default Header;
