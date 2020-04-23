import React, { useContext, useEffect, useState } from "react";
import { CollectionContext } from "../DataStore/CollectionContext";
import { heroImages } from "../Components/Header/HeroSelect";
import defaultProfilePic from "../static/images/blankprofilepic.png";
import DeckList from "./DeckList";
import { UserContext } from "../DataStore/UserProvider";
import { honestoneAPI } from "../Components/axiosos";
import { ProfileContext } from "../DataStore/ProfileContext";

export default function Profile() {
  const { decks } = useContext(CollectionContext);
  const { username } = useContext(UserContext);
  const { profile, getProfileData } = useContext(ProfileContext);

  useEffect(() => {
    getProfileData();
  }, [getProfileData]);

  console.log(profile);

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
        <img src={defaultProfilePic} alt='' />
        <div>
          <h2>{username}</h2>
          <h4>re</h4>
        </div>
        <div style={{ textAlign: "center" }}>
          <h3>Favourite Hero:</h3>
          <img src='' alt='' />
        </div>
      </div>
      <div
        style={{
          textAlign: "center",
          justifyContent: "space-evenly",
          display: "flex",
          flexWrap: "wrap",
        }}
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
