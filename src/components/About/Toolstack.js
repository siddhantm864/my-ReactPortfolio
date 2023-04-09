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
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGit />

      </Col>
    </Row>
  );
}

export default Toolstack;
