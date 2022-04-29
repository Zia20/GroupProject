import React from 'react'
import { Container, Row } from 'react-bootstrap';
import Images from "../../images/Senior.png";

const ErrorPage = () => {
  return (
    <>
    <Container>
      <Row>
        <h1 className='mx-autp'>ERROR: PAGE NOT FOUND </h1>
        <h1 className='mx-autp'>Sever Error: 500 </h1>
        <img alt='parks' width='380px' src={Images}/>
      </Row>
    </Container>
    </>
  )
}

export default ErrorPage;