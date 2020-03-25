import React, { createContext, useEffect, useState, useContext } from "react";
import axios from "axios";
import useDeckString from "../hooks/useDeckString";
import { UserContext } from "./UserProvider";

export const DeckContext = createContext();

export function DeckProvider(props) {
  const [cardsInDeck, setCardsInDeck] = useState([]);
  const [deckLength, setDeckLength] = useState(0);
  const [hero, setHero] = useState({ name: "", id: 7 });
  const [deckName, setDeckName] = useState("New Deck");
  const { userId } = useContext(UserContext);

  const getDeckString = useDeckString(cardsInDeck, hero);

  const saveDeck = () => {
    console.log(userId);
    let Deck = {
      deckcode: getDeckString,
      hero: hero.id,
      format: 1,
      name: deckName
    };
    axios.post("http://localhost:8080/deck/save", Deck, {
      headers: {
        "Content-Type": "application/json",
        "user-id": userId
      }
    });
  };

  useEffect(() => {
    let count = 0;
    cardsInDeck.map(card => (count += card.quantity));
    setDeckLength(count);
  }, [cardsInDeck]);

  return (
    <DeckContext.Provider
      value={{
        cardsInDeck,
        setCardsInDeck,
        deckLength,
        hero,
        setHero,
        deckName,
        setDeckName,
        saveDeck,
        getDeckString
      }}
    >
      {props.children}
    </DeckContext.Provider>
  );
}
