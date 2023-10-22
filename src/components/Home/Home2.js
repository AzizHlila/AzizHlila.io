import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar2.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillMail
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
               <span className="purple"> A Brief Introduction</span> 
            </h1>
                           <br />

            <p className="home-about-body">
            Hello, I'm Aziz Hlila, a student of software engineering who is passionate about developing technological solutions. Web development, machine learning, and native Android app development are some of my areas of competence.
            <br />
            <br />

              <span className="purple"> Web development: </span> 
              I able to create dynamic, user-friendly websites. I enjoy transforming ideas into digital experiences that not only look fantastic but also work perfectly.
               <br />               
               <br />

               <span className="purple"> Machine learning: </span> 

                I've been exploring AI models for a range of applications due to my curiosity with machine learning. I'm motivated by the limitless potential of this constantly developing discipline, which ranges from picture recognition to tackling challenging real-world challenges.
                <br />
                <br />
                <span className="purple"> Native Android App Development: </span> 

I have the ability to create native Android applications with an emphasis on user-centric functionality and design. I have a love for developing mobile solutions that improve user experience.


                

            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/AzizHlila"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/aziz-hlila-bb2293243"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/aziz_hlila/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:hlilaaziz@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillMail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
