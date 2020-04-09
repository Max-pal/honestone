import React, { useContext } from "react";
import Switch from "@material-ui/core/Switch";
import { DeckContext } from "../DataStore/DeckContext";
import styled from "styled-components";

function PublicSwitch() {
  const { published, setPublished, saveDeck } = useContext(DeckContext);

  const handleChange = (checked) => {
    setPublished(checked);
    saveDeck();
  };

  return (
    <Switch
      checked={published}
      onChange={(e) => handleChange(e.target.checked)}
      color="secondary"
      name="checkedB"
      inputProps={{ "aria-label": "secondary checkbox" }}
    />
  );
}

export default PublicSwitch;
