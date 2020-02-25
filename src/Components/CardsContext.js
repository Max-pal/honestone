import React, {createContext, useEffect, useState} from "react";

export const CardsContext = createContext();

export function CardsProvider(props) {
    const [cards,setCards] = useState(null);
    const [page, setPage] = useState(1);

    useEffect(()=>{
        fetch(`https://us.api.blizzard.com/hearthstone/cards?page=${page}&locale=en_US&access_token=USPm13xg4yD6cbIfPERjjRLIeMVGFNpZSS`)
            .then(response => response.json())
            .then(json => setCards(json.cards))
    },[page]);

    return(
        <CardsContext.Provider value={[cards,setPage,page]}>
            {props.children}
        </CardsContext.Provider>
    )
}