import React, { useContext } from "react";
import CroppedCard from "./CroppedCard";
import { DeckContext } from "../../DataStore/DeckContext";
import { Button } from "@material-ui/core";
import useDeckString from "../../hooks/useDeckString";

export default function CroppedCardList(props) {
  const [cardsInDeck, setCardsInDeck, deckLength] = useContext(DeckContext);

  const printDeckString = useDeckString(cardsInDeck);

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
      (card) => (craftingCost += craftingCosts[card.rarityId] * card.quantity)
    );
    return craftingCost;
  };

  return (
    <React.Fragment>
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
              src='https://www.hearthstonetopdecks.com/wp-content/themes/hstd/images/icon-arcane-dust.png'
              alt=''
            />
          </div>
        </div>
      )}
      {deckLength > 0 &&
        cardsInDeck.map((card) => <CroppedCard key={card.id} card={card} />)}
      <Button
        onClick={() => {
          console.log(cardsInDeck);
        }}
      >
        Save Deck
      </Button>
      <Button
        onClick={() => {
          console.log(printDeckString);
        }}
      >
        Copy Deck URL
      </Button>
    </React.Fragment>
  );
}
