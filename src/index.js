import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      move: ''
    };
  }

  onClique() {
    let newMove = this.state.move;

    if (newMove === 'X') {
       newMove = 'O'
    } else {
      newMove = 'X'
    }
    
    this.setState({
      move: newMove
    });
  }

  render() {
    return (
      <button className='square' onClick={() => this.onClique()}>
        {this.state.move}
      </button>
    )
  }
}

function Board() {
  return (
    <div>
      <div className='board-row'>
        <Square/>
        <Square/>
        <Square/>
      </div>
      
      <div className='board-row'>
        <Square/>
        <Square/>
        <Square/>
      </div>
      
      <div className='board-row'>
        <Square/>
        <Square/>
        <Square/>
      </div>
    </div>
  )
}

function Game() {
  return (
    <div class='game'>
      <div className='game-board'>
        <Board/>
      </div>

      <div className='game-info'>
        Game info
      </div>
    </div>
  )
}

ReactDOM.render(
  <Game/>,
  document.getElementById('root')
);
