import React, { Component } from 'react';


class ItmRow extends Component {
  render() {
    const itm = this.props.itm;
    const name = itm.stocked ?
    itm.name :
      <span style={{color: 'red'}}>
        {itm.name}
      </span>;

    return (
      <tr>
        <td>{name}</td>
        <td>{ (itm.stocked === true) ? 'In Stock' : 'Not in Stock'}</td>
      </tr>
    );
  }
}

export default ItmRow;
