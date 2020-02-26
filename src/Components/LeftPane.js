import React, { useContext } from "react";
import { Route } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import { CardsContext } from "./CardsContext";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import MyDecks from "./MyDecks";
import CardList from "./CardList";

const useStyles = makeStyles((theme) => ({
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

  const { cards } = useContext(CardsContext);

  return (
    <Grid item xs={8}>
      <Paper className={classes.paper}>
        <div>
          <Route path='/' exact component={() => <CardList cards={cards} />} />
          <Route path='/mydecks' component={() => <MyDecks />} />
        </div>
      </Paper>
    </Grid>
  );
}
