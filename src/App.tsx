
import './App.css';
import heart from './img/heart.png';


function App() {

function soundPlay(){

  new Audio(`/s.mp3`).play();
}

  return (
    <>
    <img className='heart1' src={heart}></img>
      <button className='textviki' onClick={soundPlay}>Вікторія хоче какать!!!!</button>
      
    </>
  )
}

export default App
