function Login() {
  const handleLogin = (e) => {
    e.preventDefault();
    console.log(e.target.username.value);
  };
  return (
    <div>
      <h1>Einloggen</h1>
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Benutzername
          </label>
          <input type="text" className="form-control" id="username" name="username" placeholder="Benutzername" />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Kennwort
          </label>
          <input type="text" className="form-control" id="password" name="password" placeholder="Kennwort" />
        </div>
        <button type="submit" className="btn btn-primary">
          Einloggen
        </button>
      </form>
    </div>
  );
}

export default Login;
