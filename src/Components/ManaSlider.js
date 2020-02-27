import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import { CardsContext } from "./CardsContext";

const useStyles = makeStyles(theme => ({
  root: {
    width: 300
  },
  margin: {
    height: theme.spacing(3)
  }
}));

const marks = [
  {
    value: "-1",
    label: "All"
  },
  {
    value: 0,
    label: "0"
  },
  {
    value: 1,
    label: "1"
  },
  {
    value: 2,
    label: "2"
  },
  {
    value: 3,
    label: "3"
  },
  {
    value: 4,
    label: "4"
  },
  {
    value: 5,
    label: "5"
  },
  {
    value: 6,
    label: "6"
  },
  {
    value: 7,
    label: "7+"
  }
];

function valuetext(value) {
  return `${marks[value + 1].label}`;
}

export default function ManaSlider() {
  const classes = useStyles();
  const { settings, setSettings } = useContext(CardsContext);
  const style = {
    margin: "auto"
  };
  return (
    <div style={style} className={classes.root}>
      <Typography id="discrete-slider" gutterBottom>
        Mana Cost
      </Typography>
      <Slider
        onChangeCommitted={(e, value) => {
          if (value === -1) value = "";
          else if (value === 7) value = [7, 100];
          setSettings({ ...settings, manaCost: value });
        }}
        defaultValue={-1}
        getAriaValueText={valuetext}
        valueLabelFormat={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={1}
        marks={marks}
        min={-1}
        max={7}
      />
    </div>
  );
}
