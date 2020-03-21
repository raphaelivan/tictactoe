import React from 'react';
import '../src/css/bootstrap.min.css';
import '../src/css/app.css';

//import NewSquare from './components/newSquareComponent';
import Board from './components/boardComponent';

class Game extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="game">
        <div className="col-md-12">
          <Board stateGame={this.state}/>
        </div>
      </div>
    );
  }
}

export default Game;
