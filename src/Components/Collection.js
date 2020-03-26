import React, { useContext, useEffect } from "react";
import Deck from "./Deck";
import { CollectionContext } from "../DataStore/CollectionContext";
import { DeckContext } from "../DataStore/DeckContext";

const CollectionStyle = {
  margin: `auto`,
  maxWidth: `800px`,
  flexWrap: `wrap`,
  display: `flex`,
  justifyContent: `space-around`
};

export default function Collection() {
  const { decks, setDecks } = useContext(CollectionContext);
  const { setFormat } = useContext(DeckContext);

  useEffect(() => {
    setFormat(2);
  }, [setFormat]);

  return (
    <React.Fragment>
      <div style={CollectionStyle}>
        {decks.map((deck) => (
          <Deck
            key={deck.id}
            name={deck.name}
            heroId={deck.hero}
            deckcode={deck.deckcode}
            id={deck.id}
            setDecks={setDecks}
            decks={decks}
          />
        ))}
      </div>
    </React.Fragment>
  );
}
