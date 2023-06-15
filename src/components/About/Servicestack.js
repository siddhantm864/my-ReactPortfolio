import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { MdDesignServices, MdOutlineDeveloperMode } from "react-icons/md";
import { FaElementor } from "react-icons/fa"

function Servicestack() {
    // const [isHover, setIsHover] = useState(false);
    const [skillText, displayText] = useState(false)

    // const handleMouseEnter = () => {
    //     setIsHover(true);
    // };
    // const handleMouseLeave = () => {
    //     setIsHover(false);
    // };    

    function displayHandler() {
        displayText(!skillText)
    }
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "35px" }}>
            <Col xs={4} md={2} className="tech-icons" >
                <MdDesignServices />
            </Col>
            {/* <Col xs={4} md={2} className="tech-icons" onClick={displayHandler}>
                <MdDesignServices className={skillText ? 'displayImg' : ''} />
                <p className={skillText ? "display" : "skills-text"}>Design</p>
            </Col> */}
            <Col xs={4} md={2} className="tech-icons" >
                <MdOutlineDeveloperMode />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <FaElementor />
            </Col>
        </Row>
    );
}
export default Servicestack;
