import React from "react";
import Routing from "./Routing";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  return (
    <div>
      <ToastContainer />
      <Routing />
    </div>
  );
};

export default App;
