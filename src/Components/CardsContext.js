import React, { createContext, useEffect, useState } from "react";

export const CardsContext = createContext();

const serialize = function(obj) {
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
    rarity: "",
    class: "all",
    type: ""
  });

  useEffect(() => {
    fetch(
      `https://us.api.blizzard.com/hearthstone/cards?${serialize(
        settings
      )}&page=${page}&locale=en_US&access_token=US8DPdzA9eXl72FOKd0zw2EyWOHEFY0bmZ`
    )
      .then((response) => response.json())
      .then((json) => {
        setPageCount(json.pageCount);
        setCards(json.cards);
      });
  }, [page, settings]);

  return (
    <CardsContext.Provider
      value={{ cards, setPage, page, settings, setSettings, pageCount }}
    >
      {props.children}
    </CardsContext.Provider>
  );
}
