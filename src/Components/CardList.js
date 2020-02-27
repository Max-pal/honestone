import React, { useContext } from "react";
import { CardsContext } from "./CardsContext";
import { CastSelect } from "./CastSelect";
import CardListed from "./CardListed";
import ManaSlider from "./ManaSlider";

export default function CardList(props) {
  const { cards, page } = useContext(CardsContext);

  return (
    <React.Fragment>
      <CastSelect />
      <ManaSlider />
      <h2>Page: {page}</h2>
      {cards && <CardListed cards={props.cards} />}
    </React.Fragment>
  );
}
