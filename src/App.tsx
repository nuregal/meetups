import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";
import { handleLocalStorage } from "./data/eventsData";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [attenting, setAttenting] = useState([]);
  const [isUpdated, setIsUpdated] = useState(false);

  useEffect(() => {
    const data = handleLocalStorage.load();
    const attending = data.filter(({ attend }: any) => attend === true);
    setCount(attending.length);
    setAttenting(attending)
  }, [isUpdated]);

  const updateCount = (): void => {
    setIsUpdated(!isUpdated);
  };

  return (
    <div className="App">
      <Header count={count} attending={attenting}/>
      <Main updateCount={updateCount} />
    </div>
  );
}

export default App;
