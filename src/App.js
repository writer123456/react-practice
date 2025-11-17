
import './App.css';
import React from 'react';
// import Counter from './components/Counter';
// import DataFetch from './components/DataFetch';
// import Caching from './components/Caching';
import SearchText from './components/SearchText';
import { ThemeProvider } from './theme/default_theme';
import { useTheme } from './theme/default_theme';
import CounterRedux from './components/CounterRedux';

function App() {
  const { screen_colors } = useTheme();
  return(
    <ThemeProvider>
      <div style={{backgroundColor: screen_colors, height: '100vh', width: '100vw'}}>
        {/* <SearchText /> */}
        <CounterRedux />
      </div>
    </ThemeProvider>
  );
 
}

export default App;
