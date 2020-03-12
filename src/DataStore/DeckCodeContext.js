import React, { useState, useContext, createContext } from "react";

import { DeckContext } from "./DeckContext";

export const DeckCodeContext = createContext();

export function DeckStringProvider(props) {
  const { cardsInDeck, setCardsInDeck } = useContext(DeckContext);
  const [deckString, setDeckString] = useState("");

  return (
    <DeckCodeContext.Provider value={{ setDeckString }}>
      {props.children}
    </DeckCodeContext.Provider>
  );
}
