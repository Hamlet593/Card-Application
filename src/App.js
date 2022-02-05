import React, {useState} from 'react';
import ContainerHeader from './components/jsx/ContainerHeader';
import Containerfooter from './components/jsx/ContainerFooter';
import ContainerInstructions from './components/jsx/ContainerInstructions';
import CardsList from './components/jsx/CardsList';
import RandomId from './helpers/GenerateID';
import './App.css';
import './components/css/container.css'
import './components/css/container__main.css'
import './components/css/container__center.css'

const App = () => {

  const [cards, setcards] = useState([]);

  return (
    <div className='App'>
      <div className='container'>
        <div className='container__main'>
          <ContainerHeader
            onAdd={() => {
              setcards([
                ...cards,
                {
                  id: RandomId(1, 100)
                }
              ])
            }}
            sortCards={() => {
              setcards([...cards].sort((a, b) => a.id - b.id))
            }}/>
          <div className='container__center'>
            <CardsList cards={cards}/>
          </div>
          <Containerfooter />
        </div>
        <ContainerInstructions />
      </div>
    </div>
  );
}

export default App;