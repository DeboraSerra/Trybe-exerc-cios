import React from 'react';
import Pokemon from './Pokemon';
import Button from './Button';
import '../pokedex.css';
import { Route } from 'react-router-dom';

class Pokedex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {pokemonIndex: 0,
      filteredType: 'all',
      isFavorite: false };
  }

  updateState = () => {
    const filteredPokemons = this.fetchFilteredPokemons();
    const { pokemonIndex } = this.state;
    const currPokeId = filteredPokemons[pokemonIndex].id;
    const storage = localStorage.getItem(currPokeId);
    return parseFloat(storage) === currPokeId
  }

  filterPokemons(filteredType) {
    this.setState({filteredType, pokemonIndex: 0});
  }

  nextPokemon(numberOfPokemons) {
    this.setState(state => ({
      pokemonIndex: (state.pokemonIndex + 1) % numberOfPokemons,
    }));
  }

  fetchFilteredPokemons() {
    const {pokemons} = this.props;
    const {filteredType} = this.state;

    return pokemons.filter(pokemon => {
      if (filteredType === 'all') return true;
      return pokemon.type === filteredType;
    });
  }

  fetchPokemonTypes() {
    const {pokemons} = this.props;

    return [...new Set(pokemons.reduce((types, {type}) => [...types, type], []))];
  }

  render() {
    const filteredPokemons = this.fetchFilteredPokemons();
    const pokemonTypes = this.fetchPokemonTypes();
    const pokemon = filteredPokemons[this.state.pokemonIndex];
    const isFavorite = this.updateState();
    return (
      <div className="pokedex">
        <div>
          <Route path="" component="" />
        </div>
        <Pokemon pokemon={pokemon} isFavorite={isFavorite} />
        <div className="pokedex-buttons-panel">
          <Button
            onClick={() => this.filterPokemons('all')}
            className="filter-button">
            All
          </Button>
          {pokemonTypes.map(type => (
            <Button
              key={type}
              onClick={() => this.filterPokemons(type)}
              className="filter-button">
              {type}
            </Button>
          ))}
        </div>
        <Button
          className="pokedex-button"
          onClick={() => this.nextPokemon(filteredPokemons.length)}
          disabled={filteredPokemons.length <= 1}>
          Próximo pokémon
        </Button>
      </div>
    );
  }
}

export default Pokedex;