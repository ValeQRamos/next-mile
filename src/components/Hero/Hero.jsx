import "./Hero.css";
import { Parallax } from "react-parallax";
import running1 from "../../../public/images/running.jpg";
import running2 from "../../../public/images/runningTwo.png";
const Hero = () => {
  return (
    <>
      <Parallax strength={200} blur={{ min: -20, max: 15 }} bgImage={running1}>
        <div className="content">
          <div className="text-content">
            <h1>Welcome To Next Mile</h1>
            <p> The best zero-drop running shoes in town. </p>
          </div>
        </div>
      </Parallax>
      <Parallax strength={200} blur={{ min: -20, max: 15 }} bgImage={running2}>
        <div className="content">
          <div className="text-content">
            <div className="h2-content">
              <h2>Running</h2>
              <h2>Better</h2>
              <h2>Every day</h2>
            </div>
          </div>
        </div>
      </Parallax>
    </>
  );
};
export default Hero;
