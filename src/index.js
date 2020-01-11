import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import FilterItm from './FilterItm';


const ITEMS = [
  { stocked: true, name: 'Desktop'},
  {  stocked: true, name: 'Laptop'},
  {  stocked: false, name: 'IPad'},
  { stocked: true, name: 'I Phone'},
  {  stocked: false, name: 'Alexa'},
  {  stocked: true, name: 'Galaxy'}
];
 
ReactDOM.render(
  <FilterItm items={ITEMS} />,
  document.getElementById('root')
);
