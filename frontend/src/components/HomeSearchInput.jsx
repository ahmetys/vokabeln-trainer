import { useEffect, useState } from "react";
import axios from "axios";
import HomeTranslationResults from "./HomeTranslationResults";
import SearchIcon from "../assets/svg/SearchIcon";

function HomeSearchInput() {
  const [searchInput, setSearchInput] = useState("");
  const [translation, setTranslation] = useState([]);
  const handleSearchInput = (e) => setSearchInput(e.target.value);
  const handleClick = async (searchTerm) => {
    if (searchTerm.length > 2) {
      await axios
        .post("http://localhost:3000/", {
          searchTerm: searchTerm,
        })
        .then((response) => {
          setTranslation((prev) => (response.data.constructor === Array ? response.data : []));
          setSearchInput("");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      alert("Gib mehr als 2 Character");
    }
  };
  //   useEffect(() => {
  //     console.log(translation);
  //   }, [translation]);
  return (
    <>
      <div className="d-flex justify-content-around my-2">
        <input onChange={handleSearchInput} type="text" className="form-control" placeholder="Tippe etwas ein." value={searchInput} />
        <div className="ms-1" onClick={() => handleClick(searchInput)}>
          <SearchIcon />
        </div>
        {/* <svg onClick={() => handleClick(searchInput)} xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="currentColor" className="bi bi-arrow-right-square-fill text-primary" role="button" viewBox="0 0 16 16">
          <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1" />
        </svg> */}
      </div>

      <HomeTranslationResults translation={translation}></HomeTranslationResults>
    </>
  );
}

export default HomeSearchInput;
