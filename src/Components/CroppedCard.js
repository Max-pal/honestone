import React, { useContext } from "react";
import { DeckContext } from "../DataStore/DeckContext";

export default function Card(props) {
  const [cardsInDeck, setCardsInDeck] = useContext(DeckContext);
  return cardsInDeck ? (
    <div>
      {cardsInDeck.map((image) => (
        <img src={image.cropImage} alt='' />
      ))}
    </div>
  ) : (
    <h2>a</h2>
  );
}
