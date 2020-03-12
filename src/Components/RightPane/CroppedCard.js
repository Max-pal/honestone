import React, { useContext } from "react";
import { DeckContext } from "../../DataStore/DeckContext";

export default function CroppedCard(props) {
  const [cardsInDeck, setCardsInDeck] = useContext(DeckContext);
  const { id, name, rarityId, manaCost, cropImage, quantity } = props.card;

  const cardRarity = {
    1: "rgba(255,255,255)",
    2: "rgba(194,181,160)",
    3: "rgba(0,0,255)",
    4: "rgba(255,0,255)",
    5: "rgba(255,156,0)"
  };

  const container = {
    position: "relative",
    marginBottom: "5px",
    backgroundColor: "black"
  };

  const nameStyle = {
    position: "absolute",
    top: "35%",
    left: "16%",
    color: "white",
    fontFamily: "system-ui",
    fontSize: "1rem",
    fontStyle: "oblique",
    textShadow: "-2px 0 black, 0 2px black, 2px 0 black, 0 -2px black",
    wordBreak: "break-word",
    fontWeight: "bolder"
  };

  const quantityStyle = {
    position: "absolute",
    top: "0",
    right: "0",
    height: "100%",
    width: "10%",
    color: "white",
    fontFamily: "system-ui",
    fontSize: "30px",
    fontStyle: "oblique",
    textShadow: "-2px 0 black, 0 2px black, 2px 0 black, 0 -2px black",
    wordBreak: "break-word",
    backgroundColor: `${cardRarity[rarityId]}`
  };

  const manaStyle = {
    textShadow: "-2px 0 black, 0 2px black, 2px 0 black, 0 -2px black",
    fontFamily: "system-ui",
    fontStyle: "oblique",
    position: "absolute",
    top: "0",
    left: "0",
    fontSize: "30px",
    color: "white",
    backgroundColor: "#0277BD",
    height: "100%",
    width: "30px"
  };

  const imageStyle = {
    backgroundImage: `linear-gradient(90deg, rgba(0,0,0,1) 15%, rgba(0,0,0,0) 50%), url(${cropImage})`,
    width: "100%",
    height: "50px"
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
