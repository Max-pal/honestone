import React, { useContext } from "react";
import { CollectionContext } from "../DataStore/CollectionContext";
import { heroImages } from "../Components/Header/HeroSelect";
import defaultProfilePic from "../static/images/blankprofilepic.png";
import DeckList from "./DeckList";
import { UserContext } from "../DataStore/UserProvider";

export default function Profile() {
  const { decks } = useContext(CollectionContext);
  const { username } = useContext(UserContext);

  const sadBoi = () => {
    let heroCount = new Map();
    decks.map((deck) =>
      heroCount.has(deck.hero)
        ? heroCount.set(deck.hero, heroCount.get(deck.hero) + 1)
        : heroCount.set(deck.hero, 0)
    );
    let favouriteHeroId = heroCount.keys(Math.max(heroCount.values))[0];
    return heroImages.filter((hero) => {
      return hero.id === favouriteHeroId;
    });
  };

  return (
    <div
      style={{
        margin: "auto",
        position: "relative",
        width: "90%",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <img src={defaultProfilePic} alt="" />
        <div>
          <h2>Name: {username}</h2>
          <h2>Registration Date: registryDate</h2>
        </div>
        <div style={{ textAlign: "center" }}>
          <h3>Favourite Hero:</h3>
          <img src={sadBoi()} alt="" />
        </div>
      </div>
      <div
        style={{
          textAlign: "center",
          justifyContent: "space-evenly",
          display: "flex",
          flexWrap: "wrap",
        }}
        f
      >
        <div
          style={{
            display: "inline-block",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h2>#Decks: {decks.length}</h2>
        </div>
        <div>
          <h2>Comments:0</h2>
        </div>
        <div>
          <h2>Votes: 0</h2>
        </div>
      </div>
      <div style={{ textAlign: "-webkit-center" }}>
        <DeckList />
      </div>
    </div>
  );
}
