import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import { Route } from 'react-router-dom';

function App() {
  return (
    <>

    <Route exact path='/' component={Home}/>
    <Route path='/about' component={About}/>
    <Route path='/contact' component={Contact}/>

    <Navigation />
  </>
  )
};

export default App;
