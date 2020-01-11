import React, { Component } from 'react';
import Itm from './Itm';
import SearchItm from './SearchItm';

class FilterItm extends Component {
  //
  constructor(props) {
    super(props);
    this.state = {
      filterItm: '',
      inStockItm: false
    };
    
    this.handleFilterItmChange = this.handleFilterItmChange.bind(this);
    this.handleInStockItmChange = this.handleInStockItmChange.bind(this);
  }

  handleFilterItmChange(filterItm) {
    this.setState({
      filterItm: filterItm
    });
  }
  
  handleInStockItmChange(inStockItm) {
    this.setState({
      inStockItm: inStockItm
    })
  }
  //
  render() {
    return (
      <div>
        <SearchItm
           filterItm={this.state.filterItm}
           inStockItm={this.state.inStockItm}
          onfilterItmChange={this.handleFilterItmChange}
          onInStockChange={this.handleInStockItmChange}/>
        <Itm items={this.props.items}
          filterItm={this.state.filterItm}
          inStockItm={this.state.inStockItm}/>
      </div>
    );
  }
}

export default FilterItm;
