import React, { useContext } from "react";
import Switch from "@material-ui/core/Switch";
import { DeckContext } from "../DataStore/DeckContext";

function PublicSwitch() {
  const { published, setPublished } = useContext(DeckContext);

  const handleChange = (checked) => {
    setPublished(checked);
  };

  return (
    <Switch
      checked={published}
      onChange={(e) => handleChange(e.target.checked)}
      color="primary"
      name="checkedB"
      inputProps={{ "aria-label": "primary checkbox" }}
    />
  );
}

export default PublicSwitch;
