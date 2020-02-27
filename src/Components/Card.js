import React, { useContext } from "react";
import { DeckContext } from "../DataStore/DeckContext";

export default function Card(props) {
  const [cardsInDeck, setCardsInDeck] = useContext(DeckContext);

  const { id, image } = props.card;

  const sameCardsInDeck =
    cardsInDeck.filter((x) => x === props.card).length >= 2;

  const noLegendaryCardDuplicate =
    props.card.rarityId === 5 &&
    cardsInDeck.filter((x) => x === props.card).length >= 1;

  const maxCardsReached = cardsInDeck.length >= 30;

  return (
    <img
      onClick={() => {
        if (sameCardsInDeck || noLegendaryCardDuplicate) {
          alert("Reached maximum number of cards from that type");
        } else if (maxCardsReached) {
          alert("Reached maximum number of cards in a deck");
        } else {
          setCardsInDeck([...cardsInDeck, props.card]);
        }
      }}
      id={id}
      src={image}
      alt=''
    />
  );
}
