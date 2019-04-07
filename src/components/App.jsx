import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import CartForm from './CartForm';
import Cart from './Cart';

const App = () => (
  <Container>
    <Row>
      <Col lg="6">
        <CartForm />
      </Col>
    </Row>
    <Row>
      <Col>
        <Cart />
      </Col>
    </Row>
  </Container>
);

export default App;
