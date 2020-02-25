import React from 'react';
import {CardsProvider} from "./Components/CardsContext";


function App() {
    return (
        <CardsProvider>
            <div className="App">
                hello there
            </div>
        </CardsProvider>
    );
}

export default App;
