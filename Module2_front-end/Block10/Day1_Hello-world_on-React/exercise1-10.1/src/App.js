import './App.css';

const Task = (value) => {
  return (
    <li key={value}>{value}</li>
  )
}

const tasks = ['Feed the dog', 'Study', 'Eat', 'Go to the gym'];

function App() {
  return (
    <section>
      <ol>{tasks.map((task) => Task(task))}</ol>
    </section>
    
  );
}

export default App;
