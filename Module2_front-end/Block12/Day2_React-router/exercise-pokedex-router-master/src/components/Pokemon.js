import React from 'react';
import { Link } from 'react-router-dom';
import '../pokemon.css';

class Pokemon extends React.Component {
    render() {
    const {name, type, averageWeight, image, id } = this.props.pokemon;
    const { isFavorite } = this.props;
    return (
      <div className="pokemon">
        <div>
        {isFavorite ? <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Star_full.svg/1005px-Star_full.svg.png" alt="favorite" width={30} /> : <p/>}
          <p>{name}</p>
          <p>{type}</p>
          <p>
            Average weight: {`${averageWeight.value} ${averageWeight.measurementUnit}`}
          </p>
        </div>
        <img src={image} alt={`${name} sprite`} />
        <Link className="Link" to={`/pokemon/${id}`}>More Info</Link>
      </div>
    );
  }
}

export default Pokemon;