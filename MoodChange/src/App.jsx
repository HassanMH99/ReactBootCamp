import React from 'react';
import ThemeProvider from './ThemeProvider';
import {Header} from './Header';
import HomePage from './HomePage';
import AboutPage from './AboutPage';

const App = () => {
  return (
    <ThemeProvider>
      <Header />
      <HomePage />
      <AboutPage />
    </ThemeProvider>
  );
};

export default App;
