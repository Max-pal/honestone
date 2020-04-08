import React from "react";
import Hero from "../Hero";
import { ImportDeck } from "./ImportDeck";
import druid from "../../static/images/druid.png";
import hunter from "../../static/images/hunter.png";
import warrior from "../../static/images/warrior.png";
import rogue from "../../static/images/rogue.png";
import priest from "../../static/images/priest.png";
import warlock from "../../static/images/warlock.png";
import mage from "../../static/images/mage.png";
import paladin from "../../static/images/paladin.png";
import shaman from "../../static/images/shaman.png";
import shamanDeck from "../../static/images/db-deck-class-shaman.png";
import druidDeck from "../../static/images/db-deck-class-druid.png";
import hunterDeck from "../../static/images/db-deck-class-hunter.png";
import mageDeck from "../../static/images/db-deck-class-mage.png";
import paladinDeck from "../../static/images/db-deck-class-paladin.png";
import priestDeck from "../../static/images/db-deck-class-priest.png";
import warlockDeck from "../../static/images/db-deck-class-warlock.png";
import warriorDeck from "../../static/images/db-deck-class-warrior.png";
import rogueDeck from "../../static/images/db-deck-class-rogue.png";
import FormatButtons from "../FormatButtons";
import shamanCollection from "../../static/images/db-collection-class-shaman.jpg";
import druidCollection from "../../static/images/db-collection-class-druid.jpg";
import hunterCollection from "../../static/images/db-collection-class-hunter.jpg";
import mageCollection from "../../static/images/db-collection-class-mage.jpg";
import paladinCollection from "../../static/images/db-collection-class-paladin.jpg";
import priestCollection from "../../static/images/db-collection-class-priest.jpg";
import warlockCollection from "../../static/images/db-collection-class-warlock.jpg";
import warriorCollection from "../../static/images/db-collection-class-warrior.jpg";
import rogueCollection from "../../static/images/db-collection-class-rogue.jpg";
import shamanIcon from "../../static/images/class-icon-shaman-sm.png";
import druidIcon from "../../static/images/class-icon-druid-sm.png";
import hunterIcon from "../../static/images/class-icon-hunter-sm.png";
import mageIcon from "../../static/images/class-icon-mage-sm.png";
import paladinIcon from "../../static/images/class-icon-paladin-sm.png";
import priestIcon from "../../static/images/class-icon-priest-sm.png";
import warlockIcon from "../../static/images/class-icon-warlock-sm.png";
import warriorIcon from "../../static/images/class-icon-warrior-sm.png";
import rogueIcon from "../../static/images/class-icon-rogue-sm.png";

export const heroImages = [
  {
    id: 274,
    img: druid,
    name: "druid",
    deckImg: druidDeck,
    collectionImg: druidCollection,
    icon: druidIcon,
  },
  {
    id: 31,
    img: hunter,
    name: "hunter",
    deckImg: hunterDeck,
    collectionImg: hunterCollection,
    icon: hunterIcon,
  },
  {
    id: 637,
    img: mage,
    name: "mage",
    deckImg: mageDeck,
    collectionImg: mageCollection,
    icon: mageIcon,
  },
  {
    id: 671,
    img: paladin,
    name: "paladin",
    deckImg: paladinDeck,
    collectionImg: paladinCollection,
    icon: paladinIcon,
  },
  {
    id: 813,
    img: priest,
    name: "priest",
    deckImg: priestDeck,
    collectionImg: priestCollection,
    icon: priestIcon,
  },
  {
    id: 930,
    img: rogue,
    name: "rogue",
    deckImg: rogueDeck,
    collectionImg: rogueCollection,
    icon: rogueIcon,
  },
  {
    id: 1066,
    img: shaman,
    name: "shaman",
    deckImg: shamanDeck,
    collectionImg: shamanCollection,
    icon: shamanIcon,
  },
  {
    id: 893,
    img: warlock,
    name: "warlock",
    deckImg: warlockDeck,
    collectionImg: warlockCollection,
    icon: warlockIcon,
  },
  {
    id: 7,
    img: warrior,
    name: "warrior",
    deckImg: warriorDeck,
    collectionImg: warriorCollection,
    icon: warriorIcon,
  },
];

export function HeroSelect() {
  return (
    <React.Fragment>
      <ImportDeck />
      <FormatButtons />
      <div
        style={{
          margin: "auto",
          maxWidth: "800px",
          flexWrap: "wrap",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        {heroImages.map((hero) => (
          <Hero
            key={hero.id}
            image={hero.img}
            heroId={hero.id}
            heroName={hero.name}
          />
        ))}
      </div>
    </React.Fragment>
  );
}
