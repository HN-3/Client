import React from "react";
import { BrowserRouter } from "react-router-dom";
import ContentsLayout from "./ContentsLayout"
import './App.css'
const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <ContentsLayout></ContentsLayout>
      </BrowserRouter>
    </div>
  );
};

export default App;
