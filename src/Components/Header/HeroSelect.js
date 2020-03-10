import React from "react";
import HeroContext from "../../DataStore/HeroContext";
import Hero from "../Hero";
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
  { id: 2, img: druid, name: "druid" },
  { id: 3, img: hunter, name: "hunter" },
  { id: 4, img: mage, name: "mage" },
  { id: 5, img: paladin, name: "paladin" },
  { id: 6, img: priest, name: "priest" },
  { id: 7, img: rogue, name: "rouge" },
  { id: 8, img: shaman, name: "shaman" },
  { id: 9, img: warlock, name: "warlock" },
  { id: 10, img: warrior, name: "warrior" }
];

export function HeroSelect() {
  return heroImages.map(hero => (
    <Hero
      key={hero.id}
      image={hero.img}
      heroId={hero.id}
      heroName={hero.name}
    />
  ));
}
