import "./Hero.css";
import { Parallax } from "react-parallax";
import running1 from "/images/running.jpg";
import running2 from "/images/runningTwo.png";

import videoBg from "../../assets/runningVideo.mp4";
const Hero = () => {
  return (
    <>
      <div className="video-container">
      <div className="overlay"></div>
        <video src={videoBg} autoPlay loop muted />
        <div className="video-text">
          <h1>Welcome to Next Mile</h1>
          <p>The best zero-drop running shoes in town</p>
        </div>
      </div>
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
