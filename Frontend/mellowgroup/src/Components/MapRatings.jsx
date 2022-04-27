import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Row, Col, Button, Spinner } from "react-bootstrap";
import Images from "../images/globeBG.png";
import { myRatingStyle, topStyle } from "./Styles";

const MapRatings = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <>
      <div>
        {[...Array(5)].map((star, i) => {
          const ratingValue = i + 1;
          return (
            <label>
              <input
                type="radio"
                name="rating"
                value={ratingValue}
                onClick={() => setRating(ratingValue)}
              />
              <FaStar
                className="star"
                color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                size={30}
                onMouseEnter={() => setHover(ratingValue)}
                onMouseLeaver={() => setHover(null)}
              />
            </label>
          );
        })}
        <p>The rating is {rating}.</p>
      </div>
    </>
  );
};

export default MapRatings;
