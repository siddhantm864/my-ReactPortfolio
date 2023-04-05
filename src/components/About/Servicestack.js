import React from "react";
import { Col, Row } from "react-bootstrap";
import { MdDesignServices, MdOutlineDeveloperMode } from "react-icons/md";
import { FaElementor } from "react-icons/fa"

function Servicestack() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons">
                <MdDesignServices />
                <p style={{ fontSize: "1.4rem" }}><i><b>Web Design</b></i> </p>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <MdOutlineDeveloperMode />
                <p style={{ fontSize: "1.4rem" }}><i><b>Web Dev.</b></i> </p>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <FaElementor />
                <p style={{ fontSize: "1.4rem" }}><i><b>Mentor</b></i> </p>
            </Col>
        </Row>
    );
}
export default Servicestack;
