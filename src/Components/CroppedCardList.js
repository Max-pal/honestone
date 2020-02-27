import React, { useContext } from "react";
import CroppedCard from "./CroppedCard";
import { DeckContext } from "../DataStore/DeckContext";

export default function CroppedCardList(props) {
  const [cardsInDeck] = useContext(DeckContext);

  return (
    <React.Fragment>
      {cardsInDeck &&
        cardsInDeck.map(card => (
          <CroppedCard
            key={card.id}
            croppedImage={card.cropImage}
            name={card.name}
            manaCost={card.manaCost}
          />
        ))}
    </React.Fragment>
  );
}
