import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Tvshows from '../../Images/Tvshows.png'
import Matchfour from '../../Images/Matchfour.png'
import Schat from '../../Images/Schat.png'


function Projects() {
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
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
               imgPath={Tvshows}
              isBlog={false}
              title="TVShows"
              description="[TV SHOWS] This section contains a list of TV shows along with their summaries. Additionally, 
              there is a &quot;Book Ticket&quot; button that allows users to enter their movie name, phone number, and email.
               The user data will be stored in the local storage."
              ghLink="https://github.com/SaiCharanChowdary/Tv-Shows"
              demoLink="https://tvmazee-ja8f.onrender.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Schat}
              isBlog={false}
              title="SChat"
              description="&quot;SChat&quot; is a real-time chat application built with React.js, Node.js, and Socket.io.
               It enables users to engage in real-time messaging, 
               facilitating seamless and instant communication between friends.."
              ghLink="https://github.com/SaiCharanChowdary/REAL-TIME-CHAT-API"
              demoLink="https://schats.onrender.com"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard 
               imgPath={Matchfour}
              isBlog={false}
              title="Match Four"
              description="&quot;Match4&quot; is a game developed using JavaFX where two players take turns dropping 
              colored discs into a grid,aiming to connect four of their discs vertically, horizontally, or diagonally before their opponent does."
              ghLink="https://github.com/SaiCharanChowdary/Match-Four"
             
            />
          </Col>
        </Row>
      </Container>
    </Container>
    </section>
  );
}

export default Projects;