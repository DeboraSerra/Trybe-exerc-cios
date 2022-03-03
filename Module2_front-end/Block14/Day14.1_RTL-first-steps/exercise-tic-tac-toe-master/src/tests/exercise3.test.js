import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('Test the result of winning the game', () => {
  it('verifies if the application shows a message with the winner', () => {
    render(<App />);
    const cells = screen.getAllByTestId(/cell_/i);
    userEvent.click(cells[0]);
    userEvent.click(cells[4]);
    userEvent.click(cells[1]);
    userEvent.click(cells[5]);
    userEvent.click(cells[2]);
    const message = screen.getByText(/Player 1 Wins!/i);
    expect(message).toBeInTheDocument();
  });
  it('Verifies if the application shows the rigth message on a draw', () => {
    render(<App />);
    const cells = screen.getAllByTestId(/cell_/i);
    userEvent.click(cells[1]);
    userEvent.click(cells[0]);
    userEvent.click(cells[4]);
    userEvent.click(cells[2]);
    userEvent.click(cells[6]);
    userEvent.click(cells[7]);
    userEvent.click(cells[8]);
    userEvent.click(cells[3]);
    userEvent.click(cells[5]);
    const message = screen.getByText(/Draw!/i);
    expect(message).toBeInTheDocument();
  });
  it('verifies if when the reset button is clicked, the game restarts', () => {
    render(<App />);
    const cells = screen.getAllByTestId(/cell_/i);
    userEvent.click(cells[1]);
    userEvent.click(cells[0]);
    userEvent.click(cells[4]);
    userEvent.click(cells[2]);
    userEvent.click(cells[6]);
    userEvent.click(cells[7]);
    userEvent.click(cells[8]);
    userEvent.click(cells[3]);
    userEvent.click(cells[5]);
    const btn = screen.getByText('Restart game');
    userEvent.click(btn);
    const expectedLength = 9;
    cells.forEach((field) => {
      expect(field.innerHtml).toBe(undefined);
    });
    expect(cells).toHaveLength(expectedLength);
    expect(screen.queryByText(/draw!/i)).not.toBeInTheDocument();
  });
});
