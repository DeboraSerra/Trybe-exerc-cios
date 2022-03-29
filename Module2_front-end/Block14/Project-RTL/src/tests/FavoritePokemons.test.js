import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './helpers/renderWithRouter';
import FavoritePokemons from '../components/FavoritePokemons';
import pokemons from '../data';

const favePoke = pokemons.filter((_poke, index) => index < 2);

describe('Test the Favorites page', () => {
  it('expects to have the message "No favorite pokemon found"', () => {
    renderWithRouter(<FavoritePokemons pokemons={ [] } />);
    const emptyMessage = screen.getByText('No favorite pokemon found');
    expect(emptyMessage).toBeInTheDocument();
  });
  it('expects to render a list of favorite pokemons', () => {
    renderWithRouter(<FavoritePokemons pokemons={ favePoke } />);
    const pokes = screen.getAllByTestId('pokemon-name');
    expect(pokes).toHaveLength(2);
  });
});
