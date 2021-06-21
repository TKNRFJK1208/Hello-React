import React from 'react';
import './App.scss';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Work from './components/pages/Work';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/work' component={Work} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
