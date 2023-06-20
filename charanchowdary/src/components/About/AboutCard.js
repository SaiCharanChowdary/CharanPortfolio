import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span style={{color:'rgb(154, 228, 11)'}}>Sai Charan </span>
            from <span className="purple"> Andhra Pradesh, India.</span>
            <br /> I am a final year student pursuing an B.tech
            in CSE at Parul university.
          
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Kdrama
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Believe in the power of your dreams, for they hold the key to unlocking your 
            limitless potential and creating a future of extraordinary possibilities."{" "}
          </p>
          <footer className="blockquote-footer">Sai Charan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;