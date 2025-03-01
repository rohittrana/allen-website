import { useState } from "react";
import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
  Navigate,
} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Landing from './Components/Landing';
function App() {
  return <>
  <Navbar></Navbar>
  <Landing></Landing>
  </>;
}

export default App;
