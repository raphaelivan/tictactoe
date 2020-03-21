import React from 'react';

// class Square extends React.Component { this create a React Component with object state
// react components need render () {} context
// in React component we need call this.props

function Square(props) { // create a function components. Functions component doesnt' have own state
  return ( // function componnet only return context
    <button 
      className="square"
      onClick={ props.onClick } 
      // in fucnction component we don't need call this.props because it not exist
      >
      
      {props.value}     
    </button>
  );
}

export default Square;