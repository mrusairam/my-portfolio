import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello, I’m <span className="purple">Muhammad Usairam</span> from{" "}
            <span className="purple">Chiniot, Pakistan</span>.
            <br />
            I'm a passionate and detail-oriented <strong>Frontend Developer</strong> with hands-on experience in building responsive and high-performance websites using modern technologies like <strong>React.js</strong> and <strong>Next.js</strong>.
            <br />
            I’m currently pursuing my degree from Government College University Faisalabad, and actively working on real-world projects to sharpen my skills and deliver value.
            <br />
            <br />
            <strong>I help startups, businesses, and individuals bring their ideas to life through clean, user-friendly interfaces and optimized performance.</strong>
            <br />
            <br />
            When I’m not coding, you’ll often find me engaged in:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring new technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching design and development tutorials
            </li>
            <li className="about-activity">
              <ImPointRight /> Researching trends in UI/UX
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "My goal is to build fast, functional, and future-ready web experiences that help brands grow."
          </p>
          <footer className="blockquote-footer">Muhammad Usairam</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
