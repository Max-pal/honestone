import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { CardsProvider } from "./DataStore/CardsContext";
import { DeckProvider } from "./DataStore/DeckContext";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import ScrollTop from "./Components/Header/ScrollTop";
import DeckBuilder from "./Components/DeckBuilder";
import Registry from "./Components/Registry";
import Header from "./Components/Header/Header";
import { UserProvider } from "./DataStore/UserProvider";

function App(props) {
  return (
    <React.Fragment>
      <BrowserRouter>
        <UserProvider>
          <Header />

          <Registry />
        </UserProvider>
        {/* 
       <DeckProvider>
         <CardsProvider>
           <DeckBuilder />
         </CardsProvider>
       </DeckProvider> */}

        <ScrollTop {...props}>
          <Fab color="secondary" size="large" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
