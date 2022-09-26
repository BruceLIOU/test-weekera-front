import React, { useState, FormEvent, ChangeEvent, useRef } from "react";
import axios from "axios";

const Search = ({ setData, setError }:any) => {
  const [inputTeamX, setInputTeamX] = useState<number>();
  const [inputTeamY, setInputTeamY] = useState<number>();
  const [showErrorInput, setshowErrorInput] = useState(false);

  const inputRefX = useRef<HTMLInputElement>(null);
  const inputRefY = useRef<HTMLInputElement>(null);

  const handleChangeX = (e: { target: HTMLInputElement }) => {
    const value = (e.target as HTMLInputElement).value;
    setInputTeamX(Number(value));
    
  };

  const handleChangeY = (e: ChangeEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement).value;
    setInputTeamY(Number(value));
  };

  const handleSubmit = async (e: FormEvent<HTMLInputElement>) => {
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
      } catch (error:any){
        console.log(error.message);
        setError(true);
      }
    } else {
      setshowErrorInput(true);
    }
  };

  return (
    <div className="cardContainer">
      <form>
      <div className="title">American football</div>
      <div className="searchScore">
        
        <div className="team">
          <div className="nameTeam">team X</div>
          <div className="score">
            <input
            ref={inputRefX}
              type="number"
              name="teamX"
              onChange={handleChangeX}
              value={inputTeamX}
            />
          </div>
        </div>
        <div className="separator"></div>
        <div className="team">
          <div className="nameTeam">team Y</div>
          <div className="score">
            <input
            ref={inputRefY}
              type="number"
              name="teamY"
              onChange={handleChangeY}
              value={inputTeamY}
            />
          </div>
        </div>
      </div>
      <input
        type="submit"
        value="ask possibility to API"
        onClick={handleSubmit}
      />
      {showErrorInput && (
        <div className="errorInput">Les champs doivent être remplis.</div>
      )}
      </form>
    </div>
  );
};

export default Search;
