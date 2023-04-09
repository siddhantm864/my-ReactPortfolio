import React from "react";
import { Col, Row } from "react-bootstrap";
import { MdDesignServices, MdOutlineDeveloperMode } from "react-icons/md";
import { FaElementor } from "react-icons/fa"

function Servicestack() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "35px" }}>
            <Col xs={4} md={2} className="tech-icons">
                <MdDesignServices />
                {/* <p style={{ fontSize: "1.4rem" }}></p> */}
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <MdOutlineDeveloperMode />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <FaElementor />
            </Col>
        </Row>
    );
}
export default Servicestack;
