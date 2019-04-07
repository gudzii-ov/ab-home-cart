import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import CartForm from './CartForm';
import CartTable from './CartTable';

const Cart = () => (
  <Container>
    <Row>
      <Col lg="6">
        <CartForm />
      </Col>
    </Row>
    <Row>
      <Col>
        <CartTable />
      </Col>
    </Row>
  </Container>
);

export default Cart;
