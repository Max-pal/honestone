import React, {createContext, useState} from "react";

export const DeckContext = createContext();

export function DeckProvider(props) {
    const [cardsInDeck,setCardsInDeck] = useState([]);

    return(
        <DeckContext.Provider value={[cardsInDeck,setCardsInDeck]}>
            {props.children}
        </DeckContext.Provider>
    )

}