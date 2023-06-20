import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myimg from '../../Images/avatar.svg'
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span style={{color:'rgb(94, 98, 209)'}}> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I have a good knowledge of
              <i>
                <b style={{color:'rgb(94, 98, 209)'}}> JavaScript, HTML, and CSS. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b style={{color:'rgb(94, 98, 209)'}}>Web Technologies and Products. </b> 
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b style={{color:'rgb(94, 98, 209)'}}>Node.js</b> and
              <i>
                <b style={{color:'rgb(94, 98, 209)'}}>
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b style={{color:'rgb(94, 98, 209)'}}> React.js.</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myimg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND 
            
            <i>
                <b style={{color:'rgb(94, 98, 209)'}}>
                
                ME
                </b>
              </i> ON</h1>
            <p>
              Feel free to <span className="black-bold">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/SaiCharanChowdary"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
        
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/nutheti-sai-charan-b03ab3259/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/cherry_charanchowdary/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;