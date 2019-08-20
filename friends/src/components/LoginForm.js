import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import axios from 'axios';

const LoginForm = props => {
    const [name, setName] = useState({
      username: "",
      password: ""
    });
    const changeHandler = event => {
      event.preventDefault();
      setName({ ...name, [event.target.name]: event.target.value });
    };
    const handleSubmit = event => {
      event.preventDefault();
    };
    const login = e => {
      e.preventDefault();
      axios
      .post("http://localhost:5000/api/login", name)
      .then(res => {
          console.log(res)
        localStorage.setItem("token", res.data.payload);
      })
      .catch(err => console.log(err.response));
        props.history.push("/protected");
    };

    return (
        <div>
            <form onSubmit={event => handleSubmit(event)} onKeyDown={props.closeLoginHandler2} tabIndex="0">
                <h1>Login</h1>
                <p>
                    <label>
                        Username:
                        <input type="text" name="username" onChange={changeHandler} value={name.username} />
                    </label>
                </p>

                <p>
                    <label>
                        Password:
                        <input type="password" name="password" onChange={changeHandler} value={name.password} />
                    </label>
                </p>
                <button onClick={login}>Login!</button>
            </form>
        </div>
  );
};

export default withRouter(LoginForm);
    