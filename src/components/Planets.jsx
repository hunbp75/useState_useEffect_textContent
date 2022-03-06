import React from "react";
import SettingsContext from "../SettingsContext";
import { useContext } from "react";

const Planets = () => {
  const settingsInfo = useContext(SettingsContext);
  return (
    <div>
      {settingsInfo.planets.map((item) => {
        return (
          <div key={item.name}>
            <p>{item.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Planets;
