import React, { useState, useEffect, useContext } from "react";
import { honestoneAPI } from "../Components/axiosos";
import { LoadingContext } from "../DataStore/LoadingContext";
import DeckTable from "./DeckTable";
import styled from "styled-components";

function Browser() {
  const [decks, setDecks] = useState(null);
  const [recentDecks, setRecentDecks] = useState(null);
  const { setLoading } = useContext(LoadingContext);

  useEffect(() => {
    setLoading(true);
    honestoneAPI
      .get("https://honestone.herokuapp.com/deck/all-public")
      .then((resp) => setDecks(resp.data))
      .then(() =>
        honestoneAPI
          .get("https://honestone.herokuapp.com/deck/most-recent/40")
          .then((resp) => setRecentDecks(resp.data))
      )
      .then(() => {
        setLoading(false);
      });
  }, [setLoading]);

  const ContainerStyle = styled.div`
    margin: auto;
    max-width: 80%;
    flex-wrap: wrap;
    display: flex;
    justify-content: space-around;
  `;
  return (
    <ContainerStyle>
      <DeckTable title="All Decks" decks={decks} align="left" />
      <DeckTable title="Recent Decks" decks={recentDecks} align="right" />
    </ContainerStyle>
  );
}

export default Browser;
