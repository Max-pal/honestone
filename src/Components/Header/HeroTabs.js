import React, { useContext } from "react";
import { CardsContext } from "../../DataStore/CardsContext";
import { HeroContext } from "../../DataStore/HeroContext";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const heroList = [
  "Rogue",
  "Druid",
  "Warrior",
  "Paladin",
  "Warlock",
  "Mage",
  "Priest",
  "Shaman",
  "Hunter"
];
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}
export default function HeroTabs() {
  const [hero] = useContext(HeroContext);
  const { settings, setSettings } = useContext(CardsContext);

  return heroList
    .filter((heroElement) => heroElement === hero)
    .map((chosenHero) => (
      <Tab
        onClick={() => {
          setSettings({ ...settings, class: chosenHero.toLowerCase() });
        }}
        label={chosenHero}
        {...a11yProps(1)}
      />
    ));
}
