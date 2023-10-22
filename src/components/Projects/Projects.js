import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import CNN_project from "../../Assets/Projects/CNN_project.png";
import TradeLab from "../../Assets/Projects/TradeLab.jpg";
import LearnlyApp from "../../Assets/Projects/LearnlyApp.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CNN_project}
              title="Emotion-Recognition-CNN"
              description="Using the Pytorch framework, I trained a Convolutional Neural Network (CNN) classifier model. This model has been meticulously trained on the fer-2013 dataset, allowing it to make highly accurate predictions pertaining to seven distinct human emotions. ."
              ghLink="https://github.com/AzizHlila/Emotion-Recognition-CNN"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TradeLab}
              isBlog={false}
              title="Trading Indicator Library"
              description="AZ Trading Indicator Library, a collection of Python classes designed to empower traders with precise calculations of key indicators like MACD, SMA, RSI, and more. Enhance your trading strategies and harness the potential of data-driven decision-making in the world of financial markets."
              ghLink="https://github.com/AzizHlila/AZ-Trading-Indicator-Library"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={LearnlyApp}
              isBlog={false}
              title="Learnly"
              description="Learnly is an Android app designed to help you manage your learning and productivity. It combines a Pomodoro timer, a to-do list, and statistics tracking to enhance your learning experience. With Learnly, you can efficiently manage your study sessions, stay organized, and monitor your progress."
              ghLink="https://github.com/AzizHlila/Learnly-Releases"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
