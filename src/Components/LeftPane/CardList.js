import React, { useContext, useEffect } from "react";
import { CardsContext } from "../../DataStore/CardsContext";
import { CastSelect } from "../Header/CastSelect";
import CardListed from "./CardListed";
import ManaSlider from "../Header/ManaSlider";

export default function CardList(props) {
  const { cards, setSettings } = useContext(CardsContext);

  useEffect(() => {
    setSettings((currentSettings) => {
      const newSettings = {
        ...currentSettings,
        manaCost: "",
        class: "neutral",
      };
      return newSettings;
    });
  }, [setSettings]);

  return (
    <React.Fragment>
      <CastSelect />
      <ManaSlider />
      {cards && <CardListed cards={props.cards} />}
    </React.Fragment>
  );
}
