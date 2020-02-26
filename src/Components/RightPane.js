import React from "react";
import { Route } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import CroppedCardList from "./CroppedCardList";

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

export default function RightPane() {
  const classes = useStyles();

  return (
    <Grid item xs={4}>
      <Paper className={classes.paper}>
        <div>
          <Route path='/' exact component={CroppedCardList} />
        </div>
      </Paper>
    </Grid>
  );
}
