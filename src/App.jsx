// import "./App.scss";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import HomeRoute from "./Routes/home";
// import ArabicRoute from "./Routes/arabic";
// import EnglishRoute from "./Routes/english";
// import HindiRoute from "./Routes/hindi";
// // import ContactRoute from "./Routes/contact";
// // import AboutRoute from "./Routes/about";
// // import FeaturesRoute from "./Routes/features";
// // import MethodRoute from "./Routes/method";
// // import CoursesRoute from "./Routes/courses";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/*" element={<HomeRoute />} />
//         {/* <Route path="/arabic" element={<ArabicRoute />} />
//         <Route path="/english" element={<EnglishRoute />} />
//         <Route path="/hindi" element={<HindiRoute />} />
//         <Route path="/contact" element={<ContactRoute />} />
//         <Route path="/about" element={<AboutRoute />} />
//         <Route path="/courses" element={<CoursesRoute />} />
//         <Route path="/features" element={<FeaturesRoute />} />
//         <Route path="/method" element={<MethodRoute />} /> */}
//       </Routes>
//     </Router>
//   );
// }

// export default App;

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
