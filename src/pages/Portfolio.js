import Navigation from "../components/Navigation";
import "../styles/Portfolio.css";

const Portfolio = () => {
  return (
    <>
      <Navigation />
      <div className="aboutMe-container">
        <div className="left-container">
          <img src="Image1.png" />
        </div>
        <div className="right-container">
          <p>Hello!!</p>
          <h1>This is portfolio</h1>
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

export default Portfolio;
