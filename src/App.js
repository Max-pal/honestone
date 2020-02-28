import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { CardsProvider } from "./DataStore/CardsContext";
import { DeckProvider } from "./DataStore/DeckContext";
import LeftPane from "./Components/LeftPane/LeftPane";
import RightPane from "./Components/RightPane/RightPane";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import ScrollTop from "./Components/Header/ScrollTop";
import Header from "./Components/Header/Header";

function App(props) {
  return (
    <Router>
      <DeckProvider>
        <CardsProvider>
          <div className='App'>
            <Header />
            <div>
              <Grid container direction='row'>
                <LeftPane />
                <RightPane position='sticky' />
              </Grid>
            </div>
          </div>
        </CardsProvider>
      </DeckProvider>
      <ScrollTop {...props}>
        <Fab color='secondary' size='large' aria-label='scroll back to top'>
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </Router>
  );
}

export default App;
