import "./NotFound.css";
import notFound from "../../assets/404.png";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="error-container">
      <h1>Error! Page Not Found</h1>
      <img src={notFound} alt="Not Found" />
      <div className="error-link">
        <NavLink to="/" className="error-link">
          Back To Home
        </NavLink>
      </div>
    </div>
  );
};
export default NotFound;
