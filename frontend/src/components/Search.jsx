import { useState } from "react";
import axios from "axios";
import SearchIcon from "../assets/svg/SearchIcon";
import ShowAlert from "./ShowAlert";
import Langs from "./Langs";

function Search() {
  const [searchInput, setSearchInput] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState({ showError: false });
  const handleSearchInput = (e) => setSearchInput(e.target.value);
  const handleClick = (searchTerm) => {
    axios
      .post("http://localhost:3000/", {
        searchTerm: searchTerm,
      })
      .then((response) => {
        console.log(response.data);
        if (response.data?.name === "AxiosError") {
          setError({ ...error, showError: true, type: "danger", message: response.data.message });
          setResults([]);
        } else {
          setError({ ...error, showError: false });
          setResults(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div className="d-flex justify-content-around my-2">
        <input onChange={handleSearchInput} type="text" className="form-control" placeholder="Tippe etwas ein." value={searchInput} />
        <div className="ms-1" onClick={() => handleClick(searchInput)}>
          <SearchIcon />
        </div>
      </div>
      <div className="mb-5 pb-5">
        {error.showError && <ShowAlert type={error.type} message={error.message}></ShowAlert>}
        <Langs langs={results}></Langs>
      </div>
    </>
  );
}

export default Search;
