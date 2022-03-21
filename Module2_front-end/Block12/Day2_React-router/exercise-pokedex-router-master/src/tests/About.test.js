import renderWithRouter from './helpers/renderwithRouter';
import React from 'react';
import About from '../pages/About';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Test the About page', () => {
  it('tests if there is the word Pokédex', () => {
    renderWithRouter(<About />);
    const pokeWord = screen.getAllByText(/Pokédex/gmi);
    pokeWord.forEach((word) => {
      expect(word).toBeInTheDocument();
    });
  });
  it('tests if there is a link to Bulbapedia', () => {
    renderWithRouter(<About />);
    const infoLink = screen.getByRole('link', { name: /Bulbapedia/i });
    expect(infoLink).toBeInTheDocument()
    expect(infoLink).toHaveAttribute('href', 'https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9dex');
  
  })
})