// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './pages/home';
// import TeacherForm from './components/TeacherForm';
// import StudentForm from './components/StudentForm';
// import Timetable from './components/Timetable';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css'; // Assuming this contains your global CSS

// const App = () => {
//   return (
//     <Router>
//       <div>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/teacher" element={<TeacherForm />} />
//           <Route path="/student" element={<StudentForm />} />
//           <Route path="/timetable/:teacherId" element={<Timetable />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;



//correct---------------------------------------------------------------------------------------------------------------------------------------





// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Home from "./pages/home";
// import TeacherForm from "./components/TeacherForm";
// import StudentForm from "./components/StudentForm";
// import Timetable from "./components/Timetable";
// import TimetablePage from './components/TimetablePage'; // Adjust import path if needed

// import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";

// const App = () => {
//   return (
//     <Router>
//       <div>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/teacher" element={<TeacherForm />} />
//           <Route path="/student" element={<StudentForm />} />
//           <Route path="/timetable/:teacherId" element={<Timetable />} />
//           <Route path="/timetable-page" element={<TimetablePage />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;



// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import ActionAreaCard from './components/ActionAreaCard';
// import TeacherButton from './components/TeacherButton';
// import StudentForm from './components/StudentForm';
// // import other components

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<ActionAreaCard />} />
//         <Route path="/teacher-button" element={<TeacherButton />} />
//         <Route path="/student" element={<StudentForm />} />
//         {/* Add other routes as necessary */}
//       </Routes>
//     </Router>
//   );
// }

// export default App;











import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import TeacherForm from "./components/TeacherForm";
import StudentForm from "./components/StudentForm";
import Timetable from "./components/Timetable";
import TimetablePage from './components/TimetablePage'; // Adjust import path if needed
import TeacherButton from './components/TeacherButton'; // Import TeacherButton component
import TeacherForm2 from "./components/TeacherForm2";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teacher" element={<TeacherForm />} />
          <Route path="/student" element={<StudentForm />} />
          
          <Route path="/timetable-page" element={<TimetablePage />} />
          <Route path="/teacher-button" element={<TeacherButton />} />
          <Route path="/generate-timetable" element={<TeacherForm />} />
          <Route path="/timetable/:teacherId" element={<Timetable />} />
          <Route path="/view-timetable" element={<TeacherForm2 />} />

          {/* Add any other necessary routes here */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
