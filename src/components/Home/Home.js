import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              
              <h1 className="heading">
              <span  className="wave" role="img" aria-labelledby="wave">
              Hi
              </span>
                , my name is{" "}

              </h1>

              <h1 className="heading-name">
                <strong className="main-name"> Aziz Hlila.</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

        
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
