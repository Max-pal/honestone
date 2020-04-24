import React, { useContext, useEffect, useCallback } from "react";
import Card from "./Card";
import { CardsContext } from "../../DataStore/CardsContext";
import { DeckContext } from "../../DataStore/DeckContext";

export default function CardListed(props) {
  const { cards, wildSets } = useContext(CardsContext);
  const { format } = useContext(DeckContext);

  return (
    <React.Fragment>
      {cards &&
        cards
          .filter(
            (card) =>
              (card.cropImage !== null &&
                format === 1 &&
                wildSets.includes(card.cardSetId)) ||
              card.cardSetId === 2 ||
              card.cardSetId === 3
          )
          .map((card) => <Card key={card.id} card={card} />)}
    </React.Fragment>
  );
}
