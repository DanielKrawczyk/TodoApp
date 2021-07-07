import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import Loading from './components/Loading';
import './styles/main.css';

ReactDOM.render(
  <Router basename={process.env.PUBLIC_URL}>
      <Suspense fallback={<Loading />}>
      <App />
      </Suspense>
  </Router>,
  document.getElementById('root')
);

