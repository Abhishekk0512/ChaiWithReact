import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {

  const[counter, setCounter] = useState(15) 

  const addValue = () =>{
    if(counter < 20){
      setCounter(counter+1)
    }else{
      alert('Value cannot go beoynd 20');
    }
    
  }

  const removeValue = () =>{
    if(counter > 0){
      setCounter(counter-1)
    }else{
      alert('Value cannot go below 0');
    }
  }


  return (
    <>
      <button onClick={addValue}>Add Value {counter}</button>
      <br/>
      <button onClick={removeValue}>Remove Value {counter}</button>
    </>
  );
}

export default App;
