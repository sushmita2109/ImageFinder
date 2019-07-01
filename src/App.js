import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from './Component/navbar/NavBar';
import Search from './Component/search/Search';

import './App.css';

function App() {
  return (
    <MuiThemeProvider>
      <div>
        <NavBar/>
        <Search/>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
