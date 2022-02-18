import React from "react";
import PropTypes from 'prop-types';

class Meme extends React.Component{
  render() {
    const { meme: { name, url} } = this.props;
    return (
      <section className="each-meme">
        <h2>{name}</h2>
        <img src={url} alt={name} />
      </section>
    )
  }
}

Meme.propType ={
  meme: PropTypes.shape({
    name: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
}

export default Meme;