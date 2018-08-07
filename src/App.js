import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import TimeTablePage from './TimeTable/TimeTablePage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            <div>
              <img src="images/DetectiveNoteBook.png" />
            </div>
          </h1>
          <p>ミステリーを読む手助けになります</p>
          <Router>
            <div>
              <Link to="/about">About</Link>
              <Route path="/about" component={About} />
            </div>
          </Router>
        </header>
        <TimeTablePage />
      </div>
    );
  }
}

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

export default App;
