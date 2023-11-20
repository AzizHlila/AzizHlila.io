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
  DiDjango,
  DiHtml5,
  DiJsBadge,
  DiPhp
} from "react-icons/di";
import { FaPhp } from "react-icons/fa";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiDjango,
  SiSolidity,
  SiPostgresql,
  SiJavascript,
  SiAndroid,
  SiKotlin,
  SiNumpy,
  SiTensorflow,
  SiPytorch,
  SiPandas,
  SiPhp,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {

  const Skills = [
    ['Python', DiPython],
    ['Git', DiGit],
    ['Java', DiJava],
    ['Kotlin', SiKotlin],
    ['Android', DiAndroid],
    ['C++',null],
    ['JavaScript', DiJsBadge],
    ['Tensorflow', SiTensorflow],
    ['Pytorch', SiPytorch],
    ['Pandas', SiPandas],
    
    ['Django', SiDjango],
    ['React', DiReact],
    ['Firebase', SiFirebase],

    ['Php', SiPhp],
    ['Html ', DiHtml5],
    ['Numpy ' , SiNumpy],

  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px", margin: "50px"}}>
      {Skills.map(([skill, IconComponent], index) => (
          <Col xs={1} md={1} className="tech-icons">
            <tr key={index}>
              <td>{IconComponent && <IconComponent />}</td>
              <td>{skill}</td>
            </tr>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
