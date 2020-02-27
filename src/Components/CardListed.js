import React, { useContext } from "react";
import Card from "./Card";
import { CardsContext } from "./CardsContext";

export default function CardListed(props) {
  const { cards } = useContext(CardsContext);
  return (
    <React.Fragment>
      {cards.map(card => (
        <Card key={card.id} card={card} />
      ))}
    </React.Fragment>
  );
}
