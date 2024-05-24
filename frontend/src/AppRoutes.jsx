import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Cards from "./pages/Cards";
import Quiz from "./pages/Quiz";

function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cards" element={<Cards />}></Route>
        <Route path="/quiz" element={<Quiz />}></Route>
      </Routes>
    </>
  );
}

export default AppRoutes;
