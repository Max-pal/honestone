import React, { useState, useContext, createContext, useCallback } from "react";

import { DeckContext } from "./DeckContext";

export const StartHandContext = createContext();

export function StartHandProvider(props) {
  const { cardsInDeck } = useContext(DeckContext);
  const [startHand, setStartHand] = useState([]);

  const generateStartingHand = useCallback(() => {
    let dummyCardsInDeck = JSON.parse(JSON.stringify(cardsInDeck));
    let startHandCards = [];
    while (startHandCards.length < 5) {
      let randomCard =
        dummyCardsInDeck[Math.floor(Math.random() * dummyCardsInDeck.length)];
      if (randomCard.quantity > 0) {
        startHandCards.push(randomCard);
        randomCard.quantity--;
      }
    }
    return startHandCards;
  }, [cardsInDeck]);

  return (
    <StartHandContext.Provider
      value={{ startHand, setStartHand, generateStartingHand }}
    >
      {props.children}
    </StartHandContext.Provider>
  );
}
