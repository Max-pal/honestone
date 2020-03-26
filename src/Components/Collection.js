import React, { useContext, useEffect } from "react";
import Deck from "./Deck";
import { CollectionContext } from "../DataStore/CollectionContext";
import { DeckContext } from "../DataStore/DeckContext";

export default function Collection() {
  const { decks, setDecks } = useContext(CollectionContext);
  const { setFormat } = useContext(DeckContext);

  useEffect(() => {
    setFormat(2);
  }, [setFormat]);

  return (
    <div style={{ display: "grid" }}>
      {decks.map(deck => (
        <Deck
          name={deck.name}
          heroId={deck.hero}
          deckcode={deck.deckcode}
          id={deck.id}
          setDecks={setDecks}
          decks={decks}
        />
      ))}
    </div>
  );
}
