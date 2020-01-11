import React, { Component } from 'react';
import ItmRow from './ItmRow';
import { Table,Button } from 'react-bootstrap';

class Itm extends Component {
  render() {
    const filterItm = this.props.filterItm;
    const inStockItm = this.props.inStockItm;

    const rows = [];
   
    this.props.items.forEach((itm) => {
      if ((itm.name).toLowerCase().indexOf(filterItm.toLowerCase()) === -1) {
        return;
      }
      if (inStockItm && !itm.stocked) {
        return;
      }

      

      rows.push(
        <ItmRow
        itm={itm}
          key={itm.name} />
      );

    });
    if(rows.length > 0){
      console.log("rows available 111");
      console.log(rows);
    return (
      <div>
      <Button className="btn btn-success">Primary</Button>
      <Table  striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Stocks</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
      </div>
    );
  }
  else{
    return (
    <p>No Records to render ! sorry </p>);
  }

  }
}

export default Itm;
