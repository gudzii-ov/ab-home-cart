import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import connect from '../connect';
import EditForm from './EditForm';

const mapStateToProps = ({ products, modalUIState, modalState }) => ({ ...products, ...modalUIState, ...modalState });

@connect(mapStateToProps)
class EditModal extends React.Component {
  handleClose = () => {
    const { toggleModal } = this.props;
    toggleModal({ modalDisplay: 'hide' });
  }

  render() {
    const { modalDisplay, byId, id } = this.props;
    const product = byId[id];

    return (
      <Modal show={modalDisplay === 'show'} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditForm initialValues={product} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default EditModal;
