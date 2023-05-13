import "./App.css";
import AssignRoles from "./AssignRoles";
import Home from "./Home";
import AddMed from "./AddMed";
import Supply from "./Supply";
import Track from "./Track";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/roles" element={<AssignRoles />} />
          <Route path="/addmed" element={<AddMed />} />
          <Route path="/supply" element={<Supply />} />
          <Route path="/track" element={<Track />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
