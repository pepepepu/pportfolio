import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Projetos from "../pages/Projetos";
import StartScreen from "../pages/StartScreen";
import Projeto01 from "../pages/Projetos/Projeto01";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/start" element={<StartScreen />} />

      <Route path="/projetos" element={<Projetos />} />
      <Route path="/projetos/projeto01" element={<Projeto01 />} />

    </Routes>
  );
};

export default AppRoutes;
