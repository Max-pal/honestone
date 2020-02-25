import React, {useContext} from 'react';
import {CardsContext} from "./Components/CardsContext";


function App() {
    const [cards, setPage, page] = useContext(CardsContext);

    return (
        <div className="App">
            <h2>Page: {page}</h2>
            {cards && cards.map(card => <img key={card.id} id={card.id} src={card.image} alt=""/>)}

            <button onClick={() => {
                if (page <= 1) setPage(60);
                else setPage(page - 1)
            }}>prev page
            </button>
            <button onClick={() => {
                if (page >= 60) setPage(1);
                else setPage(page + 1)
            }}>next page
            </button>
        </div>

    );
}

export default App;
