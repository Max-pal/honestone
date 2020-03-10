import React, { useContext } from "react";
import Card from "./Card";
import { CardsContext } from "../../DataStore/CardsContext";
import styled from "styled-components";

export default function CardListed(props) {
  const { cards } = useContext(CardsContext);

  return (
    <React.Fragment>
      {cards &&
        cards
          .filter(card => card.cropImage !== null)
          .map(card => <Card key={card.id} card={card} />)}
    </React.Fragment>
  );
}
