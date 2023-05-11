import "./Hero.css";
import { Parallax } from "react-parallax";
import running1 from "../../../public/images/running.jpg";
const Hero = () => {
  return (
    <Parallax strength={300} blur={{ min: -15, max: 15 }} bgImage={running1}>
      <div className="content">
        <div className="text-content">
          <h1>Welcome To Next Mile</h1>
          <p> The best zero-drop running shoes in town. </p>
        </div>
      </div>
    </Parallax>
  );
};
export default Hero;
