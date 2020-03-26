import React, { createContext, useEffect, useState, useContext } from "react";
import axios from "axios";
import useDeckString from "../hooks/useDeckString";
import { UserContext } from "./UserProvider";
import { CollectionContext } from "./CollectionContext";
import { DeckStringProvider } from "./DeckCodeContext";

export const DeckContext = createContext();

export function DeckProvider(props) {
  const [cardsInDeck, setCardsInDeck] = useState([]);
  const [deckLength, setDeckLength] = useState(0);
  const [hero, setHero] = useState({ name: "", id: 7 });
  const [deckName, setDeckName] = useState("New Deck");
  const { userId, setTrigger, trigger } = useContext(UserContext);
  const { decks, setDecks } = useContext(CollectionContext);
  const [deckId, setDeckId] = useState(-1);

  const getDeckString = useDeckString(cardsInDeck, hero);

  const saveDeck = () => {
    let Deck = {
      id: deckId,
      deckcode: getDeckString,
      hero: hero.id,
      format: 1,
      name: deckName
    };
    axios
      .post("http://localhost:8080/deck/save", Deck, {
        headers: {
          "Content-Type": "application/json",
          "user-id": userId
        }
      })
      .then(() => setTrigger(trigger + 1));
  };

  const deleteDeck = deckId => {
    axios.delete(`http://localhost:8080/deck/${deckId}`);
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
        getDeckString,
        deleteDeck,
        deckId,
        setDeckId
      }}
    >
      {props.children}
    </DeckContext.Provider>
  );
}
