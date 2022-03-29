import React from "react";
import { Route, Switch } from "react-router-dom";
import Pokedex from "./Pokedex";
import pokemons from "../data";
import NotFound from "../pages/NotFound";
import About from "../pages/About";
import PokemonDetails from "../pages/PokemonDetails";
import FavoritePokemons from "../pages/FavoritePokemons";

class Content extends React.Component {
  constructor() {
    super();
    this.state = {
      favorites: [],
    }
  }

  componentDidMount() {
    const myFavorites = JSON.parse(localStorage.getItem('favorites'));
    this.saveStorage(myFavorites);
  }

  saveStorage = (favorites) => {
    this.setState({
      favorites: favorites || [],
    })
  }

  handleCheck = ({target}) => {
    const { name, checked } = target;
    const { favorites } = this.state;
    const poke = pokemons.find((item) => item.id === parseFloat(name));
    if (checked) {
      this.setState({
        favorites: [...favorites, poke],
      }, () => {
        localStorage.setItem('favorites', JSON.stringify(this.state.favorites));
      });
    } else if (!checked) {
      const newList = favorites.filter((item) => item.id !== parseFloat(name));
      this.setState({
        favorites: newList,
      }, () => {
        localStorage.setItem('favorites', JSON.stringify(this.state.favorites));
      })
    }
  }

  render() {
    const { favorites } = this.state;
    return (
      <Switch>
        <Route exact path="/" render={() => <Pokedex pokemons={pokemons} favoritePokes={favorites} />} />
        <Route path="/about" component={ About } />
        <Route path="/pokemon/:id" render={ (props) => <PokemonDetails {...props} pokemons={pokemons} handleCheck={ this.handleCheck } /> } />
        <Route path="/favorite-poke" render={() => <FavoritePokemons favoritePokes={ favorites } />} />
        <Route path="*" component={ NotFound } />
      </Switch>
    )
  }
}

export default Content;
