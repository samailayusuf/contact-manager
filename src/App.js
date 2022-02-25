import NavBar from './NavBar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import About from './About';
import Add from './Add'

function App() {
  return (
    <>
    
        <Routes>
          <Route path="about" element={<About />}/>
          <Route path="add" element={<Add/>} />
          <Route exact path="/" element={<Home />}>
          </Route>
        </Routes>
  
    </>
  );
}

export default App;
