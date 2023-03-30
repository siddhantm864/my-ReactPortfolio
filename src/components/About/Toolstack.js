import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import Aos from 'aos';
import "aos/dist/aos.css";
import {
  SiVisualstudiocode,
  SiPostman,
  SiGit,
  SiGithub,
} from "react-icons/si";

function Toolstack() {
  useEffect(()=>{
    Aos.init=({duration:2000})

  },[])
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col  xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <p style={{ fontSize: "1.4rem" }} ><i><b>VS Code</b></i> </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <p style={{ fontSize: "1.4rem" }}><i><b>Postman</b></i> </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
        <p style={{ fontSize: "1.4rem" }}><i><b>Github</b></i> </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGit />
        <p style={{ fontSize: "1.4rem" }}><i><b>Git</b></i> </p>
      </Col>
    </Row>
  );
}

export default Toolstack;
