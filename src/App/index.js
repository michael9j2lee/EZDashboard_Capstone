import React from 'react';
import './App.css';
import Settings from '../Settings';
// import styled, {css} from 'styled-components'
import AppLayout from './AppLayout'
import AppBar from './AppBar';
import {AppProvider} from './AppProvider';


// const MyButton= styled.button`
//   color:green;
//   ${props => props.primary && css`
//     background: black;
//     color: palevioletred;
//   `}
// `

// const TomatoButton = styled(MyButton)`
//   color: tomato;
//   border-color: tomato;
// `;

function App() {
  return (
    <div>
      
      <AppLayout>
        <AppProvider>
          <AppBar/>
          <Settings/>
        </AppProvider>

      </AppLayout>
    </div>
  );
}

export default App;
