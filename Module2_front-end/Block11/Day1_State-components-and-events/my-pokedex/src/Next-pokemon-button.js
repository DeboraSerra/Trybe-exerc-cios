import React from 'react';
import pokemons from './data';
import Pokemon from './Pokemon';
import CreateFilterButtons from './Create-filter-buttons';
import './Buttons.css';

class NextPokemon extends React.Component {
  constructor() {
    super();
    this.state = {
      currPokemon: {
        pokemons: pokemons,
        index: 0,
      },
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
      currPokemon: {
        pokemons: filtered,
        index: 0,
      }
    })
  }

  nextPokemon() {
    const length = this.state.currPokemon.pokemons.length - 1;
    if (this.state.currPokemon.index === length) {
      this.setState((prevSt, _props) => ({
        currPokemon: {
          pokemons: prevSt.currPokemon.pokemons,
          index: 0,
        }
      }))
    } else {
      this.setState((prevVal, _props) => ({
        currPokemon: {
          pokemons: prevVal.currPokemon.pokemons,
          index: prevVal.currPokemon.index + 1,
        }
      }))
    }
  }

  disableBtn() {
    if (this.state.currPokemon.pokemons.length === 1){
      return true;
    }
    return false;
  }
  
  render() {
    const pokemonTypes = [];
    pokemons.forEach((pokemon) => {
      if (!pokemonTypes.includes(pokemon.type)) {
        pokemonTypes.push(pokemon.type)
      }
    })
    return (
      <section className='card-btn-parent'>
        <Pokemon pokemon={this.state.currPokemon.pokemons[this.state.currPokemon.index]}/>
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