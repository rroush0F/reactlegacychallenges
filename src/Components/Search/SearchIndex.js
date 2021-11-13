import React, {Component} from 'react';
import {Input} from 'reactstrap';
 
export default class SearchIndex extends Component {
  constructor(props) {
    super(props)
    this.state = {
     things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards']
   }
   this.searchFunction = this.searchFunction.bind(this);
 }

 searchFunction(e) {
   this.setState({value: e.target.value})
 }

 render() {
   return(
     <div>
       <Input placeholder='Search for school supplies here'
       value={this.state.userInput} onChange={(e) => this.searchFunction(e)}
       />
       <h3>Results:</h3>
       <ul>
       {this.state.things.filter(thing => thing.includes(this.state.value)).map(searchResults => (
         <li key={searchResults}>
           {searchResults}
          </li>
       ))}
       </ul>
     </div>
   )
 }
}
