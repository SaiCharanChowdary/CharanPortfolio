import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import aboutme from '../../Images/aboutme.png';
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Toolstack from "./Toolstack";

function About() {
  return (
    <section>
      <div className="background-container">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/moon2.png"
          alt=""
        />
        <div className="stars"></div>
        <div className="twinkling"></div>
        <div className="clouds"></div>
      </div>
      <Container fluid className="about-section">
        <Container>
          <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col md={5}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              src={aboutme}
              className="img"
              alt="avatar"
              style={{ width: "60%" }}
            />
          </div>
          </Col>
            <Col
              md={7}
              style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
              }}
            >
              <h1
                style={{
                  fontSize: "2.1em",
                  paddingBottom: "20px",
                  color: "rgb(154, 228, 11)",
                }}
              >
                Know Who <strong style={{ color: "white" }}>I'M</strong>
              </h1>
           
              <Aboutcard />
            </Col>
            <Col
              md={5}
              style={{ paddingTop: "0", paddingBottom: "50px" }}
              className="about-img"
            ></Col>
          </Row>
          <h1 className="project-heading">
            Professional <strong className="purple">Skillset </strong>
          </h1>
          <Techstack />
          <h1 className="project-heading">
            <strong className="purple">Tools</strong> I use
          </h1>
          <Toolstack />
        </Container>
      </Container>
    </section>
  );
}

export default About;
