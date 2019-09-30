import 'bootstrap/dist/css/bootstrap.css';
import 'input-moment/dist/input-moment.css';
import '../node_modules/jquery/dist/jquery.min.js';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import './styles/App.css';

import React from 'react';
import ReactDom from 'react-dom';

import App from './components/App';

ReactDom.render(<App />, document.querySelector('#root'));
