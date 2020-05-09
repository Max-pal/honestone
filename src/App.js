import React, { useContext } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { CardsProvider } from "./DataStore/CardsContext";
import { DeckProvider } from "./DataStore/DeckContext";
import LeftPane from "./Components/LeftPane/LeftPane";
import RightPane from "./Components/RightPane/RightPane";
import { HeroSelect } from "./Components/Header/HeroSelect";
import Header from "./Components/Header/Header";
import ScrollTop from "./Components/Header/ScrollTop";
import Registry from "./Components/Registry";
import { UserProvider } from "./DataStore/UserProvider";
import { DeckStringProvider } from "./DataStore/DeckCodeContext";
import StartHandSimulator from "./Components/LeftPane/StartHandSimulator";
import Collection from "./Components/Collection";
import { StartHandProvider } from "./DataStore/StartHandContext";
import { CollectionProvider } from "./DataStore/CollectionContext";
import { ProfileProvider } from "./DataStore/ProfileContext";
import Profile from "./Components/Profile";
import Browser from "./Components/Browser";
import { LoadingProvider, LoadingContext } from "./DataStore/LoadingContext";
import LoadingScreen from "react-loading-screen";
import DeckPage from "./Components/DeckPage";
import loadingIcon from "./static/images/loading.png";
import { VoteContext, VoteProvider } from "./DataStore/VoteContext";

function App(props) {
  const { loading } = useContext(LoadingContext);

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
                  <VoteProvider>
                    <DeckStringProvider>
                      <LoadingScreen
                        loading={loading}
                        bgColor='#f1f1f1'
                        spinnerColor='#9ee5f8'
                        textColor='#676767'
                        logoSrc={loadingIcon}
                        text='Loading...'
                      >
                        <Route
                          path='/deckbuilder/heroselect'
                          component={HeroSelect}
                        />
                        <StartHandProvider>
                          <Route
                            path='/handsimulator'
                            component={StartHandSimulator}
                          />
                        </StartHandProvider>
                        <Route
                          exact
                          path='/collection'
                          component={Collection}
                        />
                        <Route exact path='/browser' component={Browser} />
                        <Route exact path='/deckpage' component={DeckPage} />
                        <Grid container direction='row'>
                          <LeftPane />
                          <Route
                            path='/deckbuilder/cardselect'
                            exact
                            component={() => <RightPane position='sticky' />}
                          />
                          <ProfileProvider>
                            <Route
                              path='/profile'
                              exact
                              component={() => <Profile />}
                            />
                          </ProfileProvider>
                        </Grid>
                      </LoadingScreen>
                    </DeckStringProvider>
                  </VoteProvider>
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
