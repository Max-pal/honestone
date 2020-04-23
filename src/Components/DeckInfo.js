import React from "react";
import { Typography } from "@material-ui/core";

function DeckInfo(props) {
  const craftingCosts = {
    1: 40,
    2: 0,
    3: 100,
    4: 400,
    5: 1600,
  };

  const calculateCraftingCost = () => {
    let craftingCost = 0;
    props.cardsInDeck.map(
      (card) => (craftingCost += craftingCosts[card.rarityId] * card.quantity)
    );
    return craftingCost;
  };

  const dustIconStyle = {
    float: "right",
    paddingLeft: "4px",
    paddingRight: "4px",
  };
  const textStyle = {
    background:
      "linear-gradient(0deg, rgb(18, 37, 107) 9%, rgba(3, 0, 237, 0.48) 100%)",
    borderRadius: "8px 8px 0 0",
    color: "white",
    padding: "3px",
  };
  return (
    <React.Fragment>
      <div style={textStyle}>
        <span>{props.format === 2 ? "Standard" : "Wild"}</span>
        <span style={{ float: "right" }}>
          {calculateCraftingCost()}
          <img
            style={dustIconStyle}
            src="https://www.hearthstonetopdecks.com/wp-content/themes/hstd/images/icon-arcane-dust.png"
            alt=""
          />
        </span>
      </div>
    </React.Fragment>
  );
}

export default DeckInfo;
