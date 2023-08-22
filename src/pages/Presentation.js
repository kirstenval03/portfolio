import { useState, useEffect } from 'react'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { CaretRightSquareFill } from 'react-bootstrap-icons'
import { Link } from "react-scroll";

import foto1 from "../assets/images/foto1.png"



export const Presentation = () => {
  const [loopI, setLoopI] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const txtAnimation = ["Full Stack Developer", " Frontend Developer", "Backend Developer"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(200 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const period = 2000;

  useEffect(() => {
    let writer = setInterval(() => {
      writting();
    }, delta)
    return () => { clearInterval(writer) };
  }, [text])

  const writting = () => {
    let i = loopI % txtAnimation.length;
    let fullText = txtAnimation[i];
    let updatedText = deleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (deleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!deleting && updatedText === fullText) {
      setDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);

    } else if (deleting && updatedText === '') {
      setDeleting(false);
      setLoopI(loopI + 1);
      setIndex(1);
      setDelta(250);

    } else {
      setIndex(prevIndex => prevIndex + 1);

    }

  }

return (
  <section className='presentation' id='home'>
    <Container>
      <Row className='align-items-center'>
        <Col xs={12} md={6} xl={7} >
          <span className='tagline'>
            Welcome to my Portfolio!
          </span>
          <h1> {`Hi I'm Kirsten, a`}
            <span className='wrap'> {text} </span>
          </h1>
          <p>About me text...</p>
          <button>
            <Link
              to="socialMedia"
              smooth={true}
              duration={500}
              className="connect-button"
            >
              Connect with me! <CaretRightSquareFill size={30} />
            </Link>
          </button>
        </Col>
        <Col xs={12} md={6} xl={5}>
          <img src={foto1} alt='PresentationImg' className='presentationImg' />

        </Col>

      </Row>
    </Container>

  </section>
)
}

