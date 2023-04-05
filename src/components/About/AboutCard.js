import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, Myself <span className="purple"> Siddhant Mishra </span>
            from <span className="purple"> Varanasi, India.</span>
            <br />
            <br />I am a Full Stack Web Developer with curiousity about learning new skills, tools, and concepts. In addition to working on various solo projects, I have worked with creative teams, which involves daily stand-ups and communications.
            <br />
            <br />Currently I have been working with a Budding Startup where i work on <span className="purple">Express.js and Rest Api.</span>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening Music & Songs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling and Exploring places
            </li>
          </ul>

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
