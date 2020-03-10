import React, { createContext, useState } from "react";

export const HeroContext = createContext();

export function HeroProvider(props) {
  const [hero, setHero] = useState({ name: "", id: 7 });

  return (
    <HeroContext.Provider value={[hero, setHero]}>
      {props.children}
    </HeroContext.Provider>
  );
}
