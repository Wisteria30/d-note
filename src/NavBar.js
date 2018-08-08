import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {AppBar, MenuItem, Drawer} from 'material-ui';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import TimeTablePage from './TimeTable/TimeTablePage';
import CorrelationDiagram from './CorrelationDiagram';
import DragSource from './Sketch/SketchPage';
import Note from './Note';
import About from './About';
// import {browserHistory} from 'react-router';

class NavBar extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Router>
            <Drawer
              docked={false}
              width={130}
              open={this.props.open}
              onRequestChange={() => this.props.onToggle()}>
              <MenuItem>
                <Link to="/About">探偵手帳とは</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/timeline">時系列</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/correlationDiagram">人物相関図</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/sketch">見取り図</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/note">メモ</Link>
              </MenuItem>

              <Route path="/about" component={About} />
              <Route path="/timeline" component={TimeTablePage} />
              <Route
                path="/correlationDiagram"
                component={CorrelationDiagram}
              />
              <Route path="/sketch" component={DragSource} />
              <Route path="/note" component={Note} />
            </Drawer>
          </Router>

          <AppBar
            title="Menu"
            onLeftIconButtonClick={() => this.props.onToggle()}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default NavBar;
