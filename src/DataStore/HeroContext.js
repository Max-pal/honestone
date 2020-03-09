import React, { createContext, useState, useEffect } from "react";

export const HeroContext = createContext();

export function HeroProvider(props) {
  const [hero, setHero] = useState("Warrior");

  return (
    <HeroContext.Provider value={[hero, setHero]}>
      {props.children}
    </HeroContext.Provider>
  );
}
