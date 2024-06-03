import { useUserDispatch } from "../context/UserContext";

function Header() {
  const dispatch = useUserDispatch();
  const logout = () => {
    dispatch({
      type: "logout",
    });
  };
  return (
    <div className="bg-primary p-2 text-white border-bottom border-secondary fixed-top rounded-bottom-1 d-flex justify-content-between">
      <h1>Vokabeln Trainer</h1>
      <i onClick={logout} className="bi fs-4 bi-box-arrow-right" role="button"></i>
    </div>
  );
}

export default Header;
