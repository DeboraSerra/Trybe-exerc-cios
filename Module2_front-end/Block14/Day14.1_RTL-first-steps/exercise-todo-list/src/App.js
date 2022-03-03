import React, { Component } from 'react';
import InputTodo from './InputTodo';
import Item from './Item';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listTodo: [],
      selected: [],
    };

    this.addTodo = this.addTodo.bind(this);
    this.selectTodo = this.selectTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  addTodo(todo) {
    this.setState((state) => ({ listTodo: [...state.listTodo, todo] }));
  }

  selectTodo({ target }) {
    const task = target.innerText;
    const { selected } = this.state;
    if (!selected.includes(task)) {
      this.setState({ selected: [...selected, task] });
      return true;
    }
    const newSlected = selected.filter((item) => item !== task);
    this.setState({ selected: newSlected });
    return false;
  }

  removeTodo(task) {
    const { selected, listTodo } = this.state;
    if (selected.includes(task)) {
      const todo = listTodo.filter((item) => item !== task);
      const select = selected.filter((item) => item !== task);
      this.setState({
        listTodo: todo,
        selected: select,
      });
    }
  }

  render() {
    const { listTodo, selected } = this.state;
    return (
      <div className="App">
        <InputTodo addTodo={ (todo) => this.addTodo(todo) } />
        {listTodo && (
          <ul>
            {
              listTodo.map((todo, index) => (
                <li key={ index + 1 }>
                  <Item
                    content={ todo }
                    select={ this.selectTodo }
                  />
                  <button
                    type="button"
                    disabled={ !selected.includes(todo) }
                    onClick={ () => this.removeTodo(todo) }
                  >
                    Remover
                  </button>
                </li>
              ))
            }
          </ul>
        )}
      </div>
    );
  }
}
export default App;
