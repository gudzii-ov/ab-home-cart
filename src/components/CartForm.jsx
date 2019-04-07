import React from 'react';
import { Button, Form, InputGroup, Input } from 'reactstrap';

const CartForm = () => (
  <Form>
    <InputGroup>
      <Input className="form-control" type="text" name="product-name" placeholder="Product" required />
      <Input className="form-control" type="text" name="product-price" placeholder="Price" required />
      <Button color="success">Add</Button>
    </InputGroup>
  </Form>
);

export default CartForm;
