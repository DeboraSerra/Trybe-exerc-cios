import React from 'react';
import { connect } from 'react-redux';
import { addTask } from '../actions';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      task: '',
    }
  }

  handleChange = ({ target: { value } }) => {
    this.setState({ task: value })
  }

  addMyTask = (e) => {
    e.preventDefault();
    const { addTask } = this.props;
    const { task } = this.state;
    if (task) {
      addTask(task);
    }
    this.setState({ task: '' })
  }

  render() {
    const { task } = this.state;
    return (
      <form onSubmit={ this.addMyTask }>
        <input
          type="text"
          placeholder="Add a task"
          onChange={ this.handleChange }
          value={ task }
        />
        <button onClick={ this.addMyTask } type="submit">Add task</button>
      </form>
    );
  };
}

const mapDispatchToProps = (dispatch) => ({
  addTask: (task) => dispatch(addTask(task)),
})

export default connect(null, mapDispatchToProps)(Form);
