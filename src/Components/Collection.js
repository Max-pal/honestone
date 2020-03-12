import React, { useEffect, useState } from "react";
import axios from "axios";
import Deck from "./Deck";

export default function Collection() {
  const [decks, setDecks] = useState([]);

  const getDecksByUserId = () => {
    axios.get("http://localhost:8080/deck/get/1").then(json => {
      setDecks(json.data);
    });
  };

  useEffect(() => {
    getDecksByUserId();
  }, []);

  return (
    <div style={{ display: "grid" }}>
      {decks.map(deck => (
        <Deck name={deck.name} heroId={deck.hero} deckcode={deck.deckcode} />
      ))}
    </div>
  );
}
