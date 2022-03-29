import React from 'react';
import { connect } from 'react-redux';
import { selectTask, completeTask } from '../actions';

class Tasks extends React.Component {
  render() {
    const { tasks, completed, selected, complete, select } = this.props;
    return (
      <ol>
        {tasks.map((task) => (
          <li
            key={task}
            className={ selected === task ? 'selected' : ''}
            onClick={ () => select(task) }
            onDoubleClick={ () => complete(task) }
          >
            <p className={ completed[task] ? 'complete' : ''}>
              {task}
            </p>
          </li>
        ))}
      </ol>
    );
  };
}

const mapStateToProps = (state) => ({
  tasks: state.addTasksReducer.tasks,
  completed: state.completeTasksReducer.isComplete,
  selected: state.selectTaskReducer.task,
})

const mapDispatchToProps = (dispatch) => ({
  select: (task) => dispatch(selectTask(task)),
  complete: (task) => dispatch(completeTask(task)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
