import React, {useContext} from 'react';
import {CardsContext} from "./Components/CardsContext";
import {DeckProvider} from "./DataStore/DeckContext";
import CardList from "./Components/CardList";
import {BrowserRouter, Link, Route} from 'react-router-dom';
import MyDecks from "./Components/MyDecks";
import Header from "./Components/Header";


function App() {
    const {cards} = useContext(CardsContext);

    return (
        <BrowserRouter>
            <Header/>
            <Link to="/mydecks">MY DECKS</Link>
            <DeckProvider>
                <div className="App">
                    <Route path="/" exact component={() => <CardList cards={cards}/>}/>
                    <Route path="/mydecks" component={() => <MyDecks/>}/>
                </div>
            </DeckProvider>
        </BrowserRouter>
    )
        ;
}

export default App;
