import { useState } from "react";
import "./Navbar.css";
import CartWidget from "../CarWidget/CartWidget";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState(false);

  window.addEventListener("scroll", () => {
    window.scrollY > 150 ? setActive(true) : setActive(false);
  });

  return (
    <nav className={`nav ${active ? "active" : ""}`}>
      <div className="container">
        <h1 className="logo">
          <Link to="/">Next Mile</Link>
        </h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/category/Trail">Trail</Link>
          </li>
          <li>
            <Link to="/category/Road">Road</Link>
          </li>
          <CartWidget />
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
