import axios from "axios";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function AddUser() {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    
    name: "",
    username: "",
    email: "",
  });
  // const unique_id = uuid();
  // const small_id = unique_id.slice(0,8)
  const { name, username, email } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const onSubmit = async (e) => {
    e.preventDefault(); //before use priventDefault +=> we click on submit button there is a garbage path in a tital bar after using this there is not any garbage path forms
    await axios.post("http://localhost:8080/user/", user);
    navigate("/");
  };
  return (
    <div className="container">
      <div className="row">
        <div className=" col-md-6 offset-md-3 rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4"> Register User</h2>
          <form onSubmit={(e) => onSubmit(e)}>

            <div className="mb-3">
              <label htmlFor="Name" className="from-label">
                name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Your Name"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
              ></input>
            </div>
            <div className="mb-3">
              <label htmlFor="username" className="from-label">
                Username
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={(e) => onInputChange(e)}
              ></input>
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="from-label">
                Email
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Email"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              ></input>
            </div>
            <button type="sumit" className=" btn btn-outline-primary">
              Submit
            </button>
            <Link  className=" btn btn-outline-danger m-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
