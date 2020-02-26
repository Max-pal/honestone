import React, {createContext, useEffect, useState} from "react";

export const DeckContext = createContext();

export function DeckProvider(props) {
    const [cardsInDeck,setCardsInDeck] = useState(localStorage.getItem("deck") || []);

    return(
        <DeckContext.Provider value={[cardsInDeck,setCardsInDeck]}>
            {props.children}
        </DeckContext.Provider>
    )

}