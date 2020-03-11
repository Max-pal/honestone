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

const heroImages = [
  { id: 274, img: druid, name: "druid" },
  { id: 31, img: hunter, name: "hunter" },
  { id: 637, img: mage, name: "mage" },
  { id: 671, img: paladin, name: "paladin" },
  { id: 813, img: priest, name: "priest" },
  { id: 930, img: rogue, name: "rogue" },
  { id: 1066, img: shaman, name: "shaman" },
  { id: 893, img: warlock, name: "warlock" },
  { id: 7, img: warrior, name: "warrior" }
];

export function HeroSelect() {
  return (
    <React.Fragment>
      <ImportDeck />
      <React.Fragment>
        {heroImages.map(hero => (
          <Hero
            key={hero.id}
            image={hero.img}
            heroId={hero.id}
            heroName={hero.name}
          />
        ))}
      </React.Fragment>
    </React.Fragment>
  );
}
