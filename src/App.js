import React from 'react';
import './App.css';
import './components/css/container.css'
import './components/css/container__main.css'
import './components/css/container__header.css'
import './components/css/container__center.css'
import './components/css/cards.css'
import './components/css/scrollbar.css'
import './components/css/container__footer.css'
import './components/css/container__instructions.css'

const App = () => {
  return (
    <div className='App'>
      <div className='container'>
        <div className='container__main'>
          <div className='container__header'>

          </div>
          <div className='container__center'>
            <div className='cards'>

            </div>
            <div className='scrollbar'>

            </div>
          </div>
          <div className='container__footer'>

          </div>
        </div>
        <div className='container__instructions'>

        </div>
      </div>
    </div>
  );
}

export default App;