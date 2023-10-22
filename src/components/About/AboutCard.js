import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote  className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Hello, My name is <span className="purple"><b>Aziz Hlila</b> </span>  , and I am a software engineer.
          <br/>
          I have worked with various programming languages, including <span className="purple">Python, Java, and C++ </span> , 
          and have created numerous<span className="purple"> machine Learning models and bots </span>  for web scraping and crypto trading. 
          Additionally, I am proficient in building fully responsive websites using React and Django<span className="purple"> React and Django </span>, 
          and I have a strong background in developing <span className="purple"> native Android applications</span>. 
          <br/>
          My journey in the world of software engineering has been driven by a passion for creating innovative solutions and turning ideas into reality through code and innovation.
          
          <br />               

              
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
