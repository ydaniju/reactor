import React from 'react';
import ReactDOM from 'react-dom';
import JSXCompiler from './JSXCompiler';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <JSXCompiler />,
  document.getElementById('root')
);
registerServiceWorker();
