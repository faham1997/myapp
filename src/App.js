import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import About from './components/pages/About'
import Downloads from './components/pages/Downloads'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route path="/downloads" exact component={Downloads} />
        <Route path="/about" exact component={About} />
      </div>
    </Router>
  );
}

export default App;
