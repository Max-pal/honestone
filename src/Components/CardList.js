import React, { useContext } from "react";
import { CardsContext } from "./CardsContext";
import Card from "./Card";
import {CastSelect} from "./CastSelect";

export default function CardList(props) {
    const {setPage,page,pageCount} = useContext(CardsContext);

    return (
        <React.Fragment>
            <CastSelect/>
            <h2>Page: {page}</h2>
            {props.cards && props.cards.map(card => <Card key={card.id} card={card}/>)};

            <button onClick={() => {
                if (page <= 1) setPage(pageCount);
                else setPage(page - 1)
            }}>prev page
            </button>

            <button onClick={() => {
                if (page >= pageCount) setPage(1);
                else setPage(page + 1)
            }}>next page
            </button>
        </React.Fragment>
    )
}
