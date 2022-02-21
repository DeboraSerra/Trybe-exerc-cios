import React from 'react';
import pokemons from './data';
import Pokemon from './Pokemon';
import CreateFilterButtons from './Create-filter-buttons';
import './Buttons.css';

class NextPokemon extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemons: pokemons,
      index: 0,
    }
    this.nextPokemon = this.nextPokemon.bind(this)
    this.filter = this.filter.bind(this);
    this.disableBtn = this.disableBtn.bind(this);
  }

  filter(type) {
    let filtered;
    if (type === 'all') {
      filtered = pokemons
    } else {
      filtered = pokemons.filter((pokemon) => pokemon.type === type);
    }
    this.setState({
      pokemons: filtered,
      index: 0,
    })
  }

  nextPokemon() {
    const { pokemons, index } = this.state;
    const length = pokemons.length - 1;
    if (index === length) {
      this.setState((prevSt, _props) => ({
        pokemons: prevSt.pokemons,
        index: 0,
      }))
    } else {
      this.setState((prevVal, _props) => ({
        pokemons: prevVal.pokemons,
        index: prevVal.index + 1,
      }))
    }
  }

  disableBtn() {
    if (this.state.pokemons.length === 1){
      return true;
    }
    return false;
  }
  
  render() {
    const { pokemons, index } = this.state;
    const pokemonTypes = [];
    pokemons.forEach((pokemon) => {
      if (!pokemonTypes.includes(pokemon.type)) {
        pokemonTypes.push(pokemon.type)
      }
    })
    return (
      <section className='card-btn-parent'>
        <Pokemon pokemon={pokemons[index]}/>
        <section className='btn-parent'>
          <CreateFilterButtons 
            className={`type-btn all`}
            onClick={() => this.filter('all')}
            text={'All'}
            disabled={false}
          />
          {pokemonTypes.map((type) => {
            return(
              <CreateFilterButtons
                key={type}
                className={`type-btn ${type}`}
                onClick={() => this.filter(type)}
                text={type}
                disabled={false}
              />
            )
          })}
        </section>
        <CreateFilterButtons
          className={`next-btn`}
          onClick={this.nextPokemon}
          text={`Next Pokémon`}
          disabled={this.disableBtn()}
        />
      </section>
    )
  }
}

export default NextPokemon;