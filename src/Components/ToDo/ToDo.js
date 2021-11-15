import React from 'react';
import {Container} from 'reactstrap';
import Display from './Display'

const ToDo = () => {
  return(
    <Container className="App">
     <br />
       <h4 className="App-intro">
     Enter a task below: 
       </h4>
        <Display />
     </Container>
  );
};

export default ToDo