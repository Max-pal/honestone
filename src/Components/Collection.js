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
  justifyContent: `flex-start`
};

export default function Collection() {
  const { decks, setDecks } = useContext(CollectionContext);
  const { setFormat } = useContext(DeckContext);
  const { trigger } = useContext(UserContext);
  useEffect(() => {
    setFormat(2);
  }, [setFormat, trigger]);

  return (
    <React.Fragment>
      <div style={CollectionStyle}>
        {decks.map(deck => (
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
