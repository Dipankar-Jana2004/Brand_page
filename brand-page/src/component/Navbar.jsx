import "../component/Navbar.css";
import brandLogo from "../assets/brand_logo.svg";

function Navbar() {
  return (
    <nav>
      <div className="logo">
        <img src={brandLogo} alt="Brand Logo" />
      </div>
      <ul>
        <li>
          <a href="#menu">Menu</a>
        </li>
        <li>
          <a href="#location">Location</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <button className="login-button">Login</button>
    </nav>
  );
}

export default Navbar;
