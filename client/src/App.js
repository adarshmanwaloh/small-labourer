import "./App.css";
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import HomePage from "./components/UI/homepage";
import Navbar from "./components/UI/Navbar";
import Login from "./components/Users/Login";
import SignUp from "./components/Users/SignUp";
import CustomerForm from "./components/Users/Form/CustomerForm";
import LabourerForm from "./components/Users/Form/LabourerForm";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/CustomerLogin" element={<CustomerForm />}></Route>
          <Route path="/LabourLogin" element={<LabourerForm />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
