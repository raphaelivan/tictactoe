import React from 'react';
import '../src/css/app.css';
//import NewSquare from './components/newSquareComponent';
import Board from './components/boardComponent';

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// class FullGame extends React.Component {
//   render () {
//     return (
//       <NewSquare />
//     )
//   }
// }

export default Game;
