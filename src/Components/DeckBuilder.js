import React from "react";
import LeftPane from "./LeftPane/LeftPane";
import RightPane from "./RightPane/RightPane";
import { Grid } from "@material-ui/core";
import Header from "./Header/Header";

export default function DeckBuilder() {
  return (
    <div className="App">
      <Grid container direction="row">
        <LeftPane />
        <RightPane position="sticky" />
      </Grid>
    </div>
  );
}
