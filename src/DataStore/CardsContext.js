import React, { createContext, useEffect, useState } from "react";
import getAccessToken from "../getAccessToken";
import { blizzardAPI } from "../Components/axiosos";

export const CardsContext = createContext();

const serialize = function (obj) {
  var str = [];
  for (var p in obj)
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
  return str.join("&");
};

export function CardsProvider(props) {
  const [cards, setCards] = useState(null);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(null);
  const [settings, setSettings] = useState({
    manaCost: "",
    rarity: "",
    class: "neutral",
    type: "",
    textFilter: "",
  });
  const [wildSets, setWildSets] = useState([]);

  const getWildSets = async () => {
    let allsets = [];
    getAccessToken()
      .then((token) =>
        blizzardAPI.get(
          `https://us.api.blizzard.com/hearthstone/metadata/sets?&locale=en_US&access_token=${token}`
        )
      )
      .then(({ data }) => (allsets = data))
      .then(
        getAccessToken()
          .then((token) =>
            blizzardAPI.get(
              `https://us.api.blizzard.com/hearthstone/metadata/setGroups?&locale=en_US&access_token=${token}`
            )
          )
          .then(({ data }) => {
            let wildSetsSlug = data.filter((set) => set.slug === "wild")[0]
              .cardSets;
            setWildSets(
              allsets
                .filter((set) => wildSetsSlug.includes(set.slug))
                .map((set) => set.id)
            );
          })
      );
  };

  useEffect(() => {
    getWildSets().then(
      getAccessToken().then((token) => {
        fetch(
          `https://us.api.blizzard.com/hearthstone/cards?${serialize(
            settings
          )}&page=${page}&locale=en_US&access_token=${token}`
        )
          .then((response) => response.json())
          .then((json) => {
            setPageCount(json.pageCount);
            setCards(json.cards);
          });
      })
    );
  }, [page, settings]);

  useEffect(() => {
    setPage(1);
  }, [settings]);

  return (
    <CardsContext.Provider
      value={{
        cards,
        setPage,
        page,
        settings,
        setSettings,
        pageCount,
        wildSets,
      }}
    >
      {props.children}
    </CardsContext.Provider>
  );
}
