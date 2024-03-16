import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";

const SignUp = () => {
  const [data, setData] = useState({
    name: "",
    password: "",
    number: "",
    email: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (localStorage.getItem("name") == data.name) {
      alert("You are already signIn");
    } else {
      localStorage.setItem("name", data.name);
      localStorage.setItem("password", data.password);
      localStorage.setItem("number", data.number);
      localStorage.setItem("email", data.email);
      navigate("/");
    }
  };

  const handleChange = (event) => {
    setData({ ...data, [event.target.id]: event.target.value });
  };

  return (
    <>
    <NavBar></NavBar>
      <div className="formbox">
        <form onSubmit={handleSubmit} autoComplete="off">
          <h1>SignUp Form</h1>
          <br />

          <i class="fa-solid fa-user"></i>
          <input
            type="text"
            className="box"
            id="name"
            onChange={handleChange}
            placeholder="Enter Your Name"
          />
          <br />
          <br />

          <i className="fa-solid fa-lock"></i>
          <input
            type="password"
            className="box"
            id="password"
            onChange={handleChange}
            placeholder="Enter Your Password"
          />
          <br />
          <br />

          <i class="fa-solid fa-phone"></i>
          <input
            type="number"
            className="box"
            id="number"
            onChange={handleChange}
            placeholder="Enter Your Number"
          />
          <br />
          <br />

          <i className="fa-solid fa-envelope"></i>
          <input
            type="email"
            className="box"
            id="email"
            onChange={handleChange}
            placeholder="Enter Your Email"
          />
          <br />
          <br />
          <button>Sign up</button>
          <p>
            Already user <Link to="/SignIn">login</Link>
          </p>
          <br />
          <br />
        </form>
      </div>
    </>
  );
};

export default SignUp;
