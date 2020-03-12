import React, { useContext } from "react";
import CroppedCard from "./CroppedCard";
import { DeckContext } from "../../DataStore/DeckContext";
import { Button } from "@material-ui/core";
import useDeckString from "../../hooks/useDeckString";
import copy from "copy-to-clipboard";
import axios from "axios";
import DeckHeader from "../DeckHeader";

export default function CroppedCardList(props) {
  const { cardsInDeck, deckLength, deckName, hero, setHero } = useContext(
    DeckContext
  );

  const getDeckString = useDeckString(cardsInDeck);

  const saveDeck = () => {
    let Deck = {
      deckcode: getDeckString,
      hero: hero.id,
      format: 1,
      name: deckName,
      userId: 1
    };
    axios.post("http://localhost:8080/deck/save", Deck, {
      headers: {
        "Content-Type": "application/json"
      }
    });
  };

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

      <Button
        style={{ display: "block", margin: "auto" }}
        onClick={() => {
          saveDeck();
        }}
      >
        Save Deck
      </Button>
    </React.Fragment>
  );
}
