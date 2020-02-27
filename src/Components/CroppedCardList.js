import React, { useContext, useEffect } from "react";
import CroppedCard from "./CroppedCard";
import { DeckContext } from "../DataStore/DeckContext";

export default function CroppedCardList(props) {
  const [cardsInDeck] = useContext(DeckContext);
  return (
    <React.Fragment>
      {cardsInDeck.length > 0 && (
        <div style={{ color: `${cardsInDeck.length >= 30 ? "red" : ""}` }}>
          {cardsInDeck.length} / 30{" "}
        </div>
      )}
      {cardsInDeck.length > 0 &&
        cardsInDeck.map(card => (
          <CroppedCard
            key={card.id}
            card={card}
            id={card.id}
            croppedImage={card.cropImage}
            name={card.name}
            manaCost={card.manaCost}
          />
        ))}
    </React.Fragment>
  );
}
