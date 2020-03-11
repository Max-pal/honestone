import React, { useContext } from "react";
import { heroImages } from "../Components/Header/HeroSelect";
import { HeroContext } from "../DataStore/HeroContext";
import TextField from "@material-ui/core/TextField";
import { DeckContext } from "../DataStore/DeckContext";
import { withStyles } from "@material-ui/core/styles";
import "../../src/bestcss.css";

const styles = {
  root: {
    background: "black"
  },
  input: {
    color: "white"
  }
};

function DeckHeader() {
  const [hero, setHero] = useContext(HeroContext);
  const { deckName, setDeckName } = useContext(DeckContext);

  return heroImages
    .filter(heroElem => heroElem.id === hero.id)
    .map(heroElem => (
      <div style={{ position: "relative" }}>
        <div
          style={{
            background: `url(${heroElem.deckImg}) right center no-repeat black`,
            backgroundPosition: "right",
            height: "66px"
          }}
        ></div>
        <TextField
          style={{
            position: "absolute",
            top: 0,
            left: 0
          }}
          id="deck-title"
          label={`${heroElem.name.toUpperCase()} DECK`}
          fullWidth
          onChange={e => setDeckName(e.target.value)}
        />
      </div>
    ));
}

export default withStyles(styles)(DeckHeader);
