import React from "react";
import "./AboutScreen.css";
import about1 from "./images/s.jpg";
import { Link } from "react-router-dom";

function AboutScreen() {
  return (
    <>
      <div className="about-heading">
        <h2>My name is Siddharth Jain </h2>
        <h3>I'm the owner of this website</h3>
        <h4>I hope guys you are enjoying this website</h4>
        <img className="about-image" src={about1} />
      </div>
      <div className="about-description">
        <p>
          I'm a web developer and this website is my portoflio to show my
          fresher skills in fronted language using React besides it in this
          website I'm providing <strong>Shopping</strong> or{" "}
          <strong>Movie-ticket-booking</strong> and <strong>Restauranat</strong>{" "}
          to have some testy food and last one is <strong>About me</strong>!
        </p>
      </div>
      <div className="about-social">
        <h2>My Social media Handle you are eligible to contact with me</h2>
        <ul>
          <li>
            <a target="_blank" href="https://github.com/jsidd06">
              <i class="fab fa-github-alt"></i>
            </a>
            <a target="_blank" href="https://www.instagram.com/sidd.jain.90/">
              <i class="fab fa-instagram"></i>
            </a>
            <a target="_blank" href="https://www.facebook.com/sidd.jain.90/">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a target="_blank" href="https://api.whatsapp.com/send/?phone=8979492547&text&app_absent=0">
              <i class="fab fa-whatsapp"></i>
            </a>
          </li>
        </ul>
        <h2>Thanks for coming here <strong>❤</strong>!</h2>
        <hr/>
      </div>
    </>
  );
}

export default AboutScreen;
