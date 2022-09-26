import React, {useState} from "react";

import Search from "./components/Search";
import List from "./components/List";

const App = ()=> {
  const [data, setData] = useState<{teamX: string, teamY:string}[]>([])
  const [error, setError] = useState<boolean>(false)

  return (
    <div className="homeContainer">
      <Search setData={setData} setError={setError} />
      <List data={data} error={error} />
    </div>
  );
}

export default App;
