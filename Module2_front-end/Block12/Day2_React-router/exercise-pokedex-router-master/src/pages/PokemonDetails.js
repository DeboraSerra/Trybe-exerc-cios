import React from "react";
import { Link } from 'react-router-dom';

class PokemonDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFavorite: false,
    }
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.getStorage(id);
  }

  getStorage = (id) => {
    if (localStorage.getItem(id)) {
      this.setState({
        isFavorite: true,
      })
    }
  }

  handleCheck = ({target}, id) => {
    const { checked } = target;
    this.setState({
      isFavorite: checked,
    })
    checked ? localStorage.setItem(id, target.name)
      : localStorage.removeItem(id);
  }

  render() {
    const { isFavorite } = this.state;
    const { match: { params: { id } }, pokemons, handleCheck } = this.props;
    const pokemon = pokemons.find((pokemon) => pokemon.id === parseFloat(id));
    const { name, type, averageWeight, image, moreInfo, foundAt, summary } = pokemon;
    return (
      <>
        <h1>Pokemon { name }</h1>
        <div className={`pokemon`}>
          {isFavorite ? <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Star_full.svg/1005px-Star_full.svg.png" alt="favorite" width={30} /> : <p/>}
        <div>
          <p>{name}</p>
          <p>{type}</p>
          <p>
            Average weight: {`${averageWeight.value} ${averageWeight.measurementUnit}`}
          </p>
        </div>
        <img src={image} alt={`${name} sprite`} />
        <Link className="Link" to={`/`}>Back</Link>
      </div>
        <p>{summary}</p>
        <h3>Found at</h3>
        {foundAt.map(({ location, map }) => (
          <section key={location}>
            <p>{location}</p>
            <img src={map} alt={location} />
          </section>
        ))}
        <a href={moreInfo} target="_blank" rel="noopener noreferrer"><h3>More Info about { name }</h3></a>
        <label htmlFor="favorite">
          Favorite pokemon?
          <input
            type="checkbox"
            name={id}
            id="favorite"
            onChange={ (e) => (this.handleCheck(e, id), handleCheck(e, isFavorite)) }
            checked={isFavorite}
          />
        </label>
      </>
    )
  }
}

export default PokemonDetails;
