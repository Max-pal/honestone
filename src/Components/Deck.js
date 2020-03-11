import React, { useContext } from "react";
import { DeckContext } from "../DataStore/DeckContext";

export default function Deck(props) {
  return <div>{props.name}</div>;
}
