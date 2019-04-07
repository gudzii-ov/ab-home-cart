import React from 'react';
import { Container, Row, Col, Alert } from 'reactstrap';

import Cart from './Cart';

const App = () => (
  <Container>
    <Row>
      <Col>
        <Alert color="primary">
        There must be submit form
        </Alert>
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
