import React from 'react'
import {Container} from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { IoSearchSharp } from "react-icons/io5";


import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Weathercomp() {
  return (
    <div>
      <Container>
        <Form inline className='mt-4 d-flex justify-content-center'>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
          </Col>
          <Col xs="auto">
            <Button type="submit"><IoSearchSharp /></Button>
          </Col>
        </Row>
      </Form>
     
     <div className='w'>
        This
     </div>

      </Container>
    </div>
  )
}

export default Weathercomp
