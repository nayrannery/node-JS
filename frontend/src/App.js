import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
  const[counter,setCounter] = useState(0);
   function increment(){
    setCounter(counter+1);
    console.log(counter)
  }

  return (
    <div className="App">
      <div>
      contador:{counter}
      </div>
    
    <button onClick={increment}>incremento</button>
    </div>
  );
}

export default App;
