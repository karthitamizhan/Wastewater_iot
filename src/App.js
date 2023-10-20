import './App.css';
import Location1 from './Location1';
import Location2 from './Location2';
import Location3 from './Location3';
import Login from './Login';
import Navbars from "./Navbars";
import {BrowserRouter,Routes,Route} from "react-router-dom";


function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      <Navbars />
      
<BrowserRouter>
     <Routes>
     <Route path="location1" element={<Location1 />} />
      <Route path="location2" element={<Location2 />} />
      <Route path="location3" element={<Location3 />} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
