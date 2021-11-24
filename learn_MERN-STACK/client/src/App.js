import React, { Component } from 'react';
import './App.css';
import InsertUser from './pages/InsertUser';
class App extends Component {
  
  render() {

    return(
      <div className="App">
        <InsertUser />
        {/* <AlertPractice /> */}
        {/* <LetPractice /> */}
      </div>
    )
  }
}

export default App;
