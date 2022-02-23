import './App.css';
import AllMeme from './Components/AllMeme';
import data from './data';

function App() {
  return (
    <AllMeme memes={data}/>
  );
}

export default App;
