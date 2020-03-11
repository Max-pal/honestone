import React, { useContext, useEffect } from "react";
import CroppedCard from "./CroppedCard";
import { DeckContext } from "../../DataStore/DeckContext";
import { Button } from "@material-ui/core";
import useDeckString from "../../hooks/useDeckString";
import copy from "copy-to-clipboard";

export default function CroppedCardList(props) {
  const { cardsInDeck, deckLength } = useContext(DeckContext);

  const getDeckString = useDeckString(cardsInDeck);

  return (
    <React.Fragment>
      {deckLength > 0 && (
        <div style={{ color: `${deckLength >= 30 ? "red" : ""}` }}>
          {deckLength} / 30{" "}
        </div>
      )}
      {deckLength > 0 &&
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
      <Button
        onClick={() => {
          copy(getDeckString);
        }}
      >
        Copy Deck URL
      </Button>
    </React.Fragment>
  );
}
