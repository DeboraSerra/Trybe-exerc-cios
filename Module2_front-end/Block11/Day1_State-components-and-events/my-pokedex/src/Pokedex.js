import React from "react";
import NextPokemon from "./Next-pokemon-button";
import './Pokedex.css';

class Pokedex extends React.Component {
  render() {
    return (
      <section className="pokedex">
        <NextPokemon/>
      </section>
    )
  }
}

export default Pokedex;