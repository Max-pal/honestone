import React, { useContext, useState } from "react";
import { DeckContext } from "../../DataStore/DeckContext";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import styled from "styled-components";

function Alert(props) {
  return <MuiAlert elevation={6} variant='filled' {...props} />;
}

const StyledCard = styled.img`
  height: 395px;
  width: 295px;
  cursor: pointer;
  &:hover {
    transform: scale(1.15);
  }
  transition-duration: 0.3s;
`;

export default function Card(props) {
  const [cardsInDeck, setCardsInDeck, deckLength] = useContext(DeckContext);
  const [open, setOpen] = useState(false);
  const [message, setMassage] = useState("");
  const { id, image, rarityId } = props.card;

  const isSameCardsInDeck = () => {
    for (const card of cardsInDeck) {
      if (card.id === id) {
        if (rarityId === 5) {
          return true;
        }
        return card.quantity >= 2;
      }
    }
  };

  const isDeckFull = deckLength >= 30;

  const cardChecker = () => {
    let found = false;
    for (const card of cardsInDeck) {
      if (card.id === id) {
        found = true;
        card.quantity = 2;
        break;
      }
    }
    if (!found) {
      setCardsInDeck([...cardsInDeck, { ...props.card, quantity: 1 }]);
    } else setCardsInDeck([...cardsInDeck]);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <React.Fragment>
      <StyledCard
        className='dummy'
        onClick={() => {
          if (isDeckFull) {
            setMassage("Reached maximum deck size!");
            setOpen(true);
          } else {
            if (isSameCardsInDeck()) {
              setMassage("Reached the maximum number of this card!");
              setOpen(true);
            } else {
              cardChecker();
            }
          }
        }}
        id={id}
        src={image}
        alt=''
      />
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity='error'>
          {message}
        </Alert>
      </Snackbar>
    </React.Fragment>
  );
}
