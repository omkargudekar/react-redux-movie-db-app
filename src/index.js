import React from 'react';
import ReactDOM from 'react-dom';
import RootComtainer from './RootContainer'
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<RootComtainer />, document.getElementById('root'));
registerServiceWorker();
