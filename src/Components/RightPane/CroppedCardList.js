import React, { useContext, useEffect } from "react";
import CroppedCard from "./CroppedCard";
import { DeckContext } from "../../DataStore/DeckContext";
import { Button } from "@material-ui/core";
import useDeckString from "../../hooks/useDeckString";
import { HeroContext } from "../../DataStore/HeroContext";
import axios from "axios";
import DeckHeader from "../DeckHeader";

export default function CroppedCardList(props) {
  const { cardsInDeck, deckLength, deckName } = useContext(DeckContext);
  const [hero, setHero] = useContext(HeroContext);

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

  return (
    <React.Fragment>
      <DeckHeader />
      {deckLength > 0 && (
        <div style={{ color: `${deckLength >= 30 ? "red" : ""}` }}>
          {deckLength} / 30{" "}
        </div>
      )}
      {deckLength > 0 &&
        cardsInDeck.map(card => (
          <CroppedCard
            key={card.id}
            card={card}
            id={card.id}
            croppedImage={card.cropImage}
            name={card.name}
            manaCost={card.manaCost}
          />
        ))}
      <Button
        style={{ display: "block", margin: "auto" }}
        onClick={() => {
          console.log(getDeckString);
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
