import React from 'react';
import './App.css';
import Settings from '../Settings';
// import styled, {css} from 'styled-components'
import AppLayout from './AppLayout'
import AppBar from './AppBar';
import {AppProvider} from './AppProvider';
import Dashboard from '../Dashboard';
// import Async from 'react-async';
import Content from '../Shared/Content';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <AppLayout>
        <AppProvider>
          <AppBar/>
          {/* <Settings/> */}
          <Content>
            <Dashboard/>
          </Content>
        </AppProvider>
      </AppLayout>
    </div>
  );
}

export default App;
