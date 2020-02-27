import React, { useContext } from "react";
import { CardsContext } from "./CardsContext";
import { CastSelect } from "./CastSelect";
import CardListed from "./CardListed";

export default function CardList(props) {
  const { cards, setPage, page, pageCount } = useContext(CardsContext);

  return (
    <React.Fragment>
      <CastSelect />
      <h2>Page: {page}</h2>
      {cards && <CardListed cards={props.cards} />}

      <button
        onClick={() => {
          if (page <= 1) setPage(pageCount);
          else setPage(page - 1);
        }}
      >
        prev page
      </button>
      <button
        onClick={() => {
          if (page >= pageCount) setPage(1);
          else setPage(page + 1);
        }}
      >
        next page
      </button>
    </React.Fragment>
  );
}
