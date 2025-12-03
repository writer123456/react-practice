
import './App.css';
import React from 'react';
// import Counter from './components/Counter';
// import DataFetch from './components/DataFetch';
// import Caching from './components/Caching';
import SearchText from './components/SearchText';
import { ThemeProvider } from './theme/default_theme';
import { useTheme } from './theme/default_theme';
import CounterRedux from './components/CounterRedux';
import Previous from './components/Previous';
import AddListItem from './components/AddListItem';
import './components/AddListItem.css';
import AllItemList from './components/AllItemList';

function App() {
  const { screen_colors } = useTheme();
  return(
    <ThemeProvider>
      <div style={{backgroundColor: screen_colors, height: '100vh', width: '100vw'}}>
        {/* <SearchText /> */}
        {/* <CounterRedux /> */}
        {/* <Previous /> */}
        <AddListItem />
        <AllItemList />
      </div>
    </ThemeProvider>
  );
 
}

export default App;
