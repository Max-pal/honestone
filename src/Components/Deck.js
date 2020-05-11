import React, { useContext, useState } from "react";
import { DeckContext } from "../DataStore/DeckContext";
import getAccessToken from "../getAccessToken";
import { heroImages } from "./Header/HeroSelect";
import { Link } from "react-router-dom";
import styled from "styled-components";
import deleteIcon from "../static/logos/X.svg";
import publishedIcon from "../static/images/published.png";
import privateIcon from "../static/images/private.png";
import { honestoneAPI } from "./axiosos";

const DeleteIcon = styled.img`
  position: absolute;
  top: 3px;
  right: 3px;
  opacity: 0.5;
  transform: inherit;
  transition: opacity 0.3s ease-in-out;
  cursor: pointer;
  filter: invert(100%);
  &:hover {
    mix-blend-mode: difference;
    opacity: 1;
  }
`;
const PublishIcon = styled.img`
  width: 14px;
  height: 14px;
  position: absolute;
  top: 3px;
  left: 3px;
  opacity: 0.5;
  transform: inherit;
  transition: opacity 0.3s ease-in-out;
  cursor: pointer;
  filter: invert(100%);
  &:hover {
    mix-blend-mode: difference;
    opacity: 1;
  }
`;

export default function Deck(props) {
  const { deleteDeck, loadDeck } = useContext(DeckContext);
  const [published, setPublished] = useState(props.published);

  const imageSelector = () => {
    return heroImages.filter((hero) => {
      return hero.id === props.heroId;
    });
  };

  const LinkStyle = styled(Link)`
    text-decoration: none;
    transition-duration: 0.25s;
    &:hover {
      transform: scale(1.05);
    }
  `;

  const DeckStyle = styled.div`
    background-image: linear-gradient(
        0deg,
        rgba(0, 0, 0, 1) 5%,
        rgba(0, 0, 0, 0) 50%
      ),
      url(${imageSelector()[0].collectionImg});
    background-size: contain;
    background-repeat: no-repeat;
    height: 92.1px;
    width: 250px;
  `;

  const DeckContainer = styled.div`
    margin: 10px;
    position: relative;
    transition-duration: 0.25s;
    &:hover {
      transform: scale(1.05);
    }
  `;

  return (
    <DeckContainer>
      <LinkStyle
        to="/deckbuilder/cardselect"
        onClick={() => {
          loadDeck(
            props.deckcode,
            props.id,
            props.name,
            props.heroId,
            published
          );
        }}
      >
        <DeckStyle src={imageSelector()[0].collectionImg} alt="..I.." />
        <div
          style={{
            position: "absolute",
            bottom: "0",
            left: "5%",
            color: "white",
          }}
        >
          {props.name}
        </div>
      </LinkStyle>
      <PublishIcon
        src={published ? publishedIcon : privateIcon}
        alt={published ? "published" : "private"}
        onClick={() => {
          honestoneAPI.put(
            "Honestone-env.eba-k4swcanf.eu-central-1.elasticbeanstalk.com/deck/published",
            {
              id: props.id,
              published: !published,
            }
          );
          setPublished(!published);
        }}
      />
      <DeleteIcon
        src={deleteIcon}
        onClick={() => {
          deleteDeck(props.id);
          props.setDecks(props.decks.filter((deck) => deck.id !== props.id));
        }}
      />
    </DeckContainer>
  );
}
