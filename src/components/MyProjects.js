import React from "react";
import "../styles/App.css";
import Mov1 from "../assets/movienator_1.jpeg";
import Mov2 from "../assets/movienator_3.jpeg";
import Portfolio from "../assets/portfolio.png";
import VDS from "../assets/videogameDataSearch.png";
import { Button } from "@material-ui/core";
import { github } from "react-icons-kit/fa";
import { Icon } from "react-icons-kit";
import Chip from "@material-ui/core/Chip";

function MyProjects() {
  const styles = {
    title: {
      color: "black",
      margin: 0,
      fontSize: 60,
      fontWeight: "bold",
      paddingBottom: 20,
      paddingTop: 15,
    },
  };

  const listProjects = () => {
    let projects = [
      {
        images: [Portfolio],
        backgroundColor: "#e9ecef",
        date: "July 2020",
        title: "Portfolio",
        description:
          "I've had a lot of fun writing my portfolio's code, I've fixed a lot of bugs, learned about CSS Media Queries and got a great Flexbox understanding. I now feel cappable of work in bigger web applications  whether Front or Backend.",
        technologies: [
          "React",
          "React Hooks, Router",
          "Material UI",
          "React Bootstrap",
          "JavaScript",
        ],
        githubPage: "https://github.com/fernando-pineda/my-portfolio",
      },
      {
        images: [Mov1, Mov2],
        backgroundColor: "white",
        date: "June - July 2020",
        title: "WayNené - Recorre la ciudad de Mérida",
        description:
          "A project that I've made as a college assignmennt. Scan a QR code and it will provide information about the place you're visiting. ",
        technologies: [
          "React Native",
          "React Navigation",
          "Firebase",
          "NodeJS",
          "Expo",
        ],
        githubPage: "https://github.com/fernando-pineda/qr-waynene",
      },
      {
        images: [Mov1, Mov2],
        backgroundColor: "#e9ecef",
        date: "April - Currently in development",
        title: "Movienator",
        description:
          "Search, watch trailers, save and share your opinion with your friends! You can also watch trailers in the discover section. ",
        technologies: [
          "React Native",
          "Expo",
          "RN Elements",
          "JavaScript",
          "Fetch",
          "TheMovieDB API",
          "AsyncStorage",
        ],
        githubPage: "https://github.com/fernando-pineda/movie-db",
      },
      {
        images: [VDS],
        date: "January 2020",
        backgroundColor: "white",
        title: "Videogames Info",
        description:
          "My very first React web application. It took me a weekend to understand the basics and make this project. It provides custom information and specific information to the user.",
        technologies: ["React Native", "JavaScript", "NodeJS", "Fetch"],
        githubPage: "https://github.com/fernando-pineda/videogame-fetch",
      },
    ];

    return projects.map((element) => {
      return (
        <div style={{ backgroundColor: element.backgroundColor, flex: 1 }}>
          <div className="project-grid">
            <div className="project-photo-grid">
              {element.images.map((element) => {
                return (
                  <img alt="project" src={element} className="project-photo" />
                );
              })}
            </div>
            <div
              style={{
                flex: 2,
                display: "flex",
                flexDirection: "column",
                paddingLeft: "1rem",
              }}
            >
              <h1>{element.title}</h1>
              <p>{element.description}</p>

              <p>Technologies:</p>
              <div
                style={{
                  flexDirection: "row",
                  display: "flex",
                }}
              >
                {element.technologies.map((element) => {
                  return (
                    <div style={{ padding: "5px" }}>
                      <Chip variant="outlined" label={element} />
                    </div>
                  );
                })}
              </div>
              <div
                style={{
                  alignSelf: "flex-end",
                  flex: 1,
                  display: "flex",
                }}
              >
                <Button
                  href={element.githubPage}
                  variant="contained"
                  color="default"
                  // style={{ width: 200 }}
                  startIcon={
                    <Icon style={{ color: "black" }} size="20" icon={github} />
                  }
                  disableElevation
                  size="small"
                  style={{ alignSelf: "flex-end" }}
                >
                  <p
                    style={{
                      fontWeight: "bolder",
                      fontSize: 18,
                      padding: 0,
                      margin: 0,
                    }}
                  >
                    VIEW ON GITHUB
                  </p>
                </Button>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="projects-container" style={{ backgroundColor: "#e9ecef" }}>
      <div className="container">
        <h1 style={styles.title}>My Projects</h1>
      </div>

      {listProjects()}
    </div>
  );
}

export default MyProjects;
