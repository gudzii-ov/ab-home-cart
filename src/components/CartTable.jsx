import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';

const renderCartItems = () => (
  <tr>
    <td>first</td>
    <td className="d-flex justify-content-between align-items-center">
      {'10 $'}
      <ButtonToolbar>
        <ButtonGroup>
          <Button variant="warning">edit</Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button variant="danger">del</Button>
        </ButtonGroup>
      </ButtonToolbar>
    </td>
  </tr>
);

const CartTable = () => (
  <Table>
    <thead className="bg-light">
      <tr>
        <th>Name</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
      {renderCartItems()}
    </tbody>
    <tfoot className="bg-light">
      <tr>
        <td>Total</td>
        <td>40 $</td>
      </tr>
    </tfoot>
  </Table>
);

export default CartTable;
