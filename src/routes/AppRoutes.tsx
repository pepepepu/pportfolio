import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Projetos from "../pages/Projetos";
import StartScreen from "../pages/StartScreen";
import Projeto01 from "../pages/Projetos/Projeto01";
import Projeto02 from "../pages/Projetos/Projeto02";
import Projeto03 from "../pages/Projetos/Projeto03";
import Projeto04 from "../pages/Projetos/Projeto04";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<StartScreen />} />
      <Route path="/home" element={<Home />} />
      <Route path="/start" element={<StartScreen />} />

      <Route path="/projetos" element={<Projetos />} />
      <Route path="/projeto01" element={<Projeto01 />} />
      <Route path="/projeto02" element={<Projeto02 />} />
      <Route path="/projeto03" element={<Projeto03 />} />
      <Route path="/projeto04" element={<Projeto04 />} />

    </Routes>
  );
};

export default AppRoutes;
