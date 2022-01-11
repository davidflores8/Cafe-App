import './App.css';
import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import LogIn from "./Components/LogIn";
import Register from "./Components/Register";


function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element = {<Register />}></Route>
          <Route path="/Register" element = {<Register />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
