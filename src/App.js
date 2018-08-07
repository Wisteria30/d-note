import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import TimeTablePage from "./TimeTable/TimeTablePage"

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
        </header>
        <TimeTablePage />
      </div>
    );
  }
}

export default App;
