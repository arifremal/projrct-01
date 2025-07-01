import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);
  // let counter = 51
  const addValue = () => {

if(counter< 20){
  setCounter(counter ++)

}
    
  };
  const RValue = () => {

    if (counter >0 ){
   setCounter(counter --)
    }
 
  };

  return (
    <>
      <h1>arif </h1>
      <h2>counter value {counter}</h2>
      <button onClick={addValue}>add value</button>
      <br />
      <br />

      <button onClick={RValue}>remove value</button>
    </>
  );
}

export default App;
