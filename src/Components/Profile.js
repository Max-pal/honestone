import React, { useContext, useEffect } from "react";
import defaultProfilePic from "../static/images/blankprofilepic.png";
import DeckTable, { getDate } from "./DeckTable";
import { CollectionContext } from "../DataStore/CollectionContext";
import { ProfileContext } from "../DataStore/ProfileContext";
import { LoadingContext } from "../DataStore/LoadingContext";

export default function Profile() {
  const { decks } = useContext(CollectionContext);
  const { profile, getProfileData } = useContext(ProfileContext);
  const { setLoading } = useContext(LoadingContext);

  useEffect(() => {
    setLoading(true);
    getProfileData();
    setLoading(false);
  }, [getProfileData, setLoading]);

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
          src='https://media.tenor.com/images/f275448a47b765a8913bd9129325b28b/tenor.gif'
          alt=''
        />
        <div>
          <h2>{profile.username}</h2>
          <h4>{getDate(profile.registrationDate)}</h4>
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
          <h2>#Decks: {profile.numberOfDecks}</h2>
        </div>
        <div>
          <h2>Comments:13</h2>
        </div>
        <div>
          <h2>Votes: 34</h2>
        </div>
      </div>
      <div style={{ textAlign: "-webkit-center" }}>
        <DeckTable title='My Decks' decks={decks} myprofile />
      </div>
    </div>
  );
}
