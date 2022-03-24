import React from 'react';
import { screen } from '@testing-library/react';
import About from '../components/About';
import renderWithRouter from './helpers/renderWithRouter';

describe('Test the About page', () => {
  it('tests if there is the title "About Pokedéx"', () => {
    renderWithRouter(<About />);
    const aboutTitle = screen
      .getByRole('heading', { name: /about pok[ée]dex/i, level: 2 });
    expect(aboutTitle).toBeInTheDocument();
  });
  it('tests if there is two paragraphs about the pokedex', () => {
    renderWithRouter(<About />);
    const textOne = /This application simulates a Pokédex/igm;
    const textTwo = /One can filter Pokémons by type/igm;
    const paragraphOne = screen.getByText(textOne);
    const paragraphTwo = screen.getByText(textTwo);
    expect(paragraphOne).toBeInTheDocument();
    expect(paragraphTwo).toBeInTheDocument();
  });
  it('tests if there is a pokedex picture in the document', () => {
    renderWithRouter(<About />);
    const url = 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';
    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', url);
  });
});
