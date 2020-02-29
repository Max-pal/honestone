import { encode, decode, FormatType } from "deckstrings";

export default function(deck) {
  let convertedCards = [];
  deck.map(card => convertedCards.push([card.id, card.quantity]));
  console.log(convertedCards);
  const convertedDeck = {
    cards: convertedCards, // [dbfid, count] pairs
    heroes: [7], // Garrosh Hellscream
    format: FormatType.FT_WILD // or 1 for Wild, 2 for Standard
  };

  const deckstring = encode(convertedDeck);
  return deckstring;
}
