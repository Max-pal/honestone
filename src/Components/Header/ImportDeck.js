import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import getAccessToken from "../../getAccessToken";
import { DeckContext } from "../../DataStore/DeckContext";
import Button from "@material-ui/core/Button";
import { heroImages } from "./HeroSelect";
import FormControl from "@material-ui/core/FormControl";
import { blizzardAPI } from "../axiosos";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

function uniq(a, param) {
  return a.filter(function (item, pos, array) {
    return (
      array
        .map(function (mapItem) {
          return mapItem[param];
        })
        .indexOf(item[param]) === pos
    );
  });
}

export function ImportDeck() {
  const classes = useStyles();
  const { cardsInDeck, setCardsInDeck, setHero } = useContext(DeckContext);
  const [deckString, setDeckString] = useState("");
  console.log("renderelődök éppen :)");

  return (
    <FormControl fullWidth={true}>
      <TextField
        id="filled-basic"
        label="Deck String"
        variant="filled"
        onChange={(e) =>
          e.target.value !== null
            ? setDeckString(e.target.value)
            : setDeckString("")
        }
      />
      <Link to="/deckbuilder/cardselect" style={{ textDecoration: "none" }}>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => {
            console.log("fetched");
            getAccessToken().then((token) => {
              blizzardAPI
                .get(
                  `https://us.api.blizzard.com/hearthstone/deck/${deckString}?locale=en_US&access_token=${token}`
                )
                .then((json) => {
                  setHero({
                    name: json.data.class.slug,
                    id: heroImages.filter(
                      (hero) => hero.name === json.data.class.slug
                    )[0].id,
                  });

                  const cardCount = new Map(
                    [...new Set(json.data.cards)].map((x) => [
                      x,
                      json.data.cards.filter((y) => y.id === x.id).length,
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
          Import Deck
        </Button>
      </Link>
    </FormControl>
  );
}
