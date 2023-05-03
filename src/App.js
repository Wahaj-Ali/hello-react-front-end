import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';
import store from './Redux/configureStore';
import Greeting from './components/Greeting';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Greeting />
      </Router>
    </Provider>
  );
}

export default App;
