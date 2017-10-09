import React, { Component } from 'react';
import './reset.css';
import './App.css';
import router from './router/router';

class App extends Component {
  render() {
    return (
      <div className="App">
        {router}
      </div>
    );
  }
}

export default App;
