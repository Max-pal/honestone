import React, { useContext } from "react";
import Deck from "./Deck";
import { CollectionContext } from "../DataStore/CollectionContext";

export default function Collection() {
  const { decks, setDecks } = useContext(CollectionContext);

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
