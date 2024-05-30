import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Cards from "./pages/Cards";
import Quiz from "./pages/Quiz";
import PrivateRoutes from "./PrivateRoutes";
import PageNotFound from "./pages/PageNotFound";

function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route
          path="/"
          element={
            <PrivateRoutes isLoggedIn={false}>
              <Home />
            </PrivateRoutes>
          }
        ></Route>
        <Route
          path="/cards"
          element={
            <PrivateRoutes isLoggedIn={false}>
              <Cards />
            </PrivateRoutes>
          }
        ></Route>
        <Route
          path="/quiz"
          element={
            <PrivateRoutes isLoggedIn={false}>
              <Quiz />
            </PrivateRoutes>
          }
        ></Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default AppRoutes;
