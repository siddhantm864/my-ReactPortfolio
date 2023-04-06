import React from "react";
import { Col, Row } from "react-bootstrap";
import { IoLogoCss3, } from "react-icons/io";
import { AiFillHtml5 } from "react-icons/ai";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiMysql,
  DiBootstrap,
} from "react-icons/di";
import {
  SiCplusplus,
  SiExpress
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiCplusplus />
        <p style={{ fontSize: "1.4rem" }}><i><b>C++</b></i> </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <AiFillHtml5 />
        <p style={{ fontSize: "1.4rem" }}><i><b>HTML</b></i> </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <IoLogoCss3 />
        <p style={{ fontSize: "1.4rem" }}><i><b>CSS</b></i> </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiBootstrap />
        <p style={{ fontSize: "1.4rem" }}><i><b>Bootstrap</b></i> </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <p style={{ fontSize: "1.4rem" }}><i><b>Java Script</b></i> </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <p style={{ fontSize: "1.4rem" }}><i><b>Node.Js</b></i> </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <p style={{ fontSize: "1.4rem" }}><i><b>React.Js</b></i> </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiExpress />
        <p style={{ fontSize: "1.4rem" }}><i><b>Express.Js</b></i> </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <p style={{ fontSize: "1.4rem" }}><i><b>MongoDb</b></i> </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql />
        <p style={{ fontSize: "1.4rem" }}><i><b>SQL</b></i> </p>
      </Col>
    </Row>
  );
}

export default Techstack;
