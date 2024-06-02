import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Cards from "./pages/Cards";
import Quiz from "./pages/Quiz";
import PrivateRoutes from "./PrivateRoutes";
import PageNotFound from "./pages/PageNotFound";
import { useUser } from "./UserContext";

function AppRoutes() {
  let isLoggedIn = useUser();
  console.log(isLoggedIn);
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route
          path="/"
          element={
            <PrivateRoutes isLoggedIn={isLoggedIn}>
              <Home />
            </PrivateRoutes>
          }
        ></Route>
        <Route
          path="/cards"
          element={
            <PrivateRoutes isLoggedIn={isLoggedIn}>
              <Cards />
            </PrivateRoutes>
          }
        ></Route>
        <Route
          path="/quiz"
          element={
            <PrivateRoutes isLoggedIn={isLoggedIn}>
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
