import { useRef } from "react";

const UncontrolledComponent = () => {
  const userRef = useRef();
  const pwdRef = useRef();

  const handleForm = (event) =>{
    event.preventDefault();
    let user = document.querySelector("#user").value;
    let pwd = document.querySelector("#password").value;
    console.log(user,pwd);
  }

  const handleFormRef = (event) =>{
    event.preventDefault();
    const user = userRef.current.value;
    const pwd = pwdRef.current.value;
    console.log(user,pwd);
    document.querySelector("#result_container").innerHTML = "Entered value is: "+user+"  "+pwd;
  }


  return (
    <>
      <u><h1>Uncontrolled component through useRef</h1></u>

      <form action="" method="post" onSubmit={handleForm}>
        <input type="text" id="user" placeholder="Enter User Name" />
        <br /><br />
        <input type="password" id="password" placeholder="Enter Password" />
        <br /><br />
        <button>Submit</button>
      </form>
      
      <hr />
      
      <h1>UseRef</h1>
      <form action="" method="post" onSubmit={handleFormRef}>
        <input type="text" ref={userRef} id="userRef" placeholder="Enter User Name" />
        <br /><br />
        <input type="password" ref={pwdRef} id="passwordRef" placeholder="Enter Password" />
        <br /><br />
        <button>Submit with useRef</button>
        <div id="result_container"></div>
      </form>

    </>
  );
};

export default UncontrolledComponent;