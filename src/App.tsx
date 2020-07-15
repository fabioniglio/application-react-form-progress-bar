import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes';

import AppProvider from './hooks';

import GlobalStyle from './styles/global';

function App() {
  return (
    <AppProvider>
      <Router>
        <Routes />
      </Router>
      <GlobalStyle />
    </AppProvider>
  );
}

export default App;
