import { screen } from '@testing-library/react';
import renderWithRedux from './helpers';
import App from '../App';
import userEvent from '@testing-library/user-event';

describe('Test the to do application', () => {
  it('expects to have a text input and a button on screen', () => {
    renderWithRedux(<App />);
    const addBtn = screen.getByRole('button', { name: 'Add task' });
    const input = screen.getByRole('textbox');
    expect(addBtn).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });
  it('expects to be able to add tasks to screen', () => {
    renderWithRedux(<App />);
    const addBtn = screen.getByRole('button', { name: 'Add task' });
    const input = screen.getByRole('textbox');
    userEvent.type(input, 'task 1');
    userEvent.click(addBtn);
    expect(screen.getByText('task 1')).toBeInTheDocument();
  });
  it('expects to have all the tasks added to the screen', () => {
    renderWithRedux(<App />);
    const addBtn = screen.getByRole('button', { name: 'Add task' });
    const input = screen.getByRole('textbox');
    userEvent.type(input, 'task 1');
    userEvent.click(addBtn);
    userEvent.type(input, 'task 2');
    userEvent.click(addBtn);
    userEvent.type(input, 'task 3');
    userEvent.click(addBtn);
    const tasks = screen.getAllByRole('listitem');
    expect(tasks).toHaveLength(3);
    expect(tasks[0]).toHaveTextContent('task 1');
    expect(tasks[1]).toHaveTextContent('task 2');
    expect(tasks[2]).toHaveTextContent('task 3');
  });
  it('tests if a task is marked as completed with a double click', () => {
    const { store } = renderWithRedux(<App />);
    const addBtn = screen.getByRole('button', { name: 'Add task' });
    const input = screen.getByRole('textbox');
    userEvent.type(input, 'task 1');
    userEvent.click(addBtn);
    userEvent.type(input, 'task 2');
    userEvent.click(addBtn);
    userEvent.type(input, 'task 3');
    userEvent.click(addBtn);
    const task = screen.getByText('task 1');
    userEvent.dblClick(task);
    let state = store.getState();
    expect(state.completeTasksReducer.isComplete[task.innerHTML]).toBeTruthy();
    userEvent.dblClick(task);
    state = store.getState();
    expect(state.completeTasksReducer.isComplete[task.innerHTML]).toBeFalsy();
  });
  it('tests if a task is marked as selected with a click', () => {
    const { store } = renderWithRedux(<App />);
    const addBtn = screen.getByRole('button', { name: 'Add task' });
    const input = screen.getByRole('textbox');
    userEvent.type(input, 'task 1');
    userEvent.click(addBtn);
    userEvent.type(input, 'task 2');
    userEvent.click(addBtn);
    userEvent.type(input, 'task 3');
    userEvent.click(addBtn);
    const task = screen.getByText('task 1');
    userEvent.click(task);
    let state = store.getState();
    expect(state.selectTaskReducer.task).toBe(task.innerHTML);
    userEvent.click(task);
    state = store.getState();
    expect(state.selectTaskReducer.task).toBeFalsy();
  });
  it('tests the delete complete tasks button', () => {
    const { store } = renderWithRedux(<App />);
    const addBtn = screen.getByRole('button', { name: 'Add task' });
    const input = screen.getByRole('textbox');
    userEvent.type(input, 'task 1');
    userEvent.click(addBtn);
    userEvent.type(input, 'task 2');
    userEvent.click(addBtn);
    userEvent.type(input, 'task 3');
    userEvent.click(addBtn);
    userEvent.dblClick(screen.getByText('task 1'));
    const deleteComp = screen.getByRole('button', { name: 'Delete completed tasks' })
    userEvent.click(deleteComp);
    const state = store.getState();
    expect(state.addTasksReducer.tasks.includes('task 1')).toBeFalsy();
  });
  it('tests the delete selected tasks button', () => {
    const { store } = renderWithRedux(<App />);
    const addBtn = screen.getByRole('button', { name: 'Add task' });
    const input = screen.getByRole('textbox');
    userEvent.type(input, 'task 1');
    userEvent.click(addBtn);
    userEvent.type(input, 'task 2');
    userEvent.click(addBtn);
    userEvent.type(input, 'task 3');
    userEvent.click(addBtn);
    userEvent.click(screen.getByText('task 1'));
    const deleteSelect = screen.getByRole('button', { name: 'Delete selected task' })
    userEvent.click(deleteSelect);
    const state = store.getState();
    expect(state.addTasksReducer.tasks.includes('task 1')).toBeFalsy();
  });
  it('tests the delete all tasks button', () => {
    const { store } = renderWithRedux(<App />);
    const addBtn = screen.getByRole('button', { name: 'Add task' });
    const input = screen.getByRole('textbox');
    userEvent.type(input, 'task 1');
    userEvent.click(addBtn);
    userEvent.type(input, 'task 2');
    userEvent.click(addBtn);
    userEvent.type(input, 'task 3');
    userEvent.click(addBtn);
    let state = store.getState();
    expect(state.addTasksReducer.tasks).toHaveLength(3);
    userEvent.click(screen.getByText('task 1'));
    const deleteAll = screen.getByRole('button', { name: 'Delete all tasks' })
    userEvent.click(deleteAll);
    state = store.getState();
    expect(state.addTasksReducer.tasks).toHaveLength(0);
  });
})
