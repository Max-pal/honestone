import React, { useContext, useEffect } from "react";
import CroppedCard from "./CroppedCard";
import { DeckContext } from "../../DataStore/DeckContext";
import { Button } from "@material-ui/core";
import copy from "copy-to-clipboard";
import DeckHeader from "../DeckHeader";
import { Link } from "react-router-dom";

export default function CroppedCardList(props) {
  const {
    cardsInDeck,
    deckLength,
    getDeckString,
    saveDeck,
    setCardsInDeck
  } = useContext(DeckContext);

  const dustIconStyle = {
    float: "right",
    paddingLeft: "4px",
    paddingRight: "4px"
  };

  const craftingCosts = {
    1: 40,
    2: 0,
    3: 100,
    4: 400,
    5: 1600
  };

  const calculateCraftingCost = () => {
    let craftingCost = 0;
    cardsInDeck.map(
      card => (craftingCost += craftingCosts[card.rarityId] * card.quantity)
    );
    return craftingCost;
  };

  useEffect(() => {
    setCardsInDeck([]);
  }, [setCardsInDeck]);
  return (
    <React.Fragment>
      <DeckHeader />
      {deckLength > 0 && (
        <div style={{ display: `flow-root` }}>
          <div
            style={{
              float: `left`,
              color: `${deckLength >= 30 ? "red" : ""}`
            }}
          >
            {deckLength} / 30
          </div>
          <div style={{ float: `right` }}>
            {calculateCraftingCost()}
            <img
              style={dustIconStyle}
              src="https://www.hearthstonetopdecks.com/wp-content/themes/hstd/images/icon-arcane-dust.png"
              alt=""
            />
          </div>
        </div>
      )}

      {deckLength > 0 &&
        cardsInDeck.map(card => <CroppedCard key={card.id} card={card} />)}

      <Button
        style={{ display: "block", margin: "auto" }}
        onClick={() => {
          copy(getDeckString);
        }}
      >
        Copy Deck URL
      </Button>

      <Link style={{ color: "#fff" }} to="/collection" underline="none">
        <Button
          style={{ display: "block", margin: "auto" }}
          onClick={() => {
            saveDeck();
          }}
        >
          Save Deck
        </Button>
      </Link>
    </React.Fragment>
  );
}
