import React from 'react';
import { Container, Row, Col } from 'reactstrap';

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
