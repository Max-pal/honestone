import React, { useContext, useState } from "react";
import { DeckContext } from "../DataStore/DeckContext";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
export default function Card(props) {
  const [cardsInDeck, setCardsInDeck] = useContext(DeckContext);
  const { id, image } = props.card;
  const [open, setOpen] = useState(false);
  const [message, setMassage] = useState("");
  const cardSize = {
    height: "395px",
    width: "295px"
  };

  const sameCardsInDeck =
    cardsInDeck.filter(card => card === props.card).length >= 2;

  const noLegendaryCardDuplicate =
    props.card.rarityId === 5 &&
    cardsInDeck.filter(card => card === props.card).length >= 1;

  const isDeckFull = cardsInDeck.length >= 30;

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
            if (sameCardsInDeck || noLegendaryCardDuplicate) {
              setMassage(
                "Reached the maximum number of cards of the this card!"
              );
              setOpen(true);
            } else {
              setCardsInDeck([...cardsInDeck, props.card]);
            }
          } else {
            setMassage("You can have only 30 cards in your deck!");
            setOpen(true);
          }
        }}
        style={cardSize}
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
