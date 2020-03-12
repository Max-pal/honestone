import React, { createContext, useEffect, useState } from "react";

export const DeckContext = createContext();

export function DeckProvider(props) {
  const [cardsInDeck, setCardsInDeck] = useState([]);
  const [deckLength, setDeckLength] = useState(0);
  const [hero, setHero] = useState({ name: "", id: 7 });

  console.log("Context render");
  useEffect(() => {
    let count = 0;
    cardsInDeck.map(card => (count += card.quantity));
    setDeckLength(count);
  }, [cardsInDeck]);

  return (
    <DeckContext.Provider
      value={{ cardsInDeck, setCardsInDeck, deckLength, hero, setHero }}
    >
      {props.children}
    </DeckContext.Provider>
  );
}
