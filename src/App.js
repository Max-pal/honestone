import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { CardsProvider } from "./Components/CardsContext";
import { DeckProvider } from "./DataStore/DeckContext";
import LeftPane from "./Components/LeftPane";
import RightPane from "./Components/RightPane";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import ScrollTop from "./Components/ScrollTop";
import Header from "./Components/Header";

function App(props) {
  return (
    <BrowserRouter>
      <DeckProvider>
        <CardsProvider>
          <React.Fragment>
            <div className="App">
              <Header />
              <div>
                <Grid container direction="row">
                  <LeftPane />
                  <RightPane position="sticky" />
                </Grid>
              </div>
            </div>
          </React.Fragment>
        </CardsProvider>
      </DeckProvider>
      <ScrollTop {...props}>
        <Fab color="secondary" size="large" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </BrowserRouter>
  );
}

export default App;
