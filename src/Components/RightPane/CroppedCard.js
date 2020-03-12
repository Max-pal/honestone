import React, { useContext } from "react";
import { DeckContext } from "../../DataStore/DeckContext";

export default function CroppedCard(props) {
  const [cardsInDeck, setCardsInDeck] = useContext(DeckContext);
  const { id, name, rarityId, manaCost, cropImage, quantity } = props.card;

  const cardRarity = {
    1: "rgba(96,125,139, .8)",
    2: "rgba(141,110,99, .9)",
    3: "rgba(2,119,189, .8)",
    4: "rgba(210,20,255, .8)",
    5: "rgba(255,156,20, .8)"
  };

  const container = {
    position: "relative",
    height: "40px",
    backgroundColor: "black"
  };

  const nameStyle = {
    position: "absolute",
    padding: "-3px",
    boxSizing: "border-box",
    top: "35%",
    left: "16%",
    color: "white",
    fontFamily: "system-ui",
    fontSize: "1vmax",
    fontStyle: "oblique",
    fontWeight: "bolder",
    textShadow: "-2px 0 black, 0 2px black, 2px 0 black, 0 -2px black",
    wordBreak: "break-word"
  };

  const quantityStyle = {
    position: "absolute",
    padding: "5px",
    boxSizing: "border-box",
    top: "0",
    right: "0",
    height: "100%",
    width: "10%",
    color: "white",
    backgroundColor: `${cardRarity[rarityId]}`,
    fontFamily: "system-ui",
    fontSize: "3vmin",
    textAlign: "center",
    verticalAlign: "baseline",
    wordBreak: "break-word"
  };

  const manaStyle = {
    position: "absolute",
    padding: "5px",
    boxSizing: "border-box",
    top: "0",
    left: "0",
    height: "100%",
    width: "15%",
    color: "white",
    backgroundColor: "rgba(2,119,189)",
    fontFamily: "system-ui",
    fontSize: "3vmin",
    textAlign: "center",
    verticalAlign: "text-bottom"
  };

  const imageStyle = {
    backgroundImage: `linear-gradient(90deg, rgba(0,0,0,1) 15%, rgba(0,0,0,0) 50%), url(${cropImage})`,
    backgroundPosition: "right",
    width: "100%",
    height: "100%"
  };

  const removeItem = (id) => {
    for (const card of cardsInDeck) {
      if (card.id === id) {
        card.quantity--;
        if (card.quantity === 0) {
          setCardsInDeck(cardsInDeck.filter((card) => card.id !== id));
        } else {
          setCardsInDeck([...cardsInDeck]);
        }
      }
    }
  };

  return (
    <React.Fragment>
      <div
        style={container}
        onClick={() => {
          removeItem(id);
        }}
      >
        <div style={manaStyle}>{manaCost}</div>
        <div style={imageStyle}></div>
        <div style={nameStyle}>{name}</div>
        <div style={quantityStyle}>{quantity}</div>
      </div>
    </React.Fragment>
  );
}
