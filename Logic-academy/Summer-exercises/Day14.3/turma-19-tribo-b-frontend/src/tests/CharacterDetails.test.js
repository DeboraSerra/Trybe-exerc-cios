import React from 'react';
import { render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import renderWithRouter from './helper/renderWithRouter';
import userEvent from '@testing-library/user-event';
import { detailRick  } from './mocks/mockRickDets';
import { character } from './mocks/charactersMock';

import App from '../App';
import CharacterDetails from '../pages/CharacterDetails';

const EMAIL = 'email@email.com';
const PASSWORD = '123456';

describe('Tests the CharacterDetails page', () => {
  it('test if there is the correct info about the character', async () => {
    global.fetch = jest.fn()
      .mockImplementationOnce(() => Promise.resolve({
        json: () => Promise.resolve(character)
      }))
      .mockImplementation(() => Promise.resolve({
        json: () => Promise.resolve(detailRick)
      }))
    renderWithRouter(<App />);

    const emailInput = screen.getByPlaceholderText('Digite seu email');
    const passwordInput = screen.getByPlaceholderText('Digite sua senha');
    const loginButton = screen.getByRole('button');

    userEvent.type(emailInput, EMAIL);
    userEvent.type(passwordInput, PASSWORD);
    userEvent.click(loginButton);

    const allLinks = await screen.findAllByRole('link', { name: 'Detalhes' });
    userEvent.click(allLinks[0]);

    const characName = await screen.findByText(detailRick.name);
    expect(characName).toBeInTheDocument();
  })
})