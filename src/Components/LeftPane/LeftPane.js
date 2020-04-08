import React from "react";
import { Route } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import MyDecks from "../Header/MyDecks";
import CardList from "./CardList";
import Collection from "../Collection";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),

    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

export default function LeftPane() {
  const classes = useStyles();

  return (
    <Grid style={{ textAlign: "center" }} item xs={10}>
      <Route
        path="/deckbuilder/cardselect"
        exact
        component={() => <CardList />}
      />
    </Grid>
  );
}
