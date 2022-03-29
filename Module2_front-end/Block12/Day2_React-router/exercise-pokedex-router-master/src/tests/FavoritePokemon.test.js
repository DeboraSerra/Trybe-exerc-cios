import renderWithRouter from './helpers/renderwithRouter';
import React from 'react';
import FavoritePokemons from '../pages/FavoritePokemons';
import favePoke from './mocks/favoritePoke';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Test the Favorites page', () => {
  it('expects to render a list of favorite pokemons', () => {
    renderWithRouter(<FavoritePokemons favoritePokes={ favePoke } />);
    const pokes = screen.getAllByTestId('fave-poke');
    expect(pokes).toHaveLength(2);
  })
  it('expects the pokemon card to have a link to the pokemon page', () => {
    const { history } = renderWithRouter(<FavoritePokemons favoritePokes={ favePoke } />);
    const links = screen.getAllByRole('link', { name: /Back to pokemon/i });
    userEvent.click(links[0]);
    expect(history.location.pathname).toBe(`/pokemon/${favePoke[0].id}`)
  })
})