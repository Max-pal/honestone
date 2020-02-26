import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { CardsProvider } from "./Components/CardsContext";
import { DeckProvider } from "./DataStore/DeckContext";
import LeftPane from "./Components/LeftPane";
import RightPane from "./Components/RightPane";

function App() {
  return (
    <BrowserRouter>
      <DeckProvider>
        <CardsProvider>
          <Link to='/mydecks'>MY DECKS</Link>
          <React.Fragment>
            <div className='App'>
              <div>
                <Grid container direction='row' justify='top' alignItems='top'>
                  <LeftPane />
                  <RightPane position='sticky' />
                </Grid>
              </div>
            </div>
          </React.Fragment>
        </CardsProvider>
      </DeckProvider>
    </BrowserRouter>
  );
}

export default App;
