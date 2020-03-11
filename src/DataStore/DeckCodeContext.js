import React, { useState, useContext, useEffect, createContext } from "react";
import getAccessToken from "../getAccessToken";
import { DeckContext } from "./DeckContext";
import axios from "axios";

export const DeckCodeContext = createContext();

export function DeckStringProvider(props) {
  const { cardsInDeck, setCardsInDeck } = useContext(DeckContext);
  const [deckString, setDeckString] = useState("");

  useEffect(() => {
    console.log("fetched");
    getAccessToken().then(token => {
      axios
        .get(
          `https://us.api.blizzard.com/hearthstone/deck/${deckString}?locale=en_US&access_token=${token}`
        )
        .then(json => {
          json.data.cards.map(importedCard => {
            let found = false;
            for (const card of cardsInDeck) {
              if (card.id === importedCard.id) {
                found = true;
                card.quantity = 2;
                break;
              }
            }
            if (!found)
              setCardsInDeck([
                ...cardsInDeck,
                { ...importedCard, quantity: 1 }
              ]);
            else setCardsInDeck([...cardsInDeck]);
          });
        });
    });
  }, [cardsInDeck, deckString, setCardsInDeck]);

  return (
    <DeckCodeContext.Provider value={{ setDeckString }}>
      {props.children}
    </DeckCodeContext.Provider>
  );
}
