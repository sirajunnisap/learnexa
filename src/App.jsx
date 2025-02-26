

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeRoute from './Routes/HomeRoute';
import ArabicRoute from "./Routes/ArabicRoute";
import EnglishRoute from "./Routes/EnglishRoute";
import HindiRoute from "./Routes/HindiRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<HomeRoute />} />
         <Route path="/arabic" element={<ArabicRoute/>} />
         <Route path="/english" element={<EnglishRoute />} />
        <Route path="/hindi" element={<HindiRoute />} />
      </Routes>
    </Router>
  );
}

export default App;
