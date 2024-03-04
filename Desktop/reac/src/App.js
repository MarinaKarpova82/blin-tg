import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
const tg = window.Telegram.WebApp;

/* useEffect( () => {
tg.ready();
}, []) */

const onClose = () => {
tg.close()
}
function App() {
  return (
    <div className="App">
     нихуя себе
     <button onClick={onClose}>уйти</button>
    </div>
  );
}

export default App;
