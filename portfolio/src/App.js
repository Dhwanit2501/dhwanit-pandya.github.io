import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import WorkExperience from './Components/WorkExperience';
import Projects from './Components/Projects';

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/WorkExperience" element={<WorkExperience />} />
            <Route path="/Projects" element={<Projects />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
