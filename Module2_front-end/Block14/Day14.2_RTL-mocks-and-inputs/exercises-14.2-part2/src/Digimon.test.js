import React from 'react';
import { render, screen } from '@testing-library/react';
import Digimon from './Digimon';

describe('Teste da tela do Digimon', () => {
  it('tests if the card apear with name, level and image of the digimon', async () => {
    const digimon = {
      name: 'Koromon',
      img: 'https://digimon.shadowsmith.com/img/koromon.jpg',
      level: 'In Training'
    }

    render(<Digimon digimon={ digimon } />);

    const digimonCard = screen.getByTestId('digimonCard');
    const digimonName = screen.getByTestId('digimonName');
    const digimonLevel = screen.getByTestId('digimonLevel');
    const digimonImage = screen.getByRole('img');

    expect(digimonCard).toBeInTheDocument();
    expect(digimonName).toBeInTheDocument();
    expect(digimonName).toHaveTextContent(digimon.name);
    expect(digimonLevel).toBeInTheDocument();
    expect(digimonLevel).toHaveTextContent(digimon.level);
    expect(digimonImage).toBeInTheDocument();
    expect(digimonImage).toHaveAttribute('src', 'https://digimon.shadowsmith.com/img/koromon.jpg');
  });
});
