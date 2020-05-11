import React, { createContext, useContext } from "react";
import { honestoneAPI } from "../Components/axiosos";
import { DeckContext } from "./DeckContext";

export const VoteContext = createContext();

export function VoteProvider(props) {
  const { deckId } = useContext(DeckContext);
  const handleVote = (endpoint) => {
    honestoneAPI.post(`https://honestone.herokuapp.com/vote/${endpoint}`, {
      deckId,
    });
  };

  return (
    <VoteContext.Provider value={{ handleVote }}>
      {props.children}
    </VoteContext.Provider>
  );
}
