import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Item from '../Item';
import App from '../App';

const listTodo = ['Realizar CR', 'Ler Post no Medium', 'Beber água'];
const tasksLength = listTodo.length;

describe('Test the component "Item"', () => {
  it('Verifies if the string passed to the component apears on screen', () => {
    listTodo.forEach((task) => {
      render(<Item content={ task } />);
      const renderedTask = screen.queryByText(task);
      expect(renderedTask).toBeInTheDocument();
    });
  });
  it('verifies if all the tasks passed apear on screen', () => {
    render(<App />);
    const inputTask = screen.getByLabelText('Tarefa:');
    const addBtn = screen.getByText('Adicionar');
    listTodo.forEach((task) => {
      userEvent.type(inputTask, task);
      userEvent.click(addBtn);
    });
    const addedTasks = screen.getAllByRole('listitem');
    expect(addedTasks).toHaveLength(tasksLength);
  });
});
