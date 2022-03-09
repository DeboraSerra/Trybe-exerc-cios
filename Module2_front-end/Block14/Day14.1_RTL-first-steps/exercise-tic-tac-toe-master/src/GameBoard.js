import React from 'react';
import PropTypes from 'prop-types';
import GameCell from './GameCell';
import './GameBoard.css';

class GameBoard extends React.Component {
  render() {
    const { gameState, handleClick } = this.props;
    return (
      <div className="game-board">
        {gameState.map((playerId, index) => {
          let marked = false;
          if (playerId !== 0) marked = true;
          return (
            <GameCell
              id={ `gamecell-${playerId}-${index}` }
              key={ `gamecell-${playerId}-${index}` }
              marked={ marked }
              handleClick={ () => handleClick(index) }
            />
          );
        })}
      </div>
    );
  }
}

GameBoard.propTypes = {
  gameState: PropTypes.arrayOf(PropTypes.number).isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default GameBoard;
