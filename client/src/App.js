import "./App.css";
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import HomePage from "./components/UI/homepage";
import Navbar from "./components/UI/Navbar";
import Login from "./components/Users/Login";
import SignUp from "./components/Users/SignUp";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
