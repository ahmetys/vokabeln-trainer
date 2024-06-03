import { useUser, useUserDispatch } from "../context/UserContext";
import { Navigate } from "react-router-dom";

function Login() {
  const dispatch = useUserDispatch();
  const isLoggedIn = useUser();
  console.log(isLoggedIn);
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch({ type: "login", payload: { username: e.target.username.value, password: e.target.password.value } });
  };
  if (isLoggedIn) {
    console.log(isLoggedIn);
    return <Navigate to="/" replace></Navigate>;
  }

  return (
    <div>
      <h1>Einloggen</h1>
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Benutzername
          </label>
          <input type="text" className="form-control" id="username" name="username" placeholder="Benutzername" autoComplete="off" />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Kennwort
          </label>
          <input type="password" className="form-control" id="password" name="password" placeholder="Kennwort" />
        </div>
        <button type="submit" className="btn btn-primary">
          Einloggen
        </button>
      </form>
    </div>
  );
}

export default Login;
