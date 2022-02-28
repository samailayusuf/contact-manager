import { Routes, Route } from "react-router-dom";
import  {ContactsProvider} from './context/ContactsContext'
import Home from './Home';
import About from './About';
import Add from './Add'

function App() {
  return (
    <>
    <ContactsProvider>
        <Routes>
          <Route path="about" element={<About />}/>
          <Route path="add" element={<Add/>} />
          <Route exact path="/" element={<Home />}>
          </Route>
        </Routes>
    </ContactsProvider>
  
    </>
  );
}

export default App;
