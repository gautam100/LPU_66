import { useState, useEffect } from "react";

function App() {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  function handleCounter1() {
    setCounter1(counter1 + 1);
  }
  function handleCounter2(){
    setCounter2(counter2+1);
  }

  function callOneTime(){
    console.log("Inside callOneTime Function!!!")
  }
  function callOneTimeAgain(){
    console.log("I m inside callOneTimeAgain");
  }
  
  useEffect(()=>{
    callOneTime();
  },[callOneTimeAgain()])
  

  return (
    <>
      <h1>useEffect Hook</h1>
      <button onClick={() => handleCounter1()}>Counter 1</button> {counter1}
      <br /><br />
      <button onClick={() => handleCounter2()}>Counter 2</button> {counter2}
    </>
  );
}

export default App;
