import React, { createContext, useEffect, useState } from "react";

export const DeckContext = createContext();

export function DeckProvider(props) {
  const [cardsInDeck, setCardsInDeck] = useState([]);
  useEffect(() => {}, [cardsInDeck]);

  return (
    <DeckContext.Provider value={[cardsInDeck, setCardsInDeck]}>
      {props.children}
    </DeckContext.Provider>
  );
}
