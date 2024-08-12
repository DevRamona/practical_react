import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import useFetchData from "./Gate";
import UseCustom from "./useCustom";

function App() {
  return (
    <>
      <useFetchData/>
      <UseCustom/>
      
    </>
  );
}

export default App;
