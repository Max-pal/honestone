import React, {
  useState,
  useContext,
  createContext,
  useEffect,
  useCallback,
} from "react";
import { UserContext } from "./UserProvider";
import { honestoneAPI } from "../Components/axiosos";

export const CollectionContext = createContext();

export function CollectionProvider(props) {
  const [decks, setDecks] = useState([]);
  const { userId, trigger } = useContext(UserContext);

  const loadDecks = useCallback(() => {
    if (userId !== -1) {
      honestoneAPI
        .get(
          `http://Honestone-env.eba-k4swcanf.eu-central-1.elasticbeanstalk.com/deck/get/${userId}`
        )
        .then(({ data }) => {
          setDecks(data);
        });
    }
  }, [userId]);

  return (
    <CollectionContext.Provider value={{ decks, setDecks, loadDecks }}>
      {props.children}
    </CollectionContext.Provider>
  );
}
