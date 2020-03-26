import React, { useContext } from "react";
import { DeckContext } from "../DataStore/DeckContext";
import getAccessToken from "../getAccessToken";
import axios from "axios";
import { heroImages } from "./Header/HeroSelect";
import { Link } from "react-router-dom";
import styled from "styled-components";
import deleteIcon from "../static/logos/X.svg";

function uniq(a, param) {
  return a.filter(function(item, pos, array) {
    return (
      array
        .map(function(mapItem) {
          return mapItem[param];
        })
        .indexOf(item[param]) === pos
    );
  });
}

const DeleteIcon = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  opacity: 0.8;
`;

const LinkStyle = styled(Link)`
  text-decoration: none;
  transition-duration: 0.25s;
`;

export default function Deck(props) {
  const { setCardsInDeck, setHero, setDeckName, deleteDeck } = useContext(
    DeckContext
  );

  const imageSelector = () => {
    return heroImages.filter((hero) => {
      return hero.id === props.heroId;
    });
  };

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
    &:hover {
      transform: scale(1.05);
    }
  `;

  return (
    <div style={{ position: "relative" }}>
      <DeckStyle src={imageSelector()[0].collectionImg} alt='..I..'>
        <LinkStyle
          to='/deckbuilder/cardselect'
          onClick={() => {
            const deckstring = props.deckcode;
            getAccessToken().then((token) => {
              axios
                .get(
                  `https://us.api.blizzard.com/hearthstone/deck/${deckstring}?locale=en_US&access_token=${token}`
                )
                .then((json) => {
                  setDeckName(props.name);
                  setHero({
                    name: json.data.class.slug,
                    id: props.heroId
                  });

                  const cardCount = new Map(
                    [...new Set(json.data.cards)].map((x) => [
                      x,
                      json.data.cards.filter((y) => y.id === x.id).length
                    ])
                  );

                  const convertedCards = [...uniq(json.data.cards, "id")].map(
                    (card) => {
                      return { ...card, quantity: cardCount.get(card) };
                    }
                  );
                  setCardsInDeck(convertedCards);
                });
            });
          }}
        >
          <div
            style={{
              position: "absolute",
              bottom: "0",
              left: "5%",
              color: "white",
              transform: "inherit"
            }}
          >
            {props.name}
          </div>
        </LinkStyle>
      </DeckStyle>
      <DeleteIcon
        src={deleteIcon}
        onClick={() => {
          deleteDeck(props.id);
          props.setDecks(props.decks.filter((deck) => deck.id !== props.id));
        }}
      />
    </div>
  );
}
