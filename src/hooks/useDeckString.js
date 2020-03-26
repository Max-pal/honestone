import { useContext } from "react";
import { encode, FormatType } from "deckstrings";
import { DeckContext } from "../DataStore/DeckContext";

export default function(deck, hero, format) {
  let convertedCards = [];
  deck.map(card => convertedCards.push([card.id, card.quantity]));
  const convertedDeck = {
    cards: convertedCards, // [dbfid, count] pairs
    heroes: [hero.id],
    format: format // or 1 for Wild, 2 for Standard
  };

  const deckstring = encode(convertedDeck);
  return deckstring;
}
