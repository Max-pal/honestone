import React, { useContext, useEffect } from "react";
import { LoadingContext } from "../DataStore/LoadingContext";
import getAccessToken from "../getAccessToken";
import { blizzardAPI } from "./axiosos";
import { uniq, DeckContext } from "../DataStore/DeckContext";
import CroppedCard from "./RightPane/CroppedCard";
import PreviewCroppedCard from "./PreviewCroppedCard";
import SimpleDeckHeader from "./SimpleDeckHeader";
import { Typography } from "@material-ui/core";
import DeckInfo from "./DeckInfo";
import CopyDeckcodeButton from "./CopyDeckcodeButton";
import OpenInEditorButton from "./OpenInEditorButton";
import CommentsBlock from "simple-react-comments";
import ManaCurve from "./ManaCurve";

function DeckPage(props) {
  const {
    loadDeck,
    hero,
    deckName,
    cardsInDeck,
    deckLength,
    format,
  } = useContext(DeckContext);

  const container = {
    margin: "auto",
    maxWidth: "290px",
    minWidth: "275px",
  };
  return (
    <React.Fragment>
      <div style={{ display: "flex" }}>
        <div style={container}>
          <DeckInfo cardsInDeck={cardsInDeck} format={format} />
          <SimpleDeckHeader hero={hero} deckName={deckName} />
          {deckLength > 0 &&
            cardsInDeck.map((card) => (
              <PreviewCroppedCard key={card.id} card={card} />
            ))}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <CopyDeckcodeButton />
            <OpenInEditorButton />
          </div>
        </div>
        <CommentsBlock
          comments={[
            {
              authorUrl: "#",
              avatarUrl:
                "https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png",
              createdAt: new Date(),
              fullName: "Peter",
              text: "wow best deck ever",
            },
            {
              authorUrl: "#",
              avatarUrl:
                "https://cdn1.iconfinder.com/data/icons/avatar-97/32/avatar-09-512.png",
              createdAt: new Date(),
              fullName: "Eva",
              text: "10/10 would build it again",
            },
            {
              authorUrl: "#",
              avatarUrl:
                "https://mbdentalhome.com/wp-content/uploads/2018/07/man.png",
              createdAt: new Date(),
              fullName: "Joe",
              text: "not worth crafting I lost all my games",
            },
            {
              authorUrl: "#",
              avatarUrl:
                "https://cdn.iconscout.com/icon/free/png-256/avatar-380-456332.png",
              createdAt: new Date(),
              fullName: "Károly",
              text: "add me, I dont have friends",
            },
            {
              authorUrl: "#",
              avatarUrl:
                "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png",
              createdAt: new Date(),
              fullName: "Thomas",
              text: "thx",
            },
          ]}
          //signinUrl={"/signin"}
          isLoggedIn={true}
          //reactRouter // set to true if you are using react-router
          onSubmit={(text) => {
            if (text.length > 0) {
              this.setState({
                comments: [
                  ...this.state.comments,
                  {
                    authorUrl: "#",
                    avatarUrl:
                      "https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png",
                    createdAt: new Date(),
                    fullName: "Name",
                    text,
                  },
                ],
              });
              console.log("submit:", text);
            }
          }}
        />
      </div>
      <ManaCurve />
    </React.Fragment>
  );
}

export default DeckPage;
