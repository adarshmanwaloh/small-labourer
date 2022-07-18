

import { useNavigate } from "react-router-dom";
function Navbar(props) {
  let navigate = useNavigate();
  const LoginPage = () => {
    let path = `/login`;
    navigate(path);
  };
  const SignUpPage = () => {
    let path = `/signup`;
    navigate(path);
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          SmallLabour
        </a>
      </div>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <button type="button" onClick={LoginPage} class="btn btn-secondary mx-1">Login</button>
        <button type="button" onClick={SignUpPage} class="btn btn-secondary">Sign UP</button>
      </div>
    </nav>
  );
}

export default Navbar;
