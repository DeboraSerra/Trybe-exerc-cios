import React from "react";
import Meme from "./Meme";
import PropTypes from 'prop-types';

class AllMeme extends React.Component {
  render() {
    const { memes } = this.props;
    return (
      <main>
        <h1>Choose your meme</h1>
        <section className="all-meme">
        {memes.map((meme) => <Meme key={ meme.id } meme={ meme }/>)}
        </section>
      </main>
    )
  }
}

AllMeme.propTypes = {
  memes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      url: PropTypes.string,
      width: PropTypes.number,
      height: PropTypes.number,
    })
  ).isRequired,
}

export default AllMeme;