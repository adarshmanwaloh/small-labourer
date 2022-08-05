import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const SignUp = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [userType, setUserType] = useState();
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  let navigate = useNavigate();
  const { state } = useLocation();
  const formhandler = (e) => {
    e.preventDefault();
    const userType = document.getElementById("exampleInputUsertype1").value;
    console.log(" in the form handler", userType);
    if (password !== passwordConfirmation) {
      console.log("password did not match to each other");
      return 0;
    }
    axios
      .post(`http://localhost:3000/users`, {
        email: email,
        password: password,
        user_type: "1",
      })
      .then((res) => {
        // console.log(res)
        alert("User was successfully created.");
        navigate("/signin", {
          state: {
            messageStatus: "success",
            message:
              "User Successfully created, a confirmation mail is send to you email please click confirm email ",
          },
        });
      })
      .catch((err) => {
        alert("User can't be created due to an error: " + err.data);
      });
  };
  return (
    <>
      <h1>{state.userType}</h1>
      <div className="container my-3">
        <form onSubmit={formhandler}>
          <div className="mb-3 m-2">
            <label
              htmlFor="exampleInputEmail1"
              className="form-label text-dark"
            >
              Email address
            </label>
            <input
              type="email"
              required
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e) => setEmail(e.target.value)}
            />
            <div id="emailHelp" className="form-text ">
              Please enter the Valid email it will verify for further steps !!
            </div>
          </div>
          <div className="mb-3 m-2">
            <label
              htmlFor="exampleInputMobile1"
              className="form-label text-dark"
            >
              Mobile number
            </label>
            <input
              type="tel"
              required
              className="form-control"
              id="exampleInputMobile1"
            />
          </div>
          <div className="mb-3 m-2">
            <label
              htmlFor="exampleInputMobile1"
              className="form-label text-dark"
            >
              userType
            </label>
            <input
              type="tel"
              defaultValue={state.userType}
              className="form-control"
              id="exampleInputUsertype1"
            />
          </div>

          <div className="mb-3 m-2">
            <label
              htmlFor="exampleInputPassword1"
              className="form-label text-dark"
            >
              Password
            </label>
            <input
              type="password"
              required
              className="form-control"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-3 m-2">
            <label
              htmlFor="exampleInputPassword1"
              className="form-label text-dark"
            >
              Password confirmation
            </label>
            <input
              type="password"
              required
              className="form-control"
              id="passwordConfirmation"
              onChange={(e) => setPasswordConfirmation(e.target.value)}
            />
          </div>
          <div className="d-flex m-3 justify-content-center">
            <button type="submit" className="btn btn-primary mx-1 ">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUp;
