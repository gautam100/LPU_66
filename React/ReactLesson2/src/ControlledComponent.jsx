import React, { useState } from "react";

const ControlledComponent = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  return (
    <>
      <div className="card p-4 m-4">
        <form>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" for="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          &nbsp;
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              setEmail("");
              setPassword("");
            }}
          >
            clear
          </button>
        </form>
      </div>
      <div className="row">
        <div className="col">
          {email}
          <br />
          {password}
        </div>
      </div>
    </>
  );
};

export default ControlledComponent;
