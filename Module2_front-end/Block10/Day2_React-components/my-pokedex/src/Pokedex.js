import React from "react";
import pokemons from "./data";
import Pokemon from "./Pokemon";

class Pokedex extends React.Component {
  render() {
    return (
      <section className="pokedex">
        {pokemons.map(item => <Pokemon key={item.id} pokemon={item}/>)}
      </section>
    )
  }
}

export default Pokedex;