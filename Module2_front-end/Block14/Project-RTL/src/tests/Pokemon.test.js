import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './helpers/renderWithRouter';
import { Pokemon } from '../components';
import pokemons from '../data';
import App from '../App';

const linkText = 'More details';

describe('Test the Pokemon compenent', () => {
  it('tests if the correct pokemon data apear on screen', () => {
    const { name, type, image, averageWeight } = pokemons[0];
    const { measurementUnit, value } = averageWeight;
    renderWithRouter(<Pokemon pokemon={ pokemons[0] } isFavorite={ false } />);
    const pokeName = screen.getByTestId('pokemon-name');
    const pokeType = screen.getByTestId('pokemon-type');
    const pokeWeight = screen.getByTestId('pokemon-weight');
    const pokeSprite = screen.getByRole('img');
    expect(pokeName).toHaveTextContent(name);
    expect(pokeType).toHaveTextContent(type);
    expect(pokeSprite).toHaveAttribute('src', image);
    expect(pokeSprite).toHaveAttribute('alt', `${name} sprite`);
    expect(pokeWeight).toHaveTextContent(`Average weight: ${value} ${measurementUnit}`);
  });
  it('tests there is a link to pokemon details', () => {
    renderWithRouter(<Pokemon pokemon={ pokemons[0] } isFavorite={ false } />);
    const detsLink = screen.getByRole('link', { name: linkText });
    expect(detsLink).toBeInTheDocument();
    expect(detsLink).toHaveAttribute('href', `/pokemons/${pokemons[0].id}`);
  });
  it('tests if the Detail ppage apear when the link is clicked', () => {
    renderWithRouter(<App />);
    const detsLink = screen.getByRole('link', { name: linkText });
    userEvent.click(detsLink);
    const detsTitle = screen.getByRole('heading', {
      name: `${pokemons[0].name} Details`, level: 2 });
    expect(detsTitle).toBeInTheDocument();
  });
  it('tests there the link redirect to the right page', () => {
    const { history } = renderWithRouter(<Pokemon
      pokemon={ pokemons[0] }
      isFavorite={ false }
    />);
    const detsLink = screen.getByRole('link', { name: linkText });
    userEvent.click(detsLink);
    expect(history.location.pathname).toBe(`/pokemons/${pokemons[0].id}`);
  });
  it('tests if there is a star to a favorite pokemon', () => {
    renderWithRouter(<Pokemon pokemon={ pokemons[0] } isFavorite />);
    const faveStar = screen.getAllByRole('img');
    expect(faveStar[1]).toHaveAttribute('src', '/star-icon.svg');
    expect(faveStar[1])
      .toHaveAttribute('alt', `${pokemons[0].name} is marked as favorite`);
  });
});
