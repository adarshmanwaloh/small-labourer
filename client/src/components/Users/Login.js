import { useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
const Login = (props) => {
  const navigate=useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const LoginHandler = e => {
    e.preventDefault()
    console.log(" loging in ==========");
    axios
      .post(`http://localhost:3000/users/sign_in`, { email, password })
      .then((res) => {
        console.log(" ============success ========= ")

        console.log(res)
        Cookies.set("userEmail", res.data.email);
        Cookies.set("authToken", res.data.authentication_token);
        localStorage.setItem("userData", JSON.stringify(res.data));
        console.log(" ============success ========= ")

        navigate("/", {
          state: {
            messageStatus: "success",
            message: "User was successfully signed in",
          },
        });
      })
      .catch((err) => {
        console.log(" some error occure ")
        navigate("/login", {
          state: {
            messageStatus: "error",
            message: "User Not found please try again ",
          },
        });
      });
  };
  return (
    <>
      <div>
        <h1>Login</h1>
      </div>
      <div className="container my-5">
        <form onSubmit={LoginHandler}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
