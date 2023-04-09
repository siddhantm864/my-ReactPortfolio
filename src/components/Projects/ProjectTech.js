import React from "react";
import Card from "react-bootstrap/Card";
import { IconContext } from "react-icons";
import { DiJavascript1, DiCss3, DiHtml5, DiBootstrap, } from 'react-icons/di';
import { AiFillApi } from 'react-icons/ai'


function ProjectTech(params) {
    switch (params.title) {
        case 'To-Do-List':
            return (
                <Card.Footer >
                    <small className="text-muted ">
                        <IconContext.Provider value={{ color: '#d1d1d1', size: 36, marginTop: "0" }}>
                            <>
                                <p style={{fontSize: "16px", fontWeight: "medium" }} >Tech Stack:</p>
                                <DiHtml5 color="rgb(221, 75, 37)" />
                                <DiBootstrap color="rgb(128, 17, 245)"/>
                                <DiCss3 color="rgb(38, 77, 228)"/>
                                <DiJavascript1 color="#efd81d"/>
                            </>
                        </IconContext.Provider>
                    </small>
                </Card.Footer >
            )
        case 'Weather Api':
            return (
                <Card.Footer >
                    <small className="text-muted ">
                        <IconContext.Provider value={{ color: '#d1d1d1', size: 36 }}>
                            <>
                                <p style={{ fontSize: "16px", fontWeight: "medium" }} >Tech Stack:</p>
                                <DiHtml5 color="rgb(221, 75, 37)" />
                                <DiBootstrap color="rgb(128, 17, 245)"/>
                                <DiCss3 color="rgb(38, 77, 228)"/>
                                <DiJavascript1 color="#efd81d"/>
                                <AiFillApi color="gray"/>
                            </>
                        </IconContext.Provider>
                    </small>
                </Card.Footer >

            )
        default:
            return "";
    }

}
export default ProjectTech;