import React, { useState, useEffect, useContext } from "react";
import { honestoneAPI } from "../Components/axiosos";
import { LoadingContext } from "../DataStore/LoadingContext";
import DeckTable from "./DeckTable";

function Browser() {
  const [decks, setDecks] = useState(null);
  const [recentDecks, setRecentDecks] = useState(null);
  const { setLoading } = useContext(LoadingContext);

  useEffect(() => {
    setLoading(true);
    honestoneAPI
      .get(
        "Honestone-env.eba-k4swcanf.eu-central-1.elasticbeanstalk.com/deck/all-public"
      )
      .then((resp) => setDecks(resp.data))
      .then(() =>
        honestoneAPI
          .get(
            "Honestone-env.eba-k4swcanf.eu-central-1.elasticbeanstalk.com/deck/most-recent/40"
          )
          .then((resp) => setRecentDecks(resp.data))
      )
      .then(() => {
        setLoading(false);
      });
  }, [setLoading]);

  return (
    <React.Fragment>
      <DeckTable title="All Decks" decks={decks} align="left" />
      <DeckTable title="Recent Decks" decks={recentDecks} align="right" />
    </React.Fragment>
  );
}

export default Browser;
