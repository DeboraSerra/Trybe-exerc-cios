import React from 'react';
import GameBoard from './GameBoard';
import o from './o.svg';
import x from './x.png';
import './TicTacToe.css';

class TicTacToe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePlayer: 1,
      gameBoard: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      result: '',
    };
    this.handleClick = this.handleClick.bind(this);
    this.checkBoard = this.checkBoard.bind(this);
    this.restartGame = this.restartGame.bind(this);
  }

  handleClick(index) {
    const { gameBoard, activePlayer } = this.state;
    if (gameBoard[index] === 0) {
      const newBoard = gameBoard
        .map((cell, i) => (i === index && cell === 0 ? activePlayer : cell));
      this.setState((prevSt) => ({
        activePlayer: prevSt.activePlayer === 1 ? 2 : 1,
        gameBoard: newBoard,
      }), () => this.checkBoard());
    }
  }

  restartGame() {
    this.setState({
      activePlayer: 1,
      gameBoard: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      result: '',
    });
  }

  checkLine(game) {
    if (game[0] === game[1] && game[1] === game[2]) return game[0];
    if (game[3] === game[4] && game[4] === game[5]) return game[3];
    if (game[6] === game[7] && game[7] === game[8]) return game[6];
    return false;
  }

  checkColumn(game) {
    if (game[0] === game[3] && game[3] === game[6]) return game[0];
    if (game[1] === game[4] && game[4] === game[7]) return game[1];
    if (game[2] === game[5] && game[5] === game[8]) return game[2];
    return false;
  }

  checkDiagonal(game) {
    if (game[0] === game[4] && game[4] === game[8]) return game[0];
    if (game[2] === game[4] && game[4] === game[6]) return game[2];
    return false;
  }

  checkBoard() {
    const { gameBoard } = this.state;
    const line = this.checkLine(gameBoard);
    const column = this.checkColumn(gameBoard);
    const diagonal = this.checkDiagonal(gameBoard);
    if (line || column || diagonal) {
      this.setState({
        result: `Player ${line || column || diagonal} wins!`,
      });
    }
    if (!gameBoard.includes(0)) {
      this.setState({
        result: 'It\'s a draw!',
      });
    }
  }

  render() {
    const { gameBoard, activePlayer, result } = this.state;
    return (
      <section>
        <h1>Tic Tac Toe</h1>
        {activePlayer === 1 && (
          <img data-testid="player1" src={ o } alt="Player 1" className="player" />
        )}
        {activePlayer === 2 && (
          <img data-testid="player2" src={ x } alt="Player 2" className="player" />
        )}
        {result && <p>{ result }</p>}
        <GameBoard gameState={ gameBoard } handleClick={ this.handleClick } />
        {result
        && <button type="button" onClick={ this.restartGame }>Restart game</button>}
      </section>
    );
  }
}

export default TicTacToe;
