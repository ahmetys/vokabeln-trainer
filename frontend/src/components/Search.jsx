import { useEffect, useRef, useState } from "react";
import axios from "axios";
// import SearchIcon from "../assets/svg/SearchIcon";
import ShowAlert from "./ShowAlert";
import Langs from "./Langs";

function Search() {
  const [searchInput, setSearchInput] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState({ showError: false });
  const input = useRef(null);
  useEffect(() => {
    input.current.focus();
  });
  const handleSearchInput = (e) => setSearchInput(e.target.value);
  const handleClick = (searchTerm) => {
    axios
      .post("http://192.168.0.45:3000/", {
        searchTerm: searchTerm,
      })
      .then((response) => {
        console.log(response.data);
        if (response.data?.name === "AxiosError") {
          setResults([]);
          setError({ ...error, showError: true, type: "danger", message: response.data.message });
          setTimeout(() => {
            setError({ ...error, showError: false });
          }, 2000);
        } else {
          setError({ ...error, showError: false });
          setResults(response.data);
        }
        setSearchInput("");
      })
      .catch((error) => {
        alert(error.message);
        console.log(error);
      });
  };
  return (
    <>
      <div className="d-flex justify-content-around my-2">
        <input ref={input} onChange={handleSearchInput} onKeyDown={(e) => e.key === "Enter" && handleClick(searchInput)} type="text" className="form-control" placeholder="Tippe etwas ein und drücke die Taste 'Enter'" value={searchInput} />
        {/* <div className="ms-1" onClick={() => handleClick(searchInput)}>
          <SearchIcon />
        </div> */}
      </div>
      <div className="mb-5 pb-5">
        {error.showError && <ShowAlert type={error.type} message={error.message}></ShowAlert>}
        <Langs langs={results}></Langs>
      </div>
    </>
  );
}

export default Search;
