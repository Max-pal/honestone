import React from "react";
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
import shamanDeck from "../../static/images/db-deck-class-shaman.png";
import druidDeck from "../../static/images/db-deck-class-druid.png";
import hunterDeck from "../../static/images/db-deck-class-hunter.png";
import mageDeck from "../../static/images/db-deck-class-mage.png";
import paladinDeck from "../../static/images/db-deck-class-paladin.png";
import priestDeck from "../../static/images/db-deck-class-priest.png";
import warlockDeck from "../../static/images/db-deck-class-warlock.png";
import warriorDeck from "../../static/images/db-deck-class-warrior.png";
import rogueDeck from "../../static/images/db-deck-class-rogue.png";

export const heroImages = [
  { id: 2, img: druid, name: "druid", deckImg: druidDeck },
  { id: 3, img: hunter, name: "hunter", deckImg: hunterDeck },
  { id: 4, img: mage, name: "mage", deckImg: mageDeck },
  { id: 5, img: paladin, name: "paladin", deckImg: paladinDeck },
  { id: 6, img: priest, name: "priest", deckImg: priestDeck },
  { id: 7, img: rogue, name: "rogue", deckImg: rogueDeck },
  { id: 8, img: shaman, name: "shaman", deckImg: shamanDeck },
  { id: 9, img: warlock, name: "warlock", deckImg: warlockDeck },
  { id: 10, img: warrior, name: "warrior", deckImg: warriorDeck }
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
