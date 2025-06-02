import foodieGoLogo from "../assets/FoodiGO_Logo.png";

const Header = () => (
  <div className="header">
    <div className="logo-container">
      <img alt="logo" src={foodieGoLogo} />
    </div>
    <div className="nav-item">
      <ul>
        <li>About us</li>
        <li>Contact us</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
);

export default Header;
