import React from 'react';

function ResetGameButton(props) {
  return ( 
    <div>
      <br></br>
      <button onClick={props.onClick}> Reset Game </button>
    </div>
  );
}

export default ResetGameButton;