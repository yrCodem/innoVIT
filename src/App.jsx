import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Login from "./components/Login.jsx";
import Study from "./components/Study.jsx";
import UniCollab from "./components/UniCollab.jsx";
import OS from "./components/content/OS.jsx"; 
import Default from './components/content/OpenFile.jsx'
import Dbms from "./components/content/Dbms.jsx"; 
import Linux from './components/content/Linux.jsx'
import { Routes, Route } from "react-router-dom";

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
          <Route path="OS" element={<OS />} />
          <Route path="Dbms" element={<Dbms />} />
          <Route path="Linux" element={<Linux />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
