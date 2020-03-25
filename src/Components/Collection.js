import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import Deck from "./Deck";
import { UserContext } from "../DataStore/UserProvider";

export default function Collection() {
  const [decks, setDecks] = useState([]);
  const { userId } = useContext(UserContext);

  useEffect(() => {
    if (userId !== -1) {
      axios.get(`http://localhost:8080/deck/get/${userId}`).then(({ data }) => {
        setDecks(data);
      });
    }
  }, [userId]);

  return (
    <div style={{ display: "grid" }}>
      {decks.map(deck => (
        <Deck name={deck.name} heroId={deck.hero} deckcode={deck.deckcode} />
      ))}
    </div>
  );
}
