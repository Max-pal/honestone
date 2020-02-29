import React, { useContext, useState } from "react";
import { DeckContext } from "../DataStore/DeckContext";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import transitions from "@material-ui/core/styles/transitions";
import useDeckString from "../hooks/useDeckString";
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
export default function Card(props) {
  const [cardsInDeck, setCardsInDeck, deckLength] = useContext(DeckContext);
  const { id, image } = props.card;
  const [open, setOpen] = useState(false);
  const [message, setMassage] = useState("");
  const cardStyle = {
    height: "395px",
    width: "295px",
    cursor: "pointer"
  };

  function isSameCardsInDeck() {
    for (const card of cardsInDeck) {
      if (card.id === props.card.id) {
        return card.quantity >= 2;
      }
    }
  }

  function isLegendaryInDeck() {
    if (props.card.rarityId === 5) {
      for (const card of cardsInDeck) {
        if (card.id === props.card.id) {
          return true;
        }
      }
    }
  }

  const isDeckFull = deckLength >= 30;

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  return (
    <React.Fragment>
      <img
        onClick={() => {
          if (!isDeckFull) {
            if (isSameCardsInDeck() || isLegendaryInDeck()) {
              setMassage(
                "Reached the maximum number of cards of the this card!"
              );
              setOpen(true);
            } else {
              let found = false;
              for (const card of cardsInDeck) {
                if (card.id === props.card.id) {
                  found = true;
                  card.quantity = 2;
                  break;
                }
              }
              if (!found)
                setCardsInDeck([
                  ...cardsInDeck,
                  { ...props.card, quantity: 1 }
                ]);
              else setCardsInDeck([...cardsInDeck]);
            }
          } else {
            setMassage("You can have only 30 cards in your deck!");
            setOpen(true);
          }
        }}
        style={cardStyle}
        id={id}
        src={image}
        alt=""
      />
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          {message}
        </Alert>
      </Snackbar>
    </React.Fragment>
  );
}
