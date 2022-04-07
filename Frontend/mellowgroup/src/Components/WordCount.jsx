import React from 'react';
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Images from "../images/falling_trees.png";
import { Container, Row, Col, Button } from 'react-bootstrap';

function WordCount() {
    const wordTyping =  ["Recreation", "Parks", "Citizen", "Clean Reporting"];
    const [ index, setIndex ] = useState(0);
    const [ blink, setBlink ] = useState(true);
    const [ subIndex, setSubIndex ] = useState(0);
    const [ reverse, setReverse ] = useState(false);

    useEffect(() => {
        if (index === wordTyping.length - 1 && subIndex === wordTyping[index].length) {
          return;
        }
    
        if (
          subIndex === wordTyping[index].length + 1 && 
          index !== wordTyping.length - 1 && 
          !reverse 
        ) {
          setReverse(true);
          return;
        }
    
        if (subIndex === 0 && reverse) {
          setReverse(false);
          setIndex((prev) => prev + 1);
          return;
        }
    
        const timeout = setTimeout(() => {
          setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, Math.max(reverse ? 75 : subIndex === wordTyping[index].length ? 1000 :
                    150, parseInt(Math.random() * 350)));
    
        return () => clearTimeout(timeout);
      }, [subIndex, index, reverse]);
    
      // blinker
      useEffect(() => {
        const timeout2 = setTimeout(() => {
          setBlink((prev) => !prev);
        }, 500);
        return () => clearTimeout(timeout2);
      }, [blink]);

  return (

  <Container>
    <Row className='mt-3'>
      <Col className='mt-5 pl-3'>
          <h1>Mello the Citizen to report parks</h1>
          <h2>
              {`Hello, and Welcome to ${wordTyping[index].substring(0, subIndex)}${blink ? "|" : ""}`}
          </h2>
          <Button className='mt-3' variant="outline-success" size="lg">Rate Parks</Button>
      </Col>
      <Col>
        <img alt='parks' src={Images}/>
      </Col>
    </Row>
  </Container>
  )
}

export default WordCount;