import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './helpers/renderWithRouter';
import App from '../App';
import pokemons from '../data';

const pokeTypes = [...new Set(pokemons
  .reduce((types, { type }) => [...types, type], []))];
const nameId = 'pokemon-name';

describe('Test the Pokedex page', () => {
  it('expects to have a title "Encountered pokémons"', () => {
    renderWithRouter(<App />);
    const title = screen.getByRole('heading', { level: 2 });
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent('Encountered pokémons');
  });
  it('tests if the pokemons are shown', () => {
    renderWithRouter(<App />);
    let pokemonName = screen.getByTestId(nameId);
    const nextBtn = screen.getByTestId('next-pokemon');
    expect(pokemonName).toHaveTextContent(pokemons[0].name);

    userEvent.click(nextBtn);
    pokemonName = screen.getByTestId(nameId);
    expect(pokemonName).toHaveTextContent(pokemons[1].name);

    userEvent.click(nextBtn);
    pokemonName = screen.getByTestId(nameId);
    expect(pokemonName).toHaveTextContent(pokemons[2].name);

    userEvent.click(nextBtn);
    pokemonName = screen.getByTestId(nameId);
    expect(pokemonName).toHaveTextContent(pokemons[3].name);

    userEvent.click(nextBtn);
    pokemonName = screen.getByTestId(nameId);
    expect(pokemonName).toHaveTextContent(pokemons[4].name);

    userEvent.click(nextBtn);
    pokemonName = screen.getByTestId(nameId);
    expect(pokemonName).toHaveTextContent(pokemons[5].name);

    userEvent.click(nextBtn);
    pokemonName = screen.getByTestId(nameId);
    expect(pokemonName).toHaveTextContent(pokemons[6].name);

    userEvent.click(nextBtn);
    pokemonName = screen.getByTestId(nameId);
    expect(pokemonName).toHaveTextContent(pokemons[7].name);

    userEvent.click(nextBtn);
    pokemonName = screen.getByTestId(nameId);
    expect(pokemonName).toHaveTextContent(pokemons[8].name);

    userEvent.click(nextBtn);
    pokemonName = screen.getByTestId(nameId);
    expect(pokemonName).toHaveTextContent(pokemons[0].name);
  });
  it('tests if there is only one pokemon at a time', () => {
    renderWithRouter(<App />);
    const pokemonName = screen.getAllByTestId(nameId);
    expect(pokemonName).toHaveLength(1);
  });
  it('tests if there are buttons for Each type', () => {
    renderWithRouter(<App />);
    const typeButtons = screen.getAllByTestId('pokemon-type-button');
    const allBtn = screen.getByRole('button', { name: 'All' });

    expect(allBtn).toBeInTheDocument();
    expect(typeButtons).toHaveLength(pokeTypes.length);

    typeButtons.forEach((btn, index) => {
      expect(btn).toHaveTextContent(pokeTypes[index]);
      userEvent.click(btn);
      const pokemonsOfType = pokemons
        .filter((poke) => poke.type === btn.innerHTML);
      const nextBtn = screen.getByTestId('next-pokemon');
      if (pokemonsOfType.length <= 1) {
        expect(nextBtn).toBeDisabled();
      } else {
        let currPoke = screen.getByTestId(nameId);
        expect(currPoke).toHaveTextContent(pokemonsOfType[0].name);
        userEvent.click(nextBtn);
        currPoke = screen.getByTestId(nameId);
        expect(currPoke).toHaveTextContent(pokemonsOfType[1].name);
      }
    });
  });
  it('tests if the "All" button resets the filters', () => {
    renderWithRouter(<App />);
    const typeButtons = screen.getAllByTestId('pokemon-type-button');
    const allBtn = screen.getByRole('button', { name: 'All' });
    userEvent.click(typeButtons[2]);
    expect(screen.getByTestId(nameId)).not.toHaveTextContent(pokemons[0].name);
    userEvent.click(allBtn);
    expect(screen.getByTestId(nameId)).toHaveTextContent(pokemons[0].name);
  });
});
