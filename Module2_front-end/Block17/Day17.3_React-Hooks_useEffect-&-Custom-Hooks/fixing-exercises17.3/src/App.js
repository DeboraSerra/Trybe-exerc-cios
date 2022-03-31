import Fixing1 from './components/Fixing1';
import './App.css';
import Fixing2 from './components/Fixing2';
import { useState } from 'react';

function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="App">
      {show && <Fixing1 />}
      <button type="button" onClick={ () => setShow(!show) }>
        Show counter
      </button>
      <Fixing2 />
    </div>
  );
}

export default App;
