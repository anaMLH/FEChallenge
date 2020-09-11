import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'ars-arsenal/style.css';
import {Nav} from 'react-bootstrap'
import { Navigation } from './components/nav/nav'
import { Main } from './components/main/main'
function App() {
  return (
    <div className="App">
        <Navigation></Navigation>
        <Main></Main>
    </div>
  );
}

export default App;
