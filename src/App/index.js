import React from 'react';
import './App.css';
import Settings from '../Settings';
// import styled, {css} from 'styled-components'
import AppLayout from './AppLayout'
import AppBar from './AppBar';
import {AppProvider} from './AppProvider';
import Dashboard from '../Dashboard';

function App() {
  return (
    <div>
      <AppLayout>
        <AppProvider>
          <AppBar/>
          <Settings/>
        </AppProvider>
        <Dashboard/>
      </AppLayout>
    </div>
  );
}

export default App;
