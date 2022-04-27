import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Images from "../../images/environmnt.png";
import { myHighlight } from "../Styles/Styles";
import ListGroup from 'react-bootstrap/ListGroup';

function highlights() {
    
  return (
    <div style={myHighlight}>
      <Container>
        <Row>
        <Col className='senior'>
            <img alt='parks' width="700" height="480" src={Images}/>
          </Col>
          <Col className='py-5 my-auto'>
          <h2>HIGHLIGHTS 2021</h2>
          <h5>It's been an exciting year for parks in Calgary. Here are a few highlights of what's happened:</h5>
          <ListGroup> 
  <ListGroup.Item variant="info"> <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-asterisk" viewBox="0 2 17 17">
  <path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1z"/>
</svg> To help people get outdoors safely in winter, Calgary implemented a <a a href="https://www.calgary.ca/csps/winter-city-calgary/winter-activities/winter-fire-pits.html" >new firepit program </a> with free 2-hour bookings and free firewood. Starting out with 14 new firepits, the city added 55 more over the next two months to keep up with demand, resulting in over 2000 bookings.</ListGroup.Item>
  <ListGroup.Item variant="primary"> <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-asterisk" viewBox="0 2 17 17">
  <path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1z"/>
</svg> In partnership with Arts and Culture, Calgary Parks led Lantern Walks, lighting up one-kilometre pathways in three different parks with tealight candles, including firepits and pop-up entertainment on route.</ListGroup.Item>
  <ListGroup.Item variant="info"> <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-asterisk" viewBox="0 2 17 17">
  <path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1z"/>
</svg> Calgary became the first city in Canada to offer <a a href='https://calgary.ctvnews.ca/bowness-park-welcomes-ice-bikes-and-new-skating-trail-1.5243265'>ice bikes at Bowness Park</a>, a park that also contains a new skating trail and a <a a href='https://dailyhive.com/calgary/play-crokicurl-public-park-calgary-bowness'>crokicurl rink.</a></ListGroup.Item>
</ListGroup>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default highlights;