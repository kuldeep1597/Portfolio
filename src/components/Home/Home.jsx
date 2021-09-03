import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import homeAnime from "./../../assets/home_anime.gif";

const Home = () => {
  return (
    <div className="home-container">
      <div className="header-text">
        <h1>My Portfolio</h1>
        <h2>This is Kuldeep Chahar</h2>
        <p>Web Developer</p>
      </div>
      <div className="head-btns">
        <Link to="/about" className="btn btn-white">
          <p className="btn-text">Know More About Me</p>
        </Link>
        <Link to="/contact" className="btn btn-transparent">
          <p className="btn-text">Connect with Me</p>
        </Link>
      </div>
      <div className="splash-image">
        <img src={homeAnime} alt="Home-Animation" className="home-anime" />
      </div>
    </div>
  );
};
export default Home;
