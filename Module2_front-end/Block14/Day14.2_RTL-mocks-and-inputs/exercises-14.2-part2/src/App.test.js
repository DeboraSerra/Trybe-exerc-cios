import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('Teste da aplicação toda', () => {
  it('tests if there is an input in the document', () => {
    render(<App />);
    const textInput = screen.getByTestId('search-input');

    expect(textInput).toBeInTheDocument();
    expect(textInput.type).toBe('text');
    userEvent.type(textInput, 'test');
    expect(textInput.value).toBe('test');
  });
  it('tests if there is a button in the document', async () => {
    render(<App />);
    const button = screen.getByTestId('search-button');
    const textInput = screen.getByTestId('search-input');

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/Search Digimon/i);
    expect(button.type).toBe('button');
    expect(screen.queryByText('Faça uma pesquisa')).toBeInTheDocument();
    userEvent.type(textInput, 'test');
    userEvent.click(button);
    
    const text = await screen.findByText(/Test is not a Digimon in our database./i)
    expect(text).toBeInTheDocument();
  });
  it('tests the function fetch', () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue([{
        name: "Koromon",
        img: "https://digimon.shadowsmith.com/img/koromon.jpg",
        level: "In Training"
      }]),
    });

    render(<App />);
    const button = screen.getByTestId('search-button');
    const textInput = screen.getByTestId('search-input');
    userEvent.type(textInput, 'Koromon');
    userEvent.click(button);
    expect(global.fetch).toHaveBeenCalled();
  })
});
