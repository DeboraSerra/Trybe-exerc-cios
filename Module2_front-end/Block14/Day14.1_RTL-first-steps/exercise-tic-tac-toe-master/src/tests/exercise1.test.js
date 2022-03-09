import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('Tests the inicial state of the application', () => {
  it('verifies if the fields are empty when the page is loaded', () => {
    render(<App />);
    const fields = screen.getAllByTestId(/cell_gamecell-0/i);
    const expectedLength = 9;
    fields.forEach((field) => {
      expect(field.innerHtml).toBe(undefined);
    });
    expect(fields).toHaveLength(expectedLength);
    expect(screen.queryByText('Game Over')).not.toBeInTheDocument();
  });
});
