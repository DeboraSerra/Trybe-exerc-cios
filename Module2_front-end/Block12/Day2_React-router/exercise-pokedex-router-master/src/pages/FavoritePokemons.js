import React from "react";
import { Link } from 'react-router-dom';

class FavoritePokemons extends React.Component {
  render() {
    const { favoritePokes } = this.props;
    return (
      <section>
        {!favoritePokes ? <p>No favorite Pokemon</p>
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
            <Link to={`/pokemon/${id}`}>Back to pokemon</Link>
          </div>
          )
        })}
      </section>
    )
  }
}

export default FavoritePokemons;
