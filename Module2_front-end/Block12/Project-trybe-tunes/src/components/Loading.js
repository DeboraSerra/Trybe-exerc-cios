import React from 'react';
import '../styles/Loading.css';

class Loading extends React.Component {
  render() {
    return (
      <section className="load-sect">
        <h1 className="load-text">Carregando...</h1>
        <div className="loading" />
      </section>
    );
  }
}

export default Loading;
