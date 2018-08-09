import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {AppBar, MenuItem, Drawer} from 'material-ui';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import TimeTablePage from './TimeTable/TimeTablePage';
import CorrelationDiagram from './CorrelationDiagram';
import DragSource from './Sketch/SketchPage';
import Note from './Note';
import About from './About';

import {List, ListItem} from 'material-ui';

class NavBar extends Component {
  componentWillMount() {
    this.setState({drawerOpen: false});
  }
  handleOpen = () => {
    this.setState({drawerOpen: true});
  };
  handleClose = () => {
    this.setState({drawerOpen: false});
  };

  render() {
    return (
      <MuiThemeProvider>
        <Router>
          <div>
            <Drawer
              docked={false}
              open={this.state.drawerOpen}
              containerStyle={{top: 64}}
              onRequestChange={this.handleClose}>
              <List>
                {/* <ListItem
                  primaryText="Home"
                  containerElement={<Link to="/" />}
                  onTouchTap={this.handleClose}
                /> */}

                <ListItem
                  className="test"
                  primaryText="探偵手帳とは"
                  containerElement={<Link to="/about" />}
                  onTouchTap={this.handleClose}
                />

                <ListItem
                  primaryText="時系列"
                  containerElement={<Link to="/timeline" />}
                  onTouchTap={this.handleClose}
                />

                <ListItem
                  primaryText="人物相関図　※未実装"
                  containerElement={<Link to="/correlationDiagram" />}
                  onTouchTap={this.handleClose}
                />

                <ListItem
                  primaryText="見取り図　※未実装"
                  containerElement={<Link to="/sketch" />}
                  onTouchTap={this.handleClose}
                />

                <ListItem
                  primaryText="メモ"
                  containerElement={<Link to="/note" />}
                  onTouchTap={this.handleClose}
                />
              </List>
            </Drawer>

            <AppBar title="Menu" onLeftIconButtonClick={this.handleOpen} />

            <Route path="/about" component={About} />
            <Route path="/timeline" component={TimeTablePage} />
            <Route path="/correlationDiagram" component={CorrelationDiagram} />
            <Route path="/sketch" component={DragSource} />
            <Route path="/note" component={Note} />
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default NavBar;
