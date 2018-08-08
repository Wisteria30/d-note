import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import TimeTablePage from './TimeTable/TimeTablePage';
import CorrelationDiagram from './CorrelationDiagram';
// import SketchPage from './Sketch/SketchPage';
import Note from './Note';

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
              <Link to="/about">探偵手帳とは</Link>
              <Link to="/timeline">時系列</Link>
              <Link to="/correlationDiagram">人物相関図</Link>
              {/* <Link to="/sketch">見取り図</Link> */}
              <Link to="/note">メモ</Link>
              <Route path="/about" component={About} />
              <Route path="/timeline" component={TimeTablePage} />
              <Route
                path="/correlationDiagram"
                component={CorrelationDiagram}
              />
              {/* <Route path="/sketch" component={SketchPage} /> */}
              <Route path="/note" component={Note} />
            </div>
          </Router>
          {/* <CorrelationDiagram nodes={nodes} connections={connections} />, */}
        </header>
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
