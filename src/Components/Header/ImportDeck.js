import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { DeckCodeContext } from "../../DataStore/DeckCodeContext";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: 200
    }
  }
}));

export function ImportDeck() {
  const { setDeckString } = useContext(DeckCodeContext);
  const classes = useStyles();

  return (
    <TextField
      id="filled-basic"
      label="Deck String"
      variant="filled"
      onChange={e => setDeckString(e.target.value)}
    />
  );
}
