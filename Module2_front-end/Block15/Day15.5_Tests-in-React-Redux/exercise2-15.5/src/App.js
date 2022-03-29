import { connect } from 'react-redux';
import './App.css';
import Form from './components/Form';
import Tasks from './components/Tasks';
import { removeTask } from './actions';

const removeCompleted = (tasks, removeTask) => {
  tasks.forEach((task) => {
    removeTask(task);
  })
}

function App({ removeTask, selected, completed, tasks }) {
  return (
    <div className="App">
      <Form />
      <button type="button" onClick={ () => removeTask(selected) }>
        Delete selected task
      </button>
      <button type="button" onClick={ () => removeCompleted(completed, removeTask)}>
        Delete completed tasks
      </button>
      <button type="button" onClick={ () => removeCompleted(tasks, removeTask)}>
        Delete all tasks
      </button>
      <Tasks />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  removeTask: (task) => dispatch(removeTask(task)),
});

const mapStateToProps = (state) => ({
  selected: state.selectTaskReducer.task,
  completed: state.completeTasksReducer.tasks,
  tasks: state.addTasksReducer.tasks,
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
