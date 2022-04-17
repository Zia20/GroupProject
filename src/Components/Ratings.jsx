import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa'
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, Button, Spinner } from 'react-bootstrap';
import Images from "../images/globeBG.png";

const Ratings = () => {

const [rating, setRating] = useState(null);
const [hover, setHover] = useState(null);

const mystyle = {
    backgroundImage: "linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)",
    padding: "10px",
    paddingTop: "80px",
    paddingBottom: "80px",
    fontFamily: "Arial",
};
const topStyle = {
    padding: "10px",
    paddingTop: "80px",
    paddingBottom: "80px",
    fontFamily: "Arial",
};

return (
<div>
    <div style={topStyle}>
        <Container className="ml-auto">
            <Row className='mt-5'>
                <Col>
                    {[ ...Array(5)].map((star, i) => {
                    const ratingValue = i + 1;
                    return (
                        <label>
                            <input type="radio" 
                            name="rating" 
                            value={ratingValue} 
                            onClick={ () => setRating(ratingValue)}
                            />
                            <FaStar className = "star" 
                            color ={ratingValue <= (hover || rating) ? "#ffc107": "#e4e5e9"} 
                            size={100}
                            onMouseEnter={() => setHover(ratingValue)}
                            onMouseLeaver={() => setHover(null)}
                            />
                        </label>
                    )
                    })}
                    {/* <p>The rating is {rating}.</p> */}
                    <Button className='mt-3' variant="outline-success" size="lg">Rate Parks</Button>
                </Col>
                <Col>
                    {/* <img alt='parks' src={Images}/> */}
                    <h1>Why You Should Care About Parks</h1>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                </Col>
            </Row>
        </Container>
    </div>

    <div style={mystyle}>
        <Container>
            <Row>
            <Col>
                <img alt='parks' src={Images}/>
            </Col>
            <Col className='py-5 my-auto'>
            <h2>Mellow Group Technologies</h2>
            <h5>Citizen to City Project</h5>
                <div>
                    <Button size="lg" variant="success">React</Button>{' '}
                    <Button size="lg" variant="warning">Express</Button>{' '}
                    <Button size="lg" variant="danger">MongoDB</Button>{' '}
                    <Button size="lg" variant="info">Node</Button>{' '}
                    <Button size="lg" variant="primary">ReactBootstrap</Button>{' '}
                    <Button variant="primary" disabled>
                    <Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" />
                    Loading...
                </Button>
                </div>
            </Col>
            </Row>
        </Container>
    </div>
</div>
);
};

export default Ratings;