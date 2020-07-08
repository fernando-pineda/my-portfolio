import React from "react";
import "../styles/App.css";
import aboutPhoto from "../assets/aboutPhoto.jpg";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { Icon } from "react-icons-kit";
import { alignJustify, desktop } from "react-icons-kit/fa";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

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

          <p className="paragraphs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In molestie
            elementum molestie. Donec imperdiet consectetur nisi, ac lacinia
            nunc ullamcorper non. Pellentesque habitant morbi tristique senectus
            et netus et malesuada fames ac turpis egestas. Nulla id malesuada
            nisl. Sed ultrices id orci vitae hendrerit. Morbi quam enim, dapibus
            id suscipit quis, tincidunt nec orci. Interdum et malesuada fames ac
            ante ipsum primis in faucibus.
          </p>

          <div className="button-container">
            <Link className="about-btn" to="/projects">
              <Button
                variant="contained"
                color="default"
                startIcon={
                  <Icon style={{ color: "white" }} size="20" icon={desktop} />
                }
                disableElevation
                size="small"
              >
                About Me
              </Button>
            </Link>
            <Link className="about-btn" to="/resume">
              <Button
                variant="contained"
                color="default"
                startIcon={
                  <Icon
                    style={{ color: "white" }}
                    size="20"
                    icon={alignJustify}
                  />
                }
                disableElevation
                size="small"
              >
                View Resume
              </Button>
            </Link>
          </div>
        </div>

        {/* Info */}

        {/* Photo */}

        <img src={aboutPhoto} className="about-photo" alt="aboutPhoto" />

        {/* Photo */}
      </div>
      {/* Information, photo, view portfolio, view resume */}

      {/* What I do - Skills */}
      <div className="skills-container">
        <div className="container">
          <div className="title-container">
            <h1>What I do</h1>
          </div>
          <p className="paragraphs">
            Kitty scratches couch bad kitty scratch my tummy actually i hate you
            now fight me destroy couch as revenge get my claw stuck in the dog's
            ear, but ask for petting for somehow manage to catch a bird but have
            no idea what to do next, so play with it until it dies of shock.
          </p>
        </div>

        <div className="card-container">
          <Card className="card-columns">
            <CardContent>
              <h1>Title</h1>
              <p>Content</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <h1>Title</h1>
              <p>Content</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <h1>Title</h1>
              <p>Content</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default About;
