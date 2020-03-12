import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DeckContext } from "../DataStore/DeckContext";

export default function Hero(props) {
  const { hero, setHero } = useContext(DeckContext);

  return (
    <Link to="/deckbuilder/cardselect">
      <img
        onClick={e => {
          setHero({ name: props.heroName, id: props.heroId });
        }}
        src={props.image}
        alt="..|.."
      />
    </Link>
  );
}
