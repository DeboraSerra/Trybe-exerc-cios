import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import './App.css';
import Content from './components/Content';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1> Pokedex </h1>
        <nav>
          <Link className="Link" to="/">Home</Link>
          <Link className="Link" to="/about">About</Link>
          <Link className="Link" to="/favorite-poke">Favorite Pokemons</Link>
        </nav>
        <Content />
      </div>
    </BrowserRouter>
  );
}

export default App;