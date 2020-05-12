import React, { createContext, useEffect, useState, useContext } from "react";
import useDeckString from "../hooks/useDeckString";
import { UserContext } from "./UserProvider";
import { CollectionContext } from "./CollectionContext";
import { DeckStringProvider } from "./DeckCodeContext";
import getAccessToken from "../getAccessToken";
import { blizzardAPI, honestoneAPI } from "../Components/axiosos";
import { LoadingContext } from "./LoadingContext";

export const DeckContext = createContext();

export function uniq(a, param) {
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
  const { setLoading } = useContext(LoadingContext);
  const { loadDecks } = useContext(CollectionContext);
  const getDeckString = useDeckString(cardsInDeck, hero, format);

  const loadDeck = (deckcode, id, name, heroId, published) => {
    setLoading(true);
    getAccessToken().then((token) => {
      blizzardAPI
        .get(
          `https://us.api.blizzard.com/hearthstone/deck/${deckcode}?locale=en_US&access_token=${token}`
        )
        .then((json) => {
          setPublished(published);
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
        .then(() => {
          setLoading(false);
        })
        .catch((e) => console.log(e));
    });
  };

  const saveDeck = () => {
    setLoading(true);
    let Deck = {
      id: deckId,
      deckcode: getDeckString,
      hero: hero.id,
      format: format,
      name: deckName,
      published: published,
    };
    honestoneAPI
      .post("https://honestone.herokuapp.com/deck/save", Deck, {
        headers: {
          "user-id": userId,
        },
      })
      .then(() => loadDecks())
      .then(() => setLoading(false));
  };

  const deleteDeck = (deckId) => {
    honestoneAPI.delete(`https://honestone.herokuapp.com/deck/${deckId}`);
  };

  useEffect(() => {
    let count = 0;
    cardsInDeck.map((card) => (count += card.quantity));
    setDeckLength(count);
  }, [cardsInDeck]);

  const handleSwitch = (checked) => {
    honestoneAPI.put("https://honestone.herokuapp.com/deck/published", {
      id: deckId,
      published: checked,
    });
  };

  const getManaCurve = () => {
    let manacurve = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    cardsInDeck.forEach((card) => {
      if (card.manaCost >= 7) {
        manacurve[7] += card.quantity;
      } else manacurve[card.manaCost] += card.quantity;
    });
    return manacurve;
  };

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
        handleSwitch,
        getManaCurve,
      }}
    >
      {props.children}
    </DeckContext.Provider>
  );
}
