import React from 'react';
import { useState } from "react";
import './App.scss';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Work from './components/pages/Work/Work';
import About from './components/pages/About/About';
import Contact from './components/pages/Contact/Contact';
import Navbar from './components/Navbar/Navbar';
import Menu from './components/Menu/Menu';


function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Router>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
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
