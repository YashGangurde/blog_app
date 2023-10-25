import React from "react";
import "./styles.css";
import TypeWriter from "typewriter-effect";

const Header = () => (
  <header className="home-header">
    <h2><TypeWriter
      options={{
        autostart: true,
        loop: true
      }}
      onInit={(typewriter) => {
        typewriter
          .typeString("What's New Today?")
          .pauseFor(1000)
          .deleteAll()
          .start();
      }}
      
    /></h2>
    <h1>
      <span> BlogTimes </span>
    </h1>
    <p>
      Awesome place to make oneself <br /> productive and entertained through
      daily updates.
    </p>
  </header>
);

export default Header;
