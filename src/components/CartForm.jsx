import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import { Field, reduxForm } from 'redux-form';

import connect from '../connect';

const mapStateToProps = ({ products }) => products;

@connect(mapStateToProps)
@reduxForm({ form: 'newProduct' })
class CartForm extends React.Component {
  render() {
    return (
      <Form>
        <Form.Group>
          <InputGroup>
            <Field
              type="text"
              className="form-control"
              name="product-name"
              component="input"
              placeholder="Product"
              required
            />
            <Field
              type="text"
              className="form-control"
              name="product-price"
              component="input"
              placeholder="Price"
              required
            />
            <Button variant="success">Add</Button>
          </InputGroup>
        </Form.Group>
      </Form>
    );
  }
}

export default CartForm;
