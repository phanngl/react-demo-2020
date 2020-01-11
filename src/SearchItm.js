import React, { Component } from 'react';


class SearchBar extends Component {
  //
  constructor(props) {
    super(props);
    this.handleFilterItmChange = this.handleFilterItmChange.bind(this);
    this.handleInStockItmChange = this.handleInStockItmChange.bind(this);
  }
  
  handleFilterItmChange(e) {
    this.props.onfilterItmChange(e.target.value);
  }
  
  handleInStockItmChange(e) {
    this.props.onInStockChange(e.target.checked);
  }
  //
  render() {
    return (
      <form>
        <input type="text" placeholder="Search..." value={this.props.filterItm}
          onChange={this.handleFilterItmChange} />
        <p>
          <input type="checkbox" 
          checked={this.props.inStockItm}
          onChange={this.handleInStockItmChange}
          />
          {' '}
          Only show products in stock
        </p>
      </form>
    );
  }
}

export default SearchBar;
