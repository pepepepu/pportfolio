import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import StartScreen from "../pages/StartScreen";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/start" element={<StartScreen />} />
    </Routes>
  );
};

export default AppRoutes;
