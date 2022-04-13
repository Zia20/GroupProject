import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa'
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
// import Images from "../images/camping.png";

const Ratings = () => {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    return (
    <div>
    <Container className="ml-auto">
        <Row className='mt-3'>
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
            <p>The rating is {rating}.</p>
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
    );
};

export default Ratings;