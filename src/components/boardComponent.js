import React from 'react';
import Square from './squareComponent';
import ResetGame from './resetgamecomponent';

class Board extends React.Component {  
  constructor(props){
    super(props);
    this.state = { squares: Array(9).fill(null), xIsNext: true };
  }

  handleClick(i) {
    const squares = this.state.squares.slice(); //using a without mutation

    // if winner or square already exists, stop
    if(calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({ 
      squares: squares,
      xIsNext: !this.state.xIsNext
    });
  }

  handleResetGame(){
    this.setState({ squares: Array(9).fill(null), xIsNext: true });
  }

  renderSquare(i) {
    return <Square 
      value={this.state.squares[i]} 
      onClick={() => this.handleClick(i)}
    />
  }

  render() {
    const winner = calculateWinner(this.state.squares);

    let status; 
    if(winner) {
      status = winner + ' winner'
    } else{
      status = 'Next player: '+ (this.state.xIsNext ? 'X' : '0');
    }

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      
        <ResetGame onClick={() => this.handleResetGame() }/>
      </div>

    );
  }
}

// Helps functions 
function calculateWinner(squares) {
  //win results combination possible
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default Board;