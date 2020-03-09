import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { CardsProvider } from "./DataStore/CardsContext";
import { DeckProvider } from "./DataStore/DeckContext";
import { HeroProvider } from "./DataStore/HeroContext";
import LeftPane from "./Components/LeftPane/LeftPane";
import RightPane from "./Components/RightPane/RightPane";
import { HeroSelect } from "./Components/Header/HeroSelect";
import Header from "./Components/Header/Header";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import ScrollTop from "./Components/Header/ScrollTop";

function App(props) {
  return (
    <BrowserRouter>
      <DeckProvider>
        <CardsProvider>
          <div className='App'>
            <Header />
            <div>
              <HeroProvider>
                <Route path='/builddeck' component={HeroSelect} />
                <Grid container direction='row'>
                  <LeftPane />
                  <RightPane position='sticky' />
                </Grid>
              </HeroProvider>
            </div>
          </div>
        </CardsProvider>
      </DeckProvider>
      <ScrollTop {...props}>
        <Fab color='secondary' size='large' aria-label='scroll back to top'>
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </BrowserRouter>
  );
}

export default App;
