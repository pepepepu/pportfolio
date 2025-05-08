import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Projetos from "../pages/Projetos";
import StartScreen from "../pages/StartScreen";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/projetos" element={<Projetos />} />
      <Route path="/start" element={<StartScreen />} />
    </Routes>
  );
};

export default AppRoutes;
