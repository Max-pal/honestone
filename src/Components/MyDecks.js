import React, {useContext} from "react";
import {DeckContext} from "../DataStore/DeckContext";
import Card from "./Card";

export default function MyDecks(props) {
    const [cardsInDeck,setCardsInDeck] = useContext(DeckContext);
    return(
        <React.Fragment>{cardsInDeck.map(card => <Card key={card.id} card={card}/>)}</React.Fragment>
    )
}