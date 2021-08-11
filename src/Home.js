import React, { useState } from "react";
import Forms from "./Forms";

const Home = () => {
  const [state, setState] = useState(false);

  const openmodal = () => {
    setState(true);
    return true;
  };
  return (
    <div className="App">
      <button onClick={() => openmodal()}> Open Modal </button>
      {state && <Forms />}
    </div>
  );
};

export default Home;
