import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';

import connect from '../connect';

const mapStateToProps = ({ products }) => products;

@connect(mapStateToProps)
class CartTable extends React.Component {
  renderCartItem = (product) => {
    const { id, name, price } = product;
    return (
      <tr key={id}>
        <td>{name}</td>
        <td className="d-flex justify-content-between align-items-center">
          {`${price} $`}
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
  }

  render() {
    const { allIds, byId, totalCost } = this.props;
    return (
      <Table>
        <thead className="bg-light">
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {
            allIds.map(id => this.renderCartItem(byId[id]))
          }
        </tbody>
        <tfoot className="bg-light">
          <tr>
            <td>Total</td>
            <td>{`${totalCost} $`}</td>
          </tr>
        </tfoot>
      </Table>
    );
  }
}
export default CartTable;
