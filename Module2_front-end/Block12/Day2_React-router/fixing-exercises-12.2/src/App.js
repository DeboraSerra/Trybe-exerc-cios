import React, { Component } from 'react';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import StrictAccess from './components/StrictAccess';

class App extends Component {
  render() {
    return (
      <section>
        <BrowserRouter>
          <nav>
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/about'>About</Link></li>
              <li><Link to='/users/100'>Users</Link></li>
              <li><Link to='/strictaccess'>Strict Access</Link></li>
            </ul>
          </nav>

          <Switch>
            <Route path="/users/:id" render={(props)=> <Users {...props} greetingsMessage="Good Morning" />} />

            <Route path="/strictaccess" render={() => <StrictAccess user={ { username: 'joao', password: '134' } } />} />

            <Route path="/about" component={About} />
            
            <Route exact path="/" component={Home} />
          </Switch>
        </BrowserRouter>
      </section>
    );
  }
}

export default App;
