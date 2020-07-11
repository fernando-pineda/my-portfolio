import React from "react";
import "../styles/App.css";
import navPhoto from "../assets/navPhoto.jpg";
import { Icon } from "react-icons-kit";
import {
  linkedinSquare,
  githubSquare,
  twitterSquare,
  user,
  desktop,
  alignJustify,
  addressCard,
} from "react-icons-kit/fa";
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";

export default function Nav() {
  const styles = {
    paragraph: {
      color: "white",
      textAlign: "center",
      fontWeight: "light",
      fontSize: 18,
      width: "90%",
      // backgroundColor: "red",
      paddingLeft: 10,
    },
  };

  return (
    <nav className="navContainer">
      {/* Social media, short introduction */}
      <div className="welcome-container">
        <h1 style={{ color: "white", textAlign: "center" }}>Fernando Pineda</h1>
        <div className="photo-container">
          <img src={navPhoto} className="navPhoto" alt="navPhoto" />
        </div>
        <p style={styles.paragraph}>
          Hi, my name is Fernando and I am a junior software engineer. Welcome
          to my personal website!
        </p>
      </div>
      {/* Social media icons row */}
      <div className="icon-list">
        <div className="icons-container">
          <div className="icons-grid">
            <IconButton
              style={{ padding: 5 }}
              href="https://www.linkedin.com/in/fernando-pineda-a201aa1a6/"
              aria-label="delete"
            >
              <Icon className="btn-color" size="35" icon={linkedinSquare} />
            </IconButton>

            <IconButton
              style={{ padding: 5 }}
              href="https://github.com/fernando-pineda/"
              aria-label="delete"
            >
              <Icon className="btn-color" size="35" icon={githubSquare} />
            </IconButton>

            <IconButton
              style={{ padding: 5 }}
              href="https://twitter.com/___evo"
              aria-label="delete"
            >
              <Icon className="btn-color" size="35" icon={twitterSquare} />
            </IconButton>
          </div>
        </div>
      </div>
      {/* Social media icons row */}

      {/* Social media, short introduction */}

      {/* Pages nav */}

      <ul className="links-container">
        <Link className="nav-links" to="/about">
          <Icon size="20" icon={user} />
          <li>About Me</li>
        </Link>
        <Link className="nav-links" to="/projects">
          <Icon size="20" icon={desktop} />
          <li>Projects</li>
        </Link>
        <Link className="nav-links" to="/resume">
          <Icon size="20" icon={alignJustify} />
          <li>Resume</li>
        </Link>
        <Link className="nav-links" to="/contact">
          <Icon size="20" icon={addressCard} />
          <li>Contact</li>
        </Link>
      </ul>

      {/* Pages nav */}
    </nav>
  );
}
