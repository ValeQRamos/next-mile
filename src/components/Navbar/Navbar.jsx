import { useState, useEffect } from "react";
import "./Navbar.css";
import CartWidget from "../CarWidget/CartWidget";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (window.scrollY >= 150) {
      setActive(true);
    } else {
      setActive(false);
    }
  });

  return (
    <nav
      className={`nav ${active ? "active" : ""}`}
      onClick={(event) => console.log(event)}
    >
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
