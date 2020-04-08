import React, { createContext, useEffect, useState, useContext } from "react";
import useDeckString from "../hooks/useDeckString";
import { UserContext } from "./UserProvider";
import { CollectionContext } from "./CollectionContext";
import { DeckStringProvider } from "./DeckCodeContext";
import getAccessToken from "../getAccessToken";
import { blizzardAPI, honestoneAPI } from "../Components/axiosos";

export const DeckContext = createContext();

export function DeckProvider(props) {
  const [cardsInDeck, setCardsInDeck] = useState([]);
  const [deckLength, setDeckLength] = useState(0);
  const [hero, setHero] = useState({ name: "", id: 7 });
  const [deckName, setDeckName] = useState("New Deck");
  const { userId, setTrigger, trigger } = useContext(UserContext);
  const { decks, setDecks } = useContext(CollectionContext);
  const [deckId, setDeckId] = useState(-1);
  const [published, setPublished] = useState(false);
  const [format, setFormat] = useState(2); // 1 for Wild, 2 for Standard

  const getDeckString = useDeckString(cardsInDeck, hero, format);

  const loadDeck = (deckcode, id, name, heroId) => {
    getAccessToken().then((token) => {
      blizzardAPI
        .get(
          `https://us.api.blizzard.com/hearthstone/deck/${deckcode}?locale=en_US&access_token=${token}`
        )
        .then((json) => {
          setDeckId(id);
          setDeckName(name);
          setHero({
            name: json.data.class.slug,
            id: heroId,
          });

          const cardCount = new Map(
            [...new Set(json.data.cards)].map((x) => [
              x,
              json.data.cards.filter((y) => y.id === x.id).length,
            ])
          );

          const convertedCards = [...uniq(json.data.cards, "id")].map(
            (card) => {
              return { ...card, quantity: cardCount.get(card) };
            }
          );
          setCardsInDeck(convertedCards);
        })
        .catch((e) => console.log(e));
    });
  };

  function uniq(a, param) {
    return a.filter(function (item, pos, array) {
      return (
        array
          .map(function (mapItem) {
            return mapItem[param];
          })
          .indexOf(item[param]) === pos
      );
    });
  }

  const saveDeck = () => {
    let Deck = {
      id: deckId,
      deckcode: getDeckString,
      hero: hero.id,
      format: format,
      name: deckName,
      published: published,
    };
    honestoneAPI
      .post("http://localhost:8080/deck/save", Deck, {
        headers: {
          "Content-Type": "application/json",
          "user-id": userId,
        },
      })
      .then(() => setTrigger(trigger + 1));
  };

  const deleteDeck = (deckId) => {
    honestoneAPI.delete(`http://localhost:8080/deck/${deckId}`);
  };

  useEffect(() => {
    let count = 0;
    cardsInDeck.map((card) => (count += card.quantity));
    setDeckLength(count);
  }, [cardsInDeck]);

  return (
    <DeckContext.Provider
      value={{
        cardsInDeck,
        setCardsInDeck,
        deckLength,
        hero,
        setHero,
        deckName,
        setDeckName,
        saveDeck,
        getDeckString,
        deleteDeck,
        deckId,
        setDeckId,
        format,
        setFormat,
        loadDeck,
        published,
        setPublished,
      }}
    >
      {props.children}
    </DeckContext.Provider>
  );
}
