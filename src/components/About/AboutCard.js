import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Hua Phu Thien </span>
            from <span className="purple"> Ho Chi Minh city, VietNam.</span>
            <br />
            <br />
            I'm a senior student at the University of Information Technology,
            specializing in the Faculty of Information Science and Engineering.
            My academic pursuits have allowed me to stay updated with the latest
            industry trends and technologies, and I'm eager to continue
            expanding my knowledge and expertise in the field.
            <br />
            My goal is to further advance my career as a software engineer,
            using my skills and experience to contribute to innovative and
            impactful projects in the field of information technology.
            <br />
            <br />
            Some of my hobbies are
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Jodding
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to music
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading book
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
