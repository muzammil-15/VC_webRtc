import { Route, Routes } from "react-router-dom";
import "./App.css";

import Homepage from "./pages/Home";

function App() {
  return (
    <div className="App">

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/path" element={<h1>Hello path</h1>} />
        </Routes>

    </div>
  );
}

export default App;
