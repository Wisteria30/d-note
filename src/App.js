import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import TimeTablePage from './TimeTable/TimeTablePage';
import CorrelationDiagram from './CorrelationDiagram';
import DragSource from './Sketch/SketchPage';
import Note from './Note';
import About from './About';

import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';
import {withRouter} from 'react-router';

import {Drawer, List, ListItem} from 'material-ui';

import NavBar from './NavBar';

import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const styles = {
  card: {
    margin: 48,
    height: 128,
  },
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
    };
  }

  handleToggle() {
    this.setState({
      open: !this.state.open,
    });
  }

  render() {
    const classes = this.props.classes;
    console.log(classes);

    return (
      <div className="App">
        <header className="App-header">
          <h1>
            <div>
              <img src="images/DetectiveNoteBook.png" height="100%" />
            </div>
          </h1>
        </header>

        <div className="test">
          <NavBar onToggle={() => this.handleToggle()} open={this.state.open} />
        </div>

        {/* <Router>
          <div className="container">
            <ul>
              <li>
                <div className="item">
                  <Link to="/about">探偵手帳とは</Link>
                </div>
              </li>
              <li>
                <div className="item">
                  <Link to="/timeline">時系列</Link>
                </div>
              </li>
              <li>
                <div className="item">
                  <Link to="/correlationDiagram">人物相関図</Link>
                </div>
              </li>
              <li>
                <div className="item">
                  <Link to="/sketch">見取り図</Link>
                </div>
              </li>
              <li>
                <div className="item">
                  <Link to="/note">メモ</Link>
                </div>
              </li>
            </ul>

            <Route path="/about" component={About} />
            <Route path="/timeline" component={TimeTablePage} />
            <Route path="/correlationDiagram" component={CorrelationDiagram} />
            <Route path="/sketch" component={DragSource} />
            <Route path="/note" component={Note} />
          </div>
        </Router> */}
        {/* <CorrelationDiagram nodes={nodes} connections={connections} />, */}
      </div>
    );
  }
}
export default App;
