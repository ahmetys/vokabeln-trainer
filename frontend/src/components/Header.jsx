import { useUser, useUserDispatch } from "../context/UserContext";

function Header() {
  const dispatch = useUserDispatch();
  const isLoggedIn = useUser();
  const logout = () => {
    dispatch({
      type: "logout",
    });
  };
  return (
    <div className="bg-primary p-2 text-white border-bottom border-secondary fixed-top rounded-bottom-1 d-flex justify-content-between">
      <h1 className="m-0">Vokabeln Trainer</h1>
      <div className="d-flex justify-content-between align-items-center">
        {isLoggedIn && <p className="my-0 mx-2">user</p>}
        {isLoggedIn && <i onClick={logout} className="bi fs-4 bi-box-arrow-right d-flex align-items-center" role="button"></i>}
      </div>
    </div>
  );
}

export default Header;
