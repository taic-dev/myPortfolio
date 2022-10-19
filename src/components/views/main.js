import React from "react";
import About from "../templates/about";
import Contact from "../templates/contact";
import Fv from "../templates/fv";
import Skill from "../templates/skill";
import Works from "../templates/works";

const Main = () => {
  return (
    <div className="top">
      <main className="main">
        <Fv></Fv>
        <About></About>
        <Skill></Skill>
        <Works></Works>
        <Contact></Contact>
      </main>
      <footer>
        <p>created by taic-dev</p>
      </footer>
    </div>
  );
};

export default Main;
