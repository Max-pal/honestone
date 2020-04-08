import React from "react";
import { CollectionContext } from "../DataStore/CollectionContext";
import { heroImages } from "../Components/Header/HeroSelect";
import defaultProfilePic from "../static/images/blankprofilepic.png";
import hunter from "../static/images/hunter.png";
import mage from "../static/images/db-collection-class-mage.jpg";
import priest from "../static/images/db-collection-class-priest.jpg";
import warrior from "../static/images/db-collection-class-warrior.jpg";
import ProfileDeck from "./ProfileDeck";

export default function Profile() {
  const decks = [{ image: mage }, { image: priest }, { image: warrior }];

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
          <h2>Name: user.name</h2>
          <h2>Registration Date: registryDate</h2>
        </div>
        <div style={{ textAlign: "center" }}>
          <h3>Favourite Hero:</h3>
          <img src={hunter} alt="" />
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
          <h2>
            #Decks: <h4>0</h4>
          </h2>
        </div>
        <div>
          <h2>
            Comments: <h4>0</h4>
          </h2>
        </div>
        <div>
          <h2>
            Votes: <h4>0</h4>
          </h2>
        </div>
      </div>
      <div></div>
    </div>
  );
}
