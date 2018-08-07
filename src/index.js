import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

render(
  <Router>
    <Route path="/" component={App} />
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
