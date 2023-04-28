import "./Navbar.css";
import { useState, useEffect } from "react";
import CartWidget from "../CartWidget/CartWidget";
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const { totalItems } = useCartContext();

  const changeColor = () => {
    window.scrollY >= 150 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return () => window.removeEventListener("scroll", changeColor);
  }, []);

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
          {totalItems() > 0 && <CartWidget />}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
