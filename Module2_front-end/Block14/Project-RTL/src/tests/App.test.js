import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './helpers/renderWithRouter';

describe('01. Test the App component', () => {
  it('tests if there are 3 links on the page', () => {
    renderWithRouter(<App />);
    const navLinks = screen.getAllByRole('link');
    expect(navLinks[0]).toHaveTextContent('Home');
    expect(navLinks[1]).toHaveTextContent('About');
    expect(navLinks[2]).toHaveTextContent('Favorite Pokémons');
  });
  it('tests if the links render the right path', () => {
    const { history } = renderWithRouter(<App />);
    const aboutLink = screen.getByRole('link', { name: /about/i });

    userEvent.click(aboutLink);
    expect(history.location.pathname).toBe('/about');

    const faveLink = screen.getByRole('link', { name: /favorite pokémons/i });
    userEvent.click(faveLink);
    expect(history.location.pathname).toBe('/favorites');

    const homeLink = screen.getByRole('link', { name: /home/i });
    userEvent.click(homeLink);
    expect(history.location.pathname).toBe('/');
  });
  it('tests if there is a notFound page', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/not-a-page');
    const errorPage = screen.getByRole('heading', { level: 2, name: /not found/gmi });
    expect(errorPage).toBeInTheDocument();
  });
});
