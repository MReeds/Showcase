import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Showcase from './components/Showcase';

ReactDOM.render(
    <Router>
    <Showcase />
    </Router>,
  document.getElementById('root')
);
