import renderWithRouter from './helpers/renderwithRouter';
import React from 'react';
import App from '../App';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('01. Test the App component', () => {
  it('tests if there are 3 links on the page', () => {
    renderWithRouter(<App />);
    const homeLink = screen.getByRole('link', {name: /home/i});
    const aboutLink = screen.getByRole('link', { name: /about/i});
    const faveLink = screen.getByRole('link', { name: /favorite pokemons/i});
    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(faveLink).toBeInTheDocument();
  })
  it('tests if the links render the right path', () => {
    const { history } = renderWithRouter(<App />);
    const aboutLink = screen.getByRole('link', { name: /about/i});
    
    userEvent.click(aboutLink);
    expect(history.location.pathname).toBe('/about');
    
    const faveLink = screen.getByRole('link', { name: /favorite pokemons/i});
    userEvent.click(faveLink);
    expect(history.location.pathname).toBe('/favorite-poke');

    const homeLink = screen.getByRole('link', {name: /home/i});
    userEvent.click(homeLink);
    expect(history.location.pathname).toBe('/');
  });
  it('tests if there is a notFound page', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/not-a-page');
    const errorPage = screen.getByRole('heading', { level: 1, name: /404/gmi});
    expect(errorPage).toBeInTheDocument();
  })
})