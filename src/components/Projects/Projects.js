import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Aos from 'aos';
import "aos/dist/aos.css";
import ProjectCard from "./ProjectCards";
import todo from "../../Assets/Projects/to-do-list.png";
import weather from "../../Assets/Projects/weather.png";


function Projects() {
  useEffect(() => {
    Aos.init = ({})
  }, [])
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "#18345a" }}>
        {/* <p style={{ color: "white" }}> */}
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              title="To-Do-List"
              description="It is an application made with JavaScript,which allows user to store thier daily task or goals.It also has features which categorise the task as completed or uncompleted."
              ghLink="https://github.com/siddhant99m/To-DO-list"
              demoLink="https://siddhant99m.github.io/To-DO-list/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              title="Weather Api"
              description="It is an application designed for weather information of various cities and countries,which shows information of wind,temperature,humdity and many more."
              ghLink="https://github.com/siddhant99m/Weather_Api"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
