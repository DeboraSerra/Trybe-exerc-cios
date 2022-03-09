import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('Verify the component "inputTodo"', () => {
  const task = 'Feed the dog';
  afterEach(cleanup);

  it('Verifies if there is an add button', () => {
    render(<App />);
    const addBtn = screen.getByText('Adicionar');

    expect(addBtn).toBeInTheDocument();
    expect(addBtn.type).toBe('button');
  });

  it('verifies if the button adds a task when clicked', () => {
    render(<App />);
    const addBtn = screen.getByText('Adicionar');
    const inputTask = screen.getByLabelText('Tarefa:');

    userEvent.type(inputTask, task);
    expect(screen.queryByText(task)).not.toBeInTheDocument();
    userEvent.click(addBtn);
    expect(screen.queryByText(task)).toBeInTheDocument();
  });
});
