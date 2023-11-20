import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote  className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          I'm a <span className="purple"><b>software engineering student</b> </span> with experience in multipleprogramming languages such as <span className="purple">Python, Java, and C++</span>. In additionto my proficiency in these languages,
           I also have a solid foundationin <span className="purple">machine learning</span> , enabling me to create intelligent systems thatmake data-driven predictions and decisions.
           In addition, my skillsextend to <span className="purple">web development</span>, where I specialize in crafting fullyresponsive websites using React and Django. Furthermore,
            I have astrong background in native<span className="purple"> Android</span> app development, allowing meto create seamless and efficient mobile applications that cater todiverse user needs.
          
              
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
