import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Hero from "./views/Hero";
import About from "./views/About";
import Donate from "./views/Donate";
import Order from "./views/Order";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Hero />
        <About />
        <Donate />
        <Order />
      </Router>
    </div>
  );
}

export default App;
