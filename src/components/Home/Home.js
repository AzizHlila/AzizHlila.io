import React , { useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import About from "../About/About";
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'

function Home() {
  const myRef = useRef(null);

  // Function to handle the scroll action
  const scrollToView = () => {
    // Scroll to the element using the scrollIntoView method
    myRef.current.scrollIntoView({ behavior: 'smooth' });
  };
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
                  <Button onClick={scrollToView}
                      variant="outline-light"
                      style={{
                        // textDecoration: 'none',
                        display: 'inline-block',
                        marginTop:"20px",
                        borderRadius: '5px',
                        textAlign: 'center',
                        position: 'relative' ,
                      }}>

                      Contact Me
                  </Button>
                  <Link to={'/resume'}>

                  <Button variant="info"
                  
                  style={{
                    // textDecoration: 'none',
                    display: 'inline-block',
                    marginTop:"20px",
                    marginLeft:"20px",
                    borderRadius: '5px',
                    textAlign: 'center',
                    position: 'relative' , // never remove
                  }}>

                      Download CV</Button>{' '}

                    </Link>
              
              </div>
            </Col>

        
          </Row>
        </Container>
      </Container>
      <About />
      <div style={{ height: '200px', overflowY: 'scroll' }}>
        {/* Element to scroll to */}
        <div id="scrollToElement" ref={myRef}></div>
      <Home2/>
      </div>

    </section>
  );
}

export default Home;
