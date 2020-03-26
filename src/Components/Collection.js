import React, { useContext } from "react";
import Deck from "./Deck";
import { CollectionContext } from "../DataStore/CollectionContext";

const CollectionStyle = {
  margin: `auto`,
  maxWidth: `800px`,
  flexWrap: `wrap`,
  display: `flex`,
  justifyContent: `space-around`
};

export default function Collection() {
  const { decks, setDecks } = useContext(CollectionContext);

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
