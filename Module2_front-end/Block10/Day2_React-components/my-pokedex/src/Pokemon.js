import React from 'react';
import PropTypes from 'prop-types';

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
        <a href={link} target='_blank'><img src={image} alt={name}/></a>
      </section>
    )
  }
}

Pokemon.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  weight: PropTypes.number.isRequired,
  unit: PropTypes.string.isRequired,
}

export default Pokemon;