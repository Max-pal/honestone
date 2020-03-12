import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import getAccessToken from "../../getAccessToken";
import { DeckContext } from "../../DataStore/DeckContext";
import axios from "axios";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: 200
    }
  }
}));

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

export function ImportDeck() {
  const classes = useStyles();
  const { cardsInDeck, setCardsInDeck } = useContext(DeckContext);
  console.log("renderelődök éppen :)");
  return (
    <TextField
      id="filled-basic"
      label="Deck String"
      variant="filled"
      onChange={e => {
        const deckstring = e.target.value;
        console.log("fetched");
        getAccessToken().then(token => {
          axios
            .get(
              `https://us.api.blizzard.com/hearthstone/deck/${deckstring}?locale=en_US&access_token=${token}`
            )
            .then(json => {
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
    />
  );
}
