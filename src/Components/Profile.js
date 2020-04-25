import React, { useContext } from "react";
import { CollectionContext } from "../DataStore/CollectionContext";
import { heroImages } from "../Components/Header/HeroSelect";
import defaultProfilePic from "../static/images/blankprofilepic.png";
import DeckList from "./DeckList";
import { UserContext } from "../DataStore/UserProvider";
import DeckTable from "./DeckTable";

export default function Profile() {
  const { decks } = useContext(CollectionContext);
  const { username } = useContext(UserContext);

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
        <img
          src="https://media.tenor.com/images/f275448a47b765a8913bd9129325b28b/tenor.gif"
          alt=""
        />
        <div>
          <h2>Name: {username}</h2>
          <h2>
            Registration Date:{" "}
            {new Date().toJSON().slice(0, 10).replace(/-/g, "/")}
          </h2>
        </div>
        <div style={{ textAlign: "center" }}>
          <h3>Favourite Hero:</h3>
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
          <h2>Comments:13</h2>
        </div>
        <div>
          <h2>Votes: 34</h2>
        </div>
      </div>
      <div style={{ textAlign: "-webkit-center" }}>
        <DeckTable title="My Decks" decks={decks} myprofile />
      </div>
    </div>
  );
}
