import React from 'react';
import { Provider } from 'react-redux'
import './App.css';

import NavBar from './components/layouts/navbar'
import Footer from './components/layouts/footer'
import Landing  from './components/home/landing'

import store from './store'

function App() {
  return (
    <Provider store={store}>
      <NavBar />
      <Landing />
      <Footer />
    </Provider>
  );
}

export default App;
