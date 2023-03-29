import CartWidget from "./CartWidget";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="container">
        <h1 className="logo">
          <a href="#"> Next Mile </a>
        </h1>
        <ul>
          <li> <a href="#">Home</a> </li>
          <li> <a href="#">About</a> </li>
          <li> <a href="#">Contact</a> </li>
          <CartWidget />
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;

