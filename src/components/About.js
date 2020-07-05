import React from "react";
import "../styles/App.css";
import aboutPhoto from "../assets/aboutPhoto.jpg";
import { Link } from "react-router-dom";

function About() {
  const styles = {
    hText: { color: "white", margin: 0 },
  };

  return (
    <div className="about-container">
      {/* Information, photo, view portfolio, view resume */}

      <div className="information-container">
        {/* Info */}
        <div className="container">
          <h1 style={styles.hText}>Fernando Pineda</h1>
          <h2 style={styles.hText}>Junior Software Engineer</h2>

          <p className="about-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In molestie
            elementum molestie. Donec imperdiet consectetur nisi, ac lacinia
            nunc ullamcorper non. Pellentesque habitant morbi tristique senectus
            et netus et malesuada fames ac turpis egestas. Nulla id malesuada
            nisl. Sed ultrices id orci vitae hendrerit. Morbi quam enim, dapibus
            id suscipit quis, tincidunt nec orci. Interdum et malesuada fames ac
            ante ipsum primis in faucibus.
          </p>

          <div className="button-container">
            <Link to="/projects">
              <div className="btn">
                <a className="btn-text">View Portfolio</a>
              </div>
            </Link>
            <Link to="/resume">
              <div className="btn">
                <a className="btn-text">View Resume</a>
              </div>
            </Link>
          </div>
        </div>

        {/* Info */}

        {/* Photo */}
        <div className="container">
          <div className="photo-container">
            <img src={aboutPhoto} className="about-photo" alt="aboutPhoto" />
          </div>
        </div>
        {/* Photo */}
      </div>
      {/* Information, photo, view portfolio, view resume */}

      {/*  */}
    </div>
  );
}

export default About;
