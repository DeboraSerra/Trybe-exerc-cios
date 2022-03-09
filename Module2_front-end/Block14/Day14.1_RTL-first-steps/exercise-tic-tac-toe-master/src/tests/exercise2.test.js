import React from "react";
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('Testing the playing functions of the application', () => {
  it('tests if the symbol changes when they are suposed to', () => {
    render(<App />);
    const player1 = screen.getByTestId('player1');
    const cells = screen.getAllByTestId(/cell_/i);
    expect(player1).toBeInTheDocument();
    userEvent.click(cells[0]);
    const player2 = screen.getByTestId('player2');
    expect(player2).toBeInTheDocument();
  });
  it('tests if a field can\'t be changed after it\'s marked', () => {
    render(<App />);
    const cells = screen.getAllByTestId(/cell_/i);
    userEvent.click(cells[0]);
    const mark = screen.getByTestId('player-1-mark');
    expect(mark).toBeInTheDocument();
    userEvent.click(cells[0]);
    expect(mark).toBeInTheDocument();
  });
});
