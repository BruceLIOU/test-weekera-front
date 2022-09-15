import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = ({ setData, setError }) => {
  const [inputTeamX, setInputTeamX] = useState("");
  const [inputTeamY, setInputTeamY] = useState("");
  const [showErrorInput, setshowErrorInput] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (inputTeamX && inputTeamY) {
      setshowErrorInput(false);
      try {
        const result = await axios.get(
          `http://localhost:3005/af_scores/${inputTeamX}/${inputTeamY}`
        );
        if (result) {
          setData(result.data);
        }
      } catch (error) {
        setError(true);

        console.log(error.message);
      }
    } else {
      setshowErrorInput(true);
    }
  };

  return (
    <div className="cardContainer">
      <div className="title">American football</div>
      <div className="searchScore">
        <div className="team">
          <div className="nameTeam">team X</div>
          <div className="score">
            <input
              type="number"
              name="teamX"
              onChange={(e) => {
                setInputTeamX(e.target.value);
              }}
              value={inputTeamX}
            />
          </div>
        </div>
        <div className="separator"></div>
        <div className="team">
          <div className="nameTeam">team Y</div>
          <div className="score">
            <input
              type="number"
              name="teamY"
              onChange={(e) => {
                setInputTeamY(e.target.value);
              }}
              value={inputTeamY}
            />
          </div>
        </div>
      </div>
      <input
        type="button"
        value="ask possibility to API"
        onClick={handleSubmit}
      />
      {showErrorInput && (
        <div className="errorInput">Les champs doivent être remplis.</div>
      )}
    </div>
  );
};

export default Search;
