import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import "../styles/App.css";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { Icon } from "react-icons-kit";
import { user, desktop, alignJustify, addressCard } from "react-icons-kit/fa";
import navPhoto from "../assets/navPhoto.jpg";

export default function ContainedNav() {
  const [state, setState] = useState({
    left: false,
  });
  const useStyles = makeStyles({
    list: {
      width: 250,
    },
    fullList: {
      width: "auto",
    },
  });

  const classes = useStyles();

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <h1 style={{ color: "black", textAlign: "center" }}>Fernando Pineda</h1>
      <div className="photo-container">
        <img src={navPhoto} className="navPhoto" alt="navPhoto" />
      </div>

      <List>
        <Link className="contained-nav-links" to="/about">
          <Icon size="26" icon={user} />
          <li>About Me</li>
        </Link>

        <Divider />

        <Link className="contained-nav-links" to="/projects">
          <Icon size="26" icon={desktop} />
          <li>Projects</li>
        </Link>

        <Divider />

        <Link className="contained-nav-links" to="/resume">
          <Icon size="26" icon={alignJustify} />
          <li>Resume</li>
        </Link>

        <Divider />

        <Link className="contained-nav-links" to="/contact">
          <Icon size="26" icon={addressCard} />
          <li>Contact</li>
        </Link>

        <Divider />
      </List>
    </div>
  );

  return (
    // Contained navbar
    <div className="nav-contained">
      <AppBar style={{ backgroundColor: "#1d3557" }} position="static">
        <Toolbar>
          <IconButton
            onClick={() => {
              setState({ left: true });
            }}
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">Fernando Pineda 2020</Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor={"left"}
        open={state.left}
        onClose={toggleDrawer("left", false)}
      >
        {list("left")}
      </Drawer>
    </div>
    // Contained Navbar
  );
}
