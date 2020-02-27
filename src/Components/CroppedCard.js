import React, { useContext, useEffect } from "react";
import { DeckContext } from "../DataStore/DeckContext";
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

  const asd = {
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
  const removeItem = removedCard => {
    for (let index = 0; index < cardsInDeck.length; index++) {
      const card = cardsInDeck[index];
      if (card.id === removedCard.id) {
        let cards = cardsInDeck;
        cards.splice(index, 1);
        setCardsInDeck(cards);
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
          <div style={manaStyle}>{props.manaCost}</div>
        </div>
        <div>
          <img style={asd} src={props.croppedImage} alt="" />
        </div>
        <div style={nameStyle}>{props.name}</div>
        <DeleteIcon
          onClick={() => {
            removeItem(props.card);
          }}
          style={removeStyle}
          src="https://i.dlpng.com/static/png/6774888_preview.png"
          alt=""
        />
      </div>
    </React.Fragment>
  );
}
