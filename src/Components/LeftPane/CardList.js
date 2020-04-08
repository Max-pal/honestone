import React, { useContext } from "react";
import { CardsContext } from "../../DataStore/CardsContext";
import { CastSelect } from "../Header/CastSelect";
import CardListed from "./CardListed";
import ManaSlider from "../Header/ManaSlider";

export default function CardList(props) {
  const { cards, page } = useContext(CardsContext);

  return (
    <React.Fragment>
      <CastSelect />
      <ManaSlider />
      {cards && <CardListed cards={props.cards} />}
    </React.Fragment>
  );
}
