import React from "react";

class ButtonList extends  React.Component {
  render () {
    return(
      <div className='box-result'>
        <small>You haved select: </small>
        <input type='text' className='input-result' value={this.props.value} />
      </div>
    )
  }
}

class ListValue extends React.Component {
  render() {
    return (
      <div>
        <ButtonList value={212}/>
        <ul> 
        <li> <a href='#' 
          onClick={ function (e) {
            e.preventDefault();
          }
        }> Option 1 </a></li>
        </ul>  
      </div>
    )
  }
}


export default ListValue;