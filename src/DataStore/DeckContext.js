import React, { createContext, useEffect, useState } from "react";

export const DeckContext = createContext();

export function DeckProvider(props) {
  const [cardsInDeck, setCardsInDeck] = useState([]);
  console.log("im rendering");
  useEffect(() => {
    console.log("im using effect");
  }, [cardsInDeck]);

  return (
    <DeckContext.Provider value={[cardsInDeck, setCardsInDeck]}>
      {props.children}
    </DeckContext.Provider>
  );
}
