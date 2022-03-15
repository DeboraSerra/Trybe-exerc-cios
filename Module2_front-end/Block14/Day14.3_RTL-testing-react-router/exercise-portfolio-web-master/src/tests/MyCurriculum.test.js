import React from "react";
import App from '../App';
import { render, screen } from '@testing-library/react';
import renderWithRouter from "./helpers/renderWithRouter";
import userEvent from '@testing-library/user-event';
import MyCurriculum from '../pages/MyCurriculum';

describe('Test the Resume page', () => {
  it('tests if there is the name on the page', () => {
    renderWithRouter(<MyCurriculum />);
    const nameTitle = screen.getByText(/d[eé]bora rodrigues serra/gmi);
    expect(nameTitle).toBeInTheDocument();
  })
  it('tests if there is contact information on the page', () => {
    renderWithRouter(<MyCurriculum />);
    const contactTitle = screen.getByText('Contact');
    expect(contactTitle).toBeInTheDocument();
  })
})