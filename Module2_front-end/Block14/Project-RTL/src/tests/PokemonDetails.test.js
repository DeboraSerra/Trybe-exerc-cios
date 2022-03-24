import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './helpers/renderWithRouter';
import App from '../App';
import pokemons from '../data';

const currPoke = pokemons[0];
const { name, summary, foundAt } = currPoke;
const linkText = 'More details';

describe('Test the PokemonDetails Page', () => {
  it('tests if there is the right content in the page', () => {
    renderWithRouter(<App />);
    const detsLink = screen.getByRole('link', { name: linkText });
    userEvent.click(detsLink);
    const detsTitle = screen.getByRole('heading', { name: `${name} Details` });
    expect(detsTitle).toBeInTheDocument();
    expect(screen.queryByRole('link', { name: linkText })).not.toBeInTheDocument();
    const summaryTitle = screen.getByRole('heading', { name: 'Summary' });
    expect(summaryTitle).toBeInTheDocument();
    expect(screen.getByText(summary)).toBeInTheDocument();
  });
  it('tests if there is a map section in the page', () => {
    renderWithRouter(<App />);
    const detsLink = screen.getByRole('link', { name: linkText });
    userEvent.click(detsLink);
    const locationTitle = screen.getByRole('heading', {
      name: `Game Locations of ${name}` });
    expect(locationTitle).toBeInTheDocument();
    foundAt.forEach(({ location, map }, index) => {
      const images = screen.getAllByRole('img');
      expect(screen.getByText(location)).toBeInTheDocument();
      expect(images[index + 1]).toHaveAttribute('alt', `${name} location`);
      expect(images[index + 1]).toHaveAttribute('src', map);
    });
  });
  it('tests if the user can choose a pokemon as favorite', () => {
    renderWithRouter(<App />);
    const detsLink = screen.getByRole('link', { name: linkText });
    userEvent.click(detsLink);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeInTheDocument();
    expect(screen.getByLabelText('Pokémon favoritado?')).toBeInTheDocument();
    userEvent.click(checkbox);
    expect(screen.getAllByRole('img')[1])
      .toHaveAttribute('alt', `${name} is marked as favorite`);
    userEvent.click(checkbox);
    expect(screen.queryAllByRole('img')[1]).not
      .toHaveAttribute('alt', `${name} is marked as favorite`);
  });
});
