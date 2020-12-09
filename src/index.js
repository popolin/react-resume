import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import LoadingSpinner from './components/Static/LoadingSpinner';
import 'semantic-ui-css/semantic.min.css';
import './i18n';

import App from './App';


ReactDOM.render(

  <Suspense fallback={<LoadingSpinner />}>
    <App />
  </Suspense>,

  document.getElementById('root'),
);
