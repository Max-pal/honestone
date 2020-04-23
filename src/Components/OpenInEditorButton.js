import React, { useContext } from "react";
import { Button, Tooltip } from "@material-ui/core";
import { Link } from "react-router-dom";
import { DeckContext } from "../DataStore/DeckContext";
import editIcon from "../static/images/editIcon.png";
function OpenInEditorButton(props) {
  const { loadDeck, hero, deckName, getDeckString } = useContext(DeckContext);
  const iconSize = {
    height: "40px",
    width: "40px",
  };
  return (
    <Link
      to="/deckbuilder/cardselect"
      onClick={() => loadDeck(getDeckString, -1, deckName, hero.id, false)}
    >
      <Tooltip title="Open in Editor" aria-label="edit">
        <Button>
          <img style={iconSize} src={editIcon} alt="Copy Deck String" />
        </Button>
      </Tooltip>
    </Link>
  );
}

export default OpenInEditorButton;
