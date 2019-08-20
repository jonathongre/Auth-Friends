import React, { useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

const AddFriend = props => {
    const [name, setName] = useState({
      name: "",
      age: "",
      email: ""
    });
    const changeHandler = event => {
      event.preventDefault();
      setName({ ...name, [event.target.name]: event.target.value });
    };
  
    function addFriend(e) {
      e.preventDefault();
      axiosWithAuth()
        .post("http://localhost:5000/api/friends", name)
        .catch(err => console.log(err.response));
    }
  
    return (
      <div className='loginPage'>
        <form className='loginForm' onSubmit={event => addFriend(event)} onKeyDown={props.closeLoginHandler2} tabIndex="0">
            <h1>Add More Friends</h1>
            <p>Name</p>
            <input type="text" name="name" onChange={changeHandler} value={name.name} />
            <p>Age</p>
            <input type="age" name="age" onChange={changeHandler} value={name.age} />
            <p>Email</p>
            <input type="email" name="email" onChange={changeHandler} value={name.email} />
            <button onClick={addFriend}>Add Friend</button>
        </form>
      </div>
    );
  };
  
  export default AddFriend;