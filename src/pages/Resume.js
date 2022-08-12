/* eslint-disable jsx-a11y/alt-text */
import Navigation from "../components/Navigation";
import "../styles/Resume.css";

const Resume = () => {
  return (
    <>
      <Navigation />
        <div className="resume-container">
            <h3>I have experience with the following coding languages:</h3>
            <p>-C++</p>
            <p>-Python</p>
            <p>-HTML</p>
            <p>-Matlab</p>
        </div>
        <div className="resume-container">
            <h3>Certification:</h3>
            <p>-Information Technology  Fundamental (ITF+)</p>
            <a href="https://docs.google.com/document/d/1X9ISxjhEO-9OMkOu0KhIktvsAOB-la8X/edit?usp=sharing&ouid=115325040935364209450&rtpof=true&sd=true" target="_blank" class="link">Full Resume Here</a>
        </div>
    </>
  );
};

export default Resume;
