import React from 'react';
import ContainerHeader from './components/jsx/ContainerHeader';
import Containerfooter from './components/jsx/ContainerFooter';
import ContainerInstructions from './components/jsx/ContainerInstructions';
import Cards from './components/jsx/Cards';
import Scrollbar from './components/jsx/Scrollbar';
import './App.css';
import './components/css/container.css'
import './components/css/container__main.css'
import './components/css/container__center.css'

const App = () => {
  return (
    <div className='App'>
      <div className='container'>
        <div className='container__main'>
          <ContainerHeader />
          <div className='container__center'>
            <Cards />
            <Scrollbar />
          </div>
          <Containerfooter />
        </div>
        <ContainerInstructions />
      </div>
    </div>
  );
}

export default App;