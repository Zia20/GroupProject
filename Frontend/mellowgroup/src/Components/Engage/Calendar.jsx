import React, { useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Calenda = () => {

  const [calDate, setCalDate] = useState(new Date());
  return (
    <>
    <Container>
    <Row>
      <Col className='mt-5 pl-3'>
        <h1>YYC recreation, the best among <span className='text-success'>western Canada</span>.</h1>
        <h4 className='text-danger'>Visit our parks and recreational centers. Visit YYC</h4>
        <Button className='mt-3 shadow-none' variant="outline-success" size="lg">Book Now</Button>
      </Col>
      <Col>
        <Calendar value={calDate} onChange={setCalDate} />
      </Col>
    </Row>
    </Container>
    </>
  )
}

export default Calenda;