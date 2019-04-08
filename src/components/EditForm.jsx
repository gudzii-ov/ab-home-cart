import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Field, reduxForm } from 'redux-form';

import connect from '../connect';

const mapStateToProps = ({ modalUIState }) => ({ ...modalUIState });

@connect(mapStateToProps)
@reduxForm({ form: 'editForm' })
class EditForm extends React.Component {
  handleSubmit = (values) => {
    const {
      toggleModal, editProduct, reset,
    } = this.props;
    const { id, name, price } = values;
    const product = { id: Number(id), name, price: Number(price) };
    editProduct({ data: product });
    reset();
    toggleModal({ modalDisplay: 'hide' });
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <Form
        onSubmit={handleSubmit(this.handleSubmit)}
      >
        <Form.Group>
          <InputGroup>
            <Field
              type="text"
              className="form-control"
              name="id"
              component="input"
              placeholder="Product"
              hidden
            />
            <Field
              type="text"
              className="form-control"
              name="name"
              component="input"
              placeholder="Product"
            />
            <Field
              type="number"
              className="form-control"
              name="price"
              component="input"
              placeholder="Price"
            />
            <Button
              variant="success"
              type="submit"
            >
        Edit
            </Button>
          </InputGroup>
        </Form.Group>
      </Form>
    );
  }
}

export default EditForm;
