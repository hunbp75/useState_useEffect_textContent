import { useEffect, useState } from "react";
import ClickButtonAlert from "./components/ClickButtonAlert";
import CountButton from "./components/CountButton";
import Planets from "./components/Planets";
import SettingsContext from "./SettingsContext";

function App() {
  const [planets, setPlanets] = useState([]);

  const fetchPlanestApi = (url) => {
    fetch(url).then((res) =>
      res.json().then((data) => {
        setPlanets(data.results);
      })
    );
  };

  useEffect(() => {
    fetchPlanestApi("https://swapi.dev/api/planets");
  }, []);

  return (
    <div className="App">
      <SettingsContext.Provider
        value={{
          planets,
        }}
      >
        <CountButton />
        <ClickButtonAlert />
        <Planets />
      </SettingsContext.Provider>
    </div>
  );
}

export default App;
