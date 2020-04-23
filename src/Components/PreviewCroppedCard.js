import React from "react";

function PreviewCroppedCard(props) {
  const { id, name, rarityId, manaCost, cropImage, quantity } = props.card;

  const cardRarity = {
    1: "rgba(96,125,139, .8)",
    2: "rgba(141,110,99, .9)",
    3: "rgba(2,119,189, .8)",
    4: "rgba(210,20,255, .8)",
    5: "rgba(255,156,20, .8)",
  };

  const card = {
    marginBottom: "1px",
    cursor: "pointer",
    position: "relative",
    height: "25px",
    backgroundColor: "black",
  };

  const nameStyle = {
    position: "absolute",
    padding: "-3px",
    boxSizing: "border-box",
    top: "5%",
    left: "16%",
    color: "white",
    fontFamily: "system-ui",
    fontStyle: "oblique",
    fontWeight: "bolder",
    textShadow: "-2px 0 black, 0 2px black, 2px 0 black, 0 -2px black",
    wordBreak: "break-word",
  };

  const quantityStyle = {
    position: "absolute",
    boxSizing: "border-box",
    top: "0",
    right: "0",
    height: "100%",
    width: "10%",
    color: "white",
    backgroundColor: `${cardRarity[rarityId]}`,
    fontFamily: "system-ui",
    textAlign: "center",
    verticalAlign: "baseline",
    wordBreak: "break-word",
    fontSize: "larger",
  };

  const manaStyle = {
    position: "absolute",
    boxSizing: "border-box",
    top: "0",
    left: "0",
    height: "100%",
    width: "15%",
    color: "white",
    backgroundColor: "rgba(2,119,189)",
    fontFamily: "system-ui",
    textAlign: "center",
    verticalAlign: "text-bottom",
    fontSize: "larger",
  };

  const imageStyle = {
    backgroundImage: `linear-gradient(90deg, rgba(0,0,0,1) 15%, rgba(0,0,0,0) 50%), url(${cropImage})`,
    backgroundPosition: "right",
    width: "100%",
    height: "100%",
  };

  return (
    <div style={card}>
      <div style={manaStyle}>{manaCost}</div>
      <div style={imageStyle}></div>
      <div style={nameStyle}>{name}</div>
      <div style={quantityStyle}>{quantity}</div>
    </div>
  );
}

export default PreviewCroppedCard;
