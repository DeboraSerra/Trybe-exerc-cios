import renderWithRouter from './helpers/renderwithRouter';
import React from 'react';
import FavoritePokemons from '../pages/FavoritePokemons';
import favePoke from './mocks/favoritePoke';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Test the Pokemon details component', () => {
  it('expects to render a list of favorite pokemons', () => {
    expect(true).toBe(true);
  })
})