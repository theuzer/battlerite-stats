import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import Home from './components/Home';

import keepAwake from './logic/keepAwake';

ReactDOM.render(<Home />, document.getElementById('root'));

keepAwake.keepAwake();
