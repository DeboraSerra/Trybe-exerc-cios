import React from 'react';
import './Card.css';

class Pokemon extends React.Component {
  render() {
    const {name, type, averageWeight: { value: wheight, measurementUnit: unit}, image, moreInfo: link} = this.props.pokemon;
    return (
      <section className='card'>
        <section className='info'>
          <p>{name}</p>
          <p>{type}</p>
          <p>Average weight: {wheight} {unit}</p>
        </section>
        <a href={link} target='_blank' rel="noreferrer"><img src={image} alt={name}/></a>
      </section>
    )
  }
}

export default Pokemon;