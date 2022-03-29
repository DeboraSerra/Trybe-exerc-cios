import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './helpers/renderWithRouter';
import { NotFound } from '../components';

describe('Tests the NotFound page', () => {
  it('expects to find a title with the text "Page requested not found"', () => {
    renderWithRouter(<NotFound />);
    const title = screen.getByRole('heading', { level: 2 });
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent('Page requested not found');
  });
  it('expects to find an image on the page', () => {
    renderWithRouter(<NotFound />);
    const image = screen.getAllByRole('img');
    expect(image[1]).toHaveAttribute('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
