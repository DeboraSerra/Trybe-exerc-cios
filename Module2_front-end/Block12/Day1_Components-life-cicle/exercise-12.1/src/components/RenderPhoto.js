import React from "react";

class RenderPhoto extends React.Component {
  render() {
    const { name, photo, breed } = this.props;
    return (
      <section className="dog-card">
        <h1>{name}</h1>
        <img src={photo} alt={breed} />
      </section>
    )
  }
}

RenderPhoto.defaultProps = {
  name: null,
}

export default RenderPhoto;