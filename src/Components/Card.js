import React, { useContext } from "react";
import { DeckContext } from "../DataStore/DeckContext";

export default function Card(props) {
  const [cardsInDeck, setCardsInDeck] = useContext(DeckContext);
  return (
    <>
      <img
        onClick={() => {
          setCardsInDeck([...cardsInDeck, props.card]);
          console.log(cardsInDeck);
        }}
        id={props.card.id}
        src={props.card.image}
        alt=''
      />
    </>
  );
}
