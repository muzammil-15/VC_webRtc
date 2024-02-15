import { Route, Routes } from "react-router-dom";
import "./App.css";

import Homepage from "./pages/Home";
import Roompage from "./pages/Room";

function App() {

  return (
    <div className="App">

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/room/:roomId" element={<Roompage/>} />
        </Routes>

    </div>
  );
}

export default App;
