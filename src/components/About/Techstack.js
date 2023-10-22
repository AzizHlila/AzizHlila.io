import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiAndroid,
  DiDjango
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiDjango,
  SiSolidity,
  SiPostgresql,
  SiJavascript,
  SiAndroid,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <Col xs={1} md={2} className="tech-icons">
        <DiPython />
        Python
      </Col>
      <Col xs={1} md={2} className="tech-icons">
        <DiGit />
        Git
      </Col>
      <Col xs={1} md={2} className="tech-icons">
        <DiJava />
        Java
      </Col>
      <Col xs={1} md={2} className="tech-icons">
        Django
      </Col>
      <Col xs={1} md={3} className="tech-icons">
        <DiAndroid />
        Android
      </Col>
      <Col xs={1} md={1} className="tech-icons">
        <CgCPlusPlus />
      </Col>
      <Col xs={1} md={3} className="tech-icons">
        Java Script
      </Col>
      <Col xs={1} md={2} className="tech-icons">
        <DiReact />
        React
      </Col>
      <Col xs={1} md={3} className="tech-icons">
        <SiFirebase />
        Firebase
      </Col>
    </Row>
  );
}

export default Techstack;
