import React from 'react';
import './App.css';
import Welcome from './WelcomeMessage'
import styled, {css} from 'styled-components'

const MyButton= styled.button`
  color:green;
  ${props => props.primary && css`
    background: black;
    color: palevioletred;
  `}
`

const TomatoButton = styled(MyButton)`
  color: tomato;
  border-color: tomato;
`;

function App() {
  return (
    <div>
      <Welcome/>
      <MyButton> Hello </MyButton><br></br>
      <MyButton primary> Hello </MyButton><br></br>
      <TomatoButton primary> Hello </TomatoButton><br></br>
    </div>
  );
}

export default App;
