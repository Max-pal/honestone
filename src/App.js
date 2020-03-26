import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { CardsProvider } from "./DataStore/CardsContext";
import { DeckProvider } from "./DataStore/DeckContext";
import LeftPane from "./Components/LeftPane/LeftPane";
import RightPane from "./Components/RightPane/RightPane";
import { HeroSelect } from "./Components/Header/HeroSelect";
import Header from "./Components/Header/Header";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import ScrollTop from "./Components/Header/ScrollTop";
import Registry from "./Components/Registry";
import { UserProvider } from "./DataStore/UserProvider";
import { DeckStringProvider } from "./DataStore/DeckCodeContext";
import StartHandSimulator from "./Components/LeftPane/StartHandSimulator";
import Collection from "./Components/Collection";
import { StartHandProvider } from "./DataStore/StartHandContext";
import { CollectionProvider } from "./DataStore/CollectionContext";

function App(props) {
  return (
    <BrowserRouter>
      <CardsProvider>
        <div className='App'>
          <UserProvider>
            <Header />
            <Registry />

            <div>
              <CollectionProvider>
                <DeckProvider>
                  <DeckStringProvider>
                    <Route
                      path='/deckbuilder/heroselect'
                      component={HeroSelect}
                    />
                    <StartHandProvider>
                      <Route
                        path="/handsimulator"
                        component={StartHandSimulator}
                      />
                    </StartHandProvider>

                    <Route path='/collection' component={Collection} />

                    <Grid container direction='row'>
                      <LeftPane />

                      <Route
                        path='/deckbuilder/cardselect'
                        exact
                        component={() => <RightPane position='sticky' />}
                      />
                    </Grid>
                  </DeckStringProvider>
                </DeckProvider>
              </CollectionProvider>
            </div>
          </UserProvider>
        </div>
      </CardsProvider>
      <ScrollTop {...props}>
        <Fab color='secondary' size='large' aria-label='scroll back to top'>
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </BrowserRouter>
  );
}

export default App;
