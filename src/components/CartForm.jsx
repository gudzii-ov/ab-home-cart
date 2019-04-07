import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import { Field, reduxForm } from 'redux-form';
import _ from 'lodash';

import connect from '../connect';

const mapStateToProps = ({ products }) => products;

@connect(mapStateToProps)
@reduxForm({ form: 'newProduct' })
class CartForm extends React.Component {
  handleSubmit = (values) => {
    const { addProduct, reset } = this.props;
    const id = _.uniqueId();
    const product = { id, ...values };
    addProduct({ data: product });
    reset();
  };

  render() {
    const { handleSubmit, pristine, submitting } = this.props;

    return (
      <Form onSubmit={handleSubmit(this.handleSubmit)}>
        <Form.Group>
          <InputGroup>
            <Field
              type="text"
              className="form-control"
              name="name"
              component="input"
              placeholder="Product"
              required
            />
            <Field
              type="text"
              className="form-control"
              name="price"
              component="input"
              placeholder="Price"
              required
            />
            <Button
              variant="success"
              type="submit"
              disabled={pristine || submitting}
            >
              Add
            </Button>
          </InputGroup>
        </Form.Group>
      </Form>
    );
  }
}

export default CartForm;
