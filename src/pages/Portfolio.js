import Navigation from "../components/Navigation";
import "../styles/Portfolio.css";
import img1 from "../images/bpa1.png"
import img2 from "../images/bpa2.png"

const Portfolio = () => {
  return (
    <>
      <Navigation />
      <h2>Projects</h2>
      <div className="projects-container">
        <div className="p-left-container">
          <a href="https://site-2130176-7698-2986.mystrikingly.com/" target="_blank">
          <img src={img1} class="image1"/>
          </a>
        </div>
        <div className="p-right-container">
          <a href="https://constructionbpa2019.mystrikingly.com/" target="_blank">
            <img src= {img2} class="image2"/>
          </a>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
