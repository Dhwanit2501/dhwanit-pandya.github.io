import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
