import React from "react";
import { Link } from 'react-router-dom';
import '../pokedex.css';
import '../pokemon.css';
import '../favoritePokemons.css';

class FavoritePokemons extends React.Component {
  render() {
    const { favoritePokes } = this.props;
    return (
      <section className="fave-sect">
        {!favoritePokes.length ? <p className="App">No favorite Pokemon</p>
        : favoritePokes.map((item) => {
          const { name, type, averageWeight, image, id } = item;
          return (
            <div className="pokemon" key={id}>
              <div>
                <p>{name}</p>
                <p>{type}</p>
                <p>
                  Average weight: {`${averageWeight.value} ${averageWeight.measurementUnit}`}
                </p>
              </div>
              <img src={image} alt={`${name} sprite`} />
              <Link className="Link" to={`/pokemon/${id}`}>Back to pokemon</Link>
            </div>
          )
        })}
      </section>
    )
  }
}

export default FavoritePokemons;
