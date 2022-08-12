/* eslint-disable jsx-a11y/alt-text */
import Navigation from "../components/Navigation";
import "../styles/AboutMe.css";
import Image from "../images/Image1.png"

const AboutMe = () => {
  return (
    <>
      <Navigation />
      <div className="aboutMe-container">
        <div className="left-container">
          <img src={Image} />
        </div>
        <div className="right-container">
          <p>Hello!!</p>
          <h1>I am Ishrat Khan</h1>
          <p>
            I am a student at the University of Michigan - Ann Arbor, where I am
            studying computer engineering.
          </p>
          <p>
            Some of my hobbies include baking, dancing, and playing computer
            games.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
