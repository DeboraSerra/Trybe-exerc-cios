import React from 'react';
import pokemons from './data';
import Pokemon from './Pokemon';

class NextPokemon extends React.Component {
  constructor() {
    super()
    this.state = {
      index: 0,
    }
    this.nextPokemon = this.nextPokemon.bind(this)
  }
  nextPokemon() {
    const cardSec = document.querySelector('.card-parent')
    cardSec.appendChild(<Pokemon/>)
    this.setState((prevVal, _props) => ({
    
    }))
  }
  render() {
    return (
      <section>
        <section className='card-parent'>

        </section>
        <button>Next Pokemon</button>
      </section>
    )
  }
}