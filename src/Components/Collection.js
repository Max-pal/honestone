import React, { useContext, useEffect } from "react";
import Deck from "./Deck";
import { CollectionContext } from "../DataStore/CollectionContext";
import { DeckContext } from "../DataStore/DeckContext";
import { UserContext } from "../DataStore/UserProvider";

const CollectionStyle = {
  margin: `auto`,
  maxWidth: `80vw`,
  flexWrap: `wrap`,
  display: `flex`,
  justifyContent: `flex-start`,
};

export default function Collection() {
  const { decks, setDecks, loadDecks } = useContext(CollectionContext);
  useEffect(() => {
    loadDecks();
  }, [loadDecks]);
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
            published={deck.published}
            setDecks={setDecks}
            decks={decks}
          />
        ))}
      </div>
    </React.Fragment>
  );
}
