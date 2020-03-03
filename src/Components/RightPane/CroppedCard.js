import React, { useContext } from "react";
import { DeckContext } from "../../DataStore/DeckContext";
import DeleteIcon from "@material-ui/icons/Delete";

export default function CroppedCard(props) {
  const [cardsInDeck, setCardsInDeck] = useContext(DeckContext);

  const container = {
    position: "relative",
    marginBottom: "5px"
  };

  const nameStyle = {
    position: "absolute",
    top: "28%",
    left: "26%",
    color: "white",
    fontFamily: "URW Chancery L, cursive",
    fontSize: "1.5rem",
    fontStyle: "oblique",
    textShadow: "-2px 0 black, 0 2px black, 2px 0 black, 0 -2px black",
    wordBreak: "break-word",
    fontWeight: "bolder"
  };

  const manaCrystalStyle = {
    position: "absolute",
    top: "-7px",
    left: "-20px",
    height: "90px",
    width: "90px"
  };

  const manaStyle = {
    textShadow: "-2px 0 black, 0 2px black, 2px 0 black, 0 -2px black",
    fontFamily: "URW Chancery L, cursive",
    fontStyle: "oblique",
    position: "absolute",
    left: "12px",
    fontSize: "60px",
    color: "white"
  };

  const croppedImageStyle = {
    width: "100%",
    maxWidth: "100%",
    borderRadius: "20px 10px 10px 20px"
  };

  const removeStyle = {
    color: "white",
    position: "absolute",
    top: "0",
    right: "0",
    height: "18px"
  };

  const removeItem = id => {
    for (const card of cardsInDeck) {
      if (card.id === id) {
        card.quantity--;
        if (card.quantity === 0) {
          setCardsInDeck(cardsInDeck.filter(card => card.id !== id));
        } else {
          setCardsInDeck([...cardsInDeck]);
        }
      }
    }
  };

  return (
    <React.Fragment>
      <div style={container}>
        <div>
          <img
            style={manaCrystalStyle}
            src="https://joust.hearthsim.net/branches/master/assets/images/mana_crystal.png"
            alt=""
          />
          <div style={manaStyle}>{props.card.manaCost}</div>
        </div>
        <div>
          <img style={croppedImageStyle} src={props.card.cropImage} alt="" />
        </div>
        <div style={nameStyle}>
          {props.card.name} x{props.card.quantity}
        </div>
        <DeleteIcon
          onClick={() => {
            removeItem(props.card.id);
          }}
          style={removeStyle}
          alt=""
        />
      </div>
    </React.Fragment>
  );
}
