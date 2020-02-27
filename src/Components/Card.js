import React, { useContext } from "react";
import { DeckContext } from "../DataStore/DeckContext";

export default function Card(props) {
  const [cardsInDeck, setCardsInDeck] = useContext(DeckContext);

  const cardSize = {
    height: "395px",
    width: "295px"
  };
  return (
    <img
      // onClick={() => {
      //   setCardsInDeck([...cardsInDeck, props.card]);
      // }}
      style={cardSize}
      id={props.card.id}
      src={props.card.image}
      alt=""
    />
  );
}
