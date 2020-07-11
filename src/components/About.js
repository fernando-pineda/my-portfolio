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
    textName: {
      color: "black",
      margin: 0,
      fontSize: 60,
      fontWeight: "bold",
      paddingBottom: 20,
    },

    textRole: { color: "black", margin: 0, fontSize: 30 },

    paragraph: {
      // textAlign: "justify",
      fontWeight: "light",
      fontSize: 22,
      // backgroundColor: "red",
    },
  };

  const renderCards = () => {
    // Icon source: https://konpa.github.io/devicon/
    // Paste only the class name on the arrays (without the "devicon-")

    let data = [
      {
        icons: ["javascript-plain colored"],
        type: "Front End",
        description:
          "I've been working with JavaScript since I started my developer career. Enough knowledge of destructuring, promises, try...catch, and so on.   ",
      },
      {
        icons: ["html5-plain colored", "css3-plain colored"],
        type: "Front End",
        description:
          "Clean structure. I've made a project for school with HTML5, CSS3 and Bootstrap.",
      },
      {
        icons: ["react-plain colored"],
        type: "Front End ",
        description:
          "React and React Native. Great understanding and experienced with Hooks.",
      },
      {
        icons: ["bootstrap-plain colored"],
        type: "Front End",
        description:
          "Experienced in using Material-UI, Bootstrap 5, React Bootstrap, React Native Elements.",
      },
      {
        icons: ["nodejs-plain colored", "express-original colored"],
        type: "Backend",
        description: "I've used node-express on an unfinished project. ",
      },
      {
        icons: ["php-plain colored"],
        type: "Backend",
        description: "Post, get, you know the basics.",
      },
      {
        icons: [
          "mysql-plain colored",
          "postgresql-plain colored",
          "mongodb-plain colored",
        ],
        type: "Databases",
        description:
          "I've deployed some server-side databases with both postgresql and mysql. Experienced with no-sql databases such as Mongo and Firebase.",
      },
      {
        icons: ["git-plain colored", "github-plain colored"],
        type: "Version Control",
        description:
          "GitHub has been very useful when I wanted to have a strict version control of my projects. ",
      },
    ];

    return data.map((element, index) => {
      return (
        <div key={index} className="card-grid">
          <Card className="card">
            <CardContent>
              <div style={{ display: "flex", flexDirection: "row" }}>
                {element.icons.map((icon) => {
                  return <i key={icon} className={`devicon-${icon} icon`}></i>;
                })}
              </div>
              <h1>{element.title}</h1>
              <h2>{element.type}</h2>
              <p style={styles.paragraph}>{element.description}</p>
            </CardContent>
          </Card>
        </div>
      );
    });
  };

  return (
    <div className="about-container">
      {/* Information, photo, view portfolio, view resume */}

      <div className="information-container">
        {/* Info */}
        <div className="information-grid">
          <p style={styles.textName}>Fernando Pineda</p>
          <p style={styles.textRole}>Junior Software Engineer</p>

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
                style={{ width: 200 }}
                startIcon={
                  <Icon style={{ color: "black" }} size="20" icon={desktop} />
                }
                disableElevation
                size="medium"
              >
                <strong>My Projects</strong>
              </Button>
            </Link>
            <Link className="about-btn" to="/resume">
              <Button
                variant="contained"
                color="default"
                style={{ width: 200 }}
                startIcon={
                  <Icon
                    style={{ color: "black" }}
                    size="20"
                    icon={alignJustify}
                  />
                }
                disableElevation
                size="medium"
              >
                <strong>View Resume</strong>
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
        <div className="container">
          <div className="card-container">{renderCards()}</div>
        </div>
      </div>
    </div>
  );
}

export default About;
