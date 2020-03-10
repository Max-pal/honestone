import { useContext } from "react";
import { encode, FormatType } from "deckstrings";
import { HeroContext } from "../DataStore/HeroContext";

export default function(deck) {
  const [hero, setHero] = useContext(HeroContext);
  let convertedCards = [];
  deck.map(card => convertedCards.push([card.id, card.quantity]));
  const convertedDeck = {
    cards: convertedCards, // [dbfid, count] pairs
    heroes: [hero.id],
    format: FormatType.FT_WILD // or 1 for Wild, 2 for Standard
  };

  const deckstring = encode(convertedDeck);
  return deckstring;
}
