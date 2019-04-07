import React from 'react';
import { Table, Button, ButtonGroup, ButtonToolbar } from 'reactstrap';

const renderCartItems = () => (
  <tr>
    <td>first</td>
    <td className="d-flex justify-content-between align-items-center">
      {'10 $'}
      <ButtonToolbar>
        <ButtonGroup>
          <Button color="warning">edit</Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button color="danger">del</Button>
        </ButtonGroup>
      </ButtonToolbar>
    </td>
  </tr>
);

const Cart = () => (
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

export default Cart;
