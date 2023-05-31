import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home"
import Result from "./components/Result"






function App() {
  return (
  
    <Router>
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/id" element={<Result />} />
      </Routes>
    </div>
  </Router>
)}

export default App;
