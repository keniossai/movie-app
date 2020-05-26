import React from 'react';
import { Provider } from 'react-redux'
import './App.css';

import { HashRouter as Router, Route } from 'react-router-dom'

import NavBar from './components/layouts/navbar'
import Footer from './components/layouts/footer'
import Landing  from './components/home/landing'
import Movies from './components/home/movie'

import store from './store'

function App() {
  return (
    <Provider store={store}>
    <Router>
    <div>
      <NavBar />
      <Route exact path='/' component={Landing} />
      <Route path='/movie/:id' component={Movies} />
      <Footer />
    </div>  
    </Router>  
    </Provider>
  );
}

export default App;
