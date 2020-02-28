import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { CardsContext } from "../../DataStore/CardsContext";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

export function CastSelect(props) {
  console.log("rendering");
  const [value, setValue] = useState(0);
  const { pageCount, page, setPage, settings, setSettings } = useContext(
    CardsContext
  );
  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper
    }
  }));
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" id="back-to-top-anchor">
        <Tabs
          onChange={handleChange}
          value={value}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="simple tabs example"
        >
          <Tab
            onClick={() => setSettings({ ...settings, class: "neutral" })}
            label="Neutral"
            {...a11yProps(0)}
          />
          <Tab
            onClick={() => setSettings({ ...settings, class: "rogue" })}
            label="Rogue"
            {...a11yProps(1)}
          />
          <Tab
            onClick={() => setSettings({ ...settings, class: "druid" })}
            label="Druid"
            {...a11yProps(2)}
          />
          <Tab
            onClick={() => setSettings({ ...settings, class: "warrior" })}
            label="Warrior"
            {...a11yProps(3)}
          />
          <Tab
            onClick={() => setSettings({ ...settings, class: "paladin" })}
            label="Paladin"
            {...a11yProps(4)}
          />
          <Tab
            onClick={() => setSettings({ ...settings, class: "warlock" })}
            label="Warlock"
            {...a11yProps(5)}
          />
          <Tab
            onClick={() => setSettings({ ...settings, class: "mage" })}
            label="Mage"
            {...a11yProps(6)}
          />
          <Tab
            onClick={() => setSettings({ ...settings, class: "priest" })}
            label="Priest"
            {...a11yProps(7)}
          />
          <Tab
            onClick={() => setSettings({ ...settings, class: "shaman" })}
            label="Shaman"
            {...a11yProps(8)}
          />
          <Tab
            onClick={() => setSettings({ ...settings, class: "hunter" })}
            label="Hunter"
            {...a11yProps(9)}
          />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} />
      <TabPanel value={value} index={1} />
      <TabPanel value={value} index={2} />
      <TabPanel value={value} index={3} />
      <TabPanel value={value} index={4} />
      <TabPanel value={value} index={5} />
      <TabPanel value={value} index={6} />
      <TabPanel value={value} index={7} />
      <TabPanel value={value} index={8} />
      <TabPanel value={value} index={9} />
      <div>
        <Button
          style={{ float: "left" }}
          onClick={() => {
            if (page <= 1) setPage(pageCount);
            else setPage(page - 1);
          }}
          variant="outlined"
          color="primary"
        >
          Previous Page
        </Button>

        <Button
          style={{ float: "right" }}
          variant="outlined"
          color="primary"
          onClick={() => {
            if (page >= pageCount) setPage(1);
            else setPage(page + 1);
          }}
        >
          Next Page
        </Button>
      </div>
    </div>
  );
}
