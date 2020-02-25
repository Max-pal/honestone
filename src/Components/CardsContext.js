import React, {createContext, useContext, useEffect, useState} from "react";

export const CardsContext = createContext();

export function CardsProvider(props) {
    const [cards,setCards] = useState(null);
    useEffect(()=>{
        fetch("https://omgvamp-hearthstone-v1.p.rapidapi.com/cards", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
                "x-rapidapi-key": "11f837687bmsh98f70b23d4ac84dp1a9508jsnebedb4bfd5ff"
            }
        })
            .then(response => response.json())
            .then(json => setCards(json))
    },[]);

    useEffect(()=>{
        if(cards != null ) console.log("cards are loaded")
    },[cards]);

    return(
        <CardsContext.Provider value={[cards]}>
            {props.children}
        </CardsContext.Provider>
    )
}