import React, {useState} from 'react'
import logo from './logo.svg';
import './App.css';

function App() {

  const [count, setCount] = useState(0)
  const addOne = () => {
    setCount(count + Math.PI)
  }
  const minusOne = () => {
    setCount(count - 1)
  }

  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <button onClick={addOne}>Add One</button>
          <button onClick={minusOne}>Subtract One</button>
          <h3>You have clicked {count} times!</h3>
        </p>
      </header>
    </div>
  );
}

export default App;
