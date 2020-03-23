import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DeckContext } from "../DataStore/DeckContext";
import styled from "styled-components";

export default function Hero(props) {
  const { hero, setHero } = useContext(DeckContext);

  const HeroStyle = styled.img`
    transition-duration: 0.2s;
    &:hover {
      transform: scale(1.06);
    }
  `;

  return (
    <Link to="/deckbuilder/cardselect">
      <HeroStyle
        onClick={e => {
          setHero({ name: props.heroName, id: props.heroId });
        }}
        src={props.image}
        alt="..|.."
      />
    </Link>
  );
}
