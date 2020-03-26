import React, { useContext } from "react";
import { DeckContext } from "../DataStore/DeckContext";
import getAccessToken from "../getAccessToken";
import axios from "axios";
import DeleteIcon from "@material-ui/icons/Delete";
import { heroImages } from "./Header/HeroSelect";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

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

export default function Deck(props) {
  const {
    setCardsInDeck,
    setHero,
    setDeckName,
    deleteDeck,
    setDeckId
  } = useContext(DeckContext);
  return (
    <React.Fragment>
      <Link style={{ textDecoration: "none" }} to="/deckbuilder/cardselect">
        <Button>
          <div
            onClick={() => {
              const deckstring = props.deckcode;
              getAccessToken().then(token => {
                axios
                  .get(
                    `https://us.api.blizzard.com/hearthstone/deck/${deckstring}?locale=en_US&access_token=${token}`
                  )
                  .then(json => {
                    setDeckId(props.id);
                    setDeckName(props.name);
                    setHero({
                      name: json.data.class.slug,
                      id: props.heroId
                    });

                    const cardCount = new Map(
                      [...new Set(json.data.cards)].map(x => [
                        x,
                        json.data.cards.filter(y => y.id === x.id).length
                      ])
                    );

                    const convertedCards = [...uniq(json.data.cards, "id")].map(
                      card => {
                        return { ...card, quantity: cardCount.get(card) };
                      }
                    );

                    setCardsInDeck(convertedCards);
                  });
              });
            }}
          >
            {props.name}
          </div>
        </Button>
      </Link>
      <DeleteIcon
        onClick={() => {
          deleteDeck(props.id);
          props.setDecks(props.decks.filter(deck => deck.id !== props.id));
        }}
      />
    </React.Fragment>
  );
}
