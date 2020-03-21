import React from 'react';

function ResetGameButton(props) {
  return ( 
    <div>
      <br></br>
      <button  className='btn btn-danger btn-sm' onClick={props.onClick}> 
        <i class='fa fa-pencil'></i>
        Reset Game 
      </button>
    </div>
  );
}

export default ResetGameButton;