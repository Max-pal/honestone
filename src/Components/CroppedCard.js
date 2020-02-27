import React from "react";

export default function CroppedCard(props) {
  const container = {
    position: "relative"
  };

  const nameStyle = {
    position: "absolute",
    top: "50%",
    left: "20%",
    color: "white",
    fontFamily: "URW Chancery L, cursive",
    fontSize: "20px",
    fontStyle: "oblique",
    textShadow: "-2px 0 black, 0 2px black, 2px 0 black, 0 -2px black"
  };

  const manaCrystalStyle = {
    position: "absolute",
    top: "-5px",
    left: "0"
  };

  const manaStyle = {
    position: "absolute",
    left: "30px",
    top: "10px",
    fontSize: "40px",
    color: "white"
  };

  return (
    <React.Fragment>
      <div style={container}>
        <div>
          <img
            style={manaCrystalStyle}
            height="80px"
            width="80px"
            src="https://joust.hearthsim.net/branches/master/assets/images/mana_crystal.png"
            alt=""
          />
          <div style={manaStyle}>{props.manaCost}</div>
        </div>
        <div>
          <img src={props.croppedImage} alt="" />
        </div>
        <div style={nameStyle}>{props.name}</div>
      </div>
    </React.Fragment>
  );
}
