import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import HomePage from "./components/UI/homepage";

function App() {
  return (
    <div>
      <h1>hello labourer</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<HomePage />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
