import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./SignIn.css";
import NavBar from "./NavBar";

const SignIn = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      localStorage.getItem("password") == data.password &&
      localStorage.getItem("email") == data.email
    ) {
      navigate("/");
    } else {
      alert("Wrong Password or Email ID");
    }
  };

  const handleChange = (event) => {
    event.preventDefault();
    setData({ ...data, [event.target.id]: event.target.value });
  };

  return (
    <>
    <NavBar></NavBar>
    <div className="formbox">
      <form onSubmit={handleSubmit}>
        <h1>SignIn Form</h1>

        <div className="logo">
          <img
            width="100"
            height="100"
            src="https://img.icons8.com/ios-filled/100/user.png"
            alt="user"
          />
        </div>
        <br />

        <i className="fa-solid fa-envelope"></i>
        <input
          type="email"
          id="email"
          value={data.email}
          placeholder="Enter Your Email ID"
          onChange={handleChange}
        />
        <br />
        <br />


        <i className="fa-solid fa-lock"></i>
        <input
          type="password"
          id="password"
          value={data.password}
          placeholder="Enter Your password"
          onChange={handleChange}
        />
        <br />
        <br />

        <button>Login</button>
        <p className="line">
          {" "}
          Don't have an Account <Link to="/SignUp">SignUp</Link>
        </p>
        <br />
        <br />
      </form>
    </div>
    </>
  );
};

export default SignIn;
