import React from 'react';
import { Container, Row, Col, Alert } from 'reactstrap';

const App = () => (
  <Container>
    <Row>
      <Col>
        <Alert color="primary">
        This is a primary alert — check it out!
        </Alert>
      </Col>
    </Row>
    <Row />
  </Container>
);

export default App;
