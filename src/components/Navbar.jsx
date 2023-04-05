import { useState, useEffect } from "react";
import CartWidget from "./CartWidget";

const Navbar = () => {
  const [active, setActive] = useState(false);

  window.addEventListener("scroll", () => {
    window.scrollY > 150 ? setActive(true) : setActive(false);
  });

  return (
    <nav className={`nav ${active ? "active" : ""}`}>
      <div className="container">
        <h1 className="logo">
          <a href="#"> Next Mile </a>
        </h1>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <CartWidget />
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
