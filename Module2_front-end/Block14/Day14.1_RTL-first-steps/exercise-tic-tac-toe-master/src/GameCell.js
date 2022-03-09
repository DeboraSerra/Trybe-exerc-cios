/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import xImage from './x.png';
import oImage from './o.svg';
import './GameCell.css';

// Não mude a propriedade da div data-testid de cada casa
// ele será utilizado para o terceiro exercício!
// Use-o para selecionar uma casa especifica nas horas dos testes.

class GameCell extends React.Component {
  render() {
    const { id, handleClick, marked } = this.props;
    const playerId = id.split('-')[1];
    return (
      <div
        data-testid={ `cell_${id}` }
        className="game-cell"
        onClick={ handleClick }
      >
        {marked
        && (
          <img
            data-testid={ `player-${playerId}-mark` }
            src={ parseFloat(playerId) === 1 ? oImage : xImage }
            alt={ `Player ${playerId}` }
          />
        )}
      </div>
    );
  }
}

GameCell.propTypes = {
  id: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  marked: PropTypes.bool.isRequired,
};

export default GameCell;
