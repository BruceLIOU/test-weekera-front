import { useState } from "react";

import Search from "./components/Search";
import List from "./components/List";

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  return (
    <div className="homeContainer">
      <Search setData={setData} setError={setError} />
      <List data={data} error={error} />
    </div>
  );
}

export default App;
