import React from "react";
import { Button } from "@material-ui/core";
import { download } from "react-icons-kit/fa";
import { Icon } from "react-icons-kit";
import { Link } from "react-router-dom";
import CV from "../files/Fernando_Pineda_CV.pdf";
import CL from "../files/Fernando_Pineda_Cover_Letter.docx";
import CVPreview from "../assets/CV_Preview.png";

export default function Resume() {
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
  return (
    <div className="resume-container">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            flex: 1,
            flexDirection: "column",
            display: "flex",
            padding: "1rem",
          }}
        >
          <h1 style={styles.title}>Resume</h1>
          <p>
            This is a preview of my resume, you can always download it by
            clicking on the <strong>Download</strong> button below.
          </p>

          <div style={{ display: "flex", flexDirection: "row", flex: 1 }}>
            <Link to={CV} target="_blank" download>
              <Button
                variant="contained"
                color="default"
                // style={{ width: 200 }}
                startIcon={
                  <Icon style={{ color: "black" }} size="20" icon={download} />
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
                  RESUME
                </p>
              </Button>
            </Link>

            <Link to={CL} target="_blank" download>
              <Button
                variant="contained"
                color="default"
                // style={{ width: 200 }}
                startIcon={
                  <Icon style={{ color: "black" }} size="20" icon={download} />
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
                  COVER LETTER
                </p>
              </Button>
            </Link>
          </div>
        </div>

        <img src={CVPreview} alt="cvpreview" className="cv-preview" />
      </div>
    </div>
  );
}
