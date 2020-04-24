import React, { useContext } from "react";
import { Button, Tooltip } from "@material-ui/core";
import { DeckContext } from "../DataStore/DeckContext";
import copy from "copy-to-clipboard";
import copyIcon from "../static/images/copyicon.png";

function CopyDeckcodeButton() {
  const { getDeckString } = useContext(DeckContext);

  const iconSize = {
    height: "40px",
    width: "40px",
  };

  return (
    <Tooltip title="Copy to clipboard" aria-label="copy">
      <Button
        onClick={() => {
          copy(getDeckString);
        }}
      >
        <img style={iconSize} src={copyIcon} alt="Copy Deck String" />
      </Button>
    </Tooltip>
  );
}

export default CopyDeckcodeButton;
