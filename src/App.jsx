import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Login from "./components/Login.jsx";
import Study from "./components/Study.jsx";
import UniCollab from "./components/UniCollab.jsx";
import Default from './components/StudyDefault.jsx'
import { Routes, Route } from "react-router-dom";
import SubjectDetails from './components/SubjectDetails.jsx'

const App = () => {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/login" element={<Login />} />
        <Route path="/unicollab" element={<UniCollab />} />
        <Route path="study" element={<Study />}>
          <Route index element={<Default/>} />
          <Route path=":subjectName" element={<SubjectDetails />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
