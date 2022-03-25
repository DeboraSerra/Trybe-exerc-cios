import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import RegisteredClients from './pages/RegisteredClients';
import RegisterClient from './pages/RegisterClient';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/login" component={ Login } />
          <Route path="/registered-clients" component={ RegisteredClients } />
          <Route path="/register-client" component={ RegisterClient } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
