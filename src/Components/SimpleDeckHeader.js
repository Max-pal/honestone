import React from "react";
import { heroImages } from "./Header/HeroSelect";
import { Typography } from "@material-ui/core";

function SimpleDeckHeader(props) {
  const imageSelector = () => {
    return heroImages.filter((hero) => {
      return hero.id === props.hero.id;
    });
  };

  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          background: `url(${
            imageSelector()[0].deckImg
          }) right center no-repeat black`,
          backgroundPosition: "right",
          height: "66px",
          wordBreak: "break-word",
        }}
      >
        <Typography
          style={{
            letterSpacing: "2px",
            fontSize: "2rem",
            color: "white",
            lineHeight: "1.8rem",
          }}
        >
          {props.deckName}
        </Typography>
      </div>
    </div>
  );
}

export default SimpleDeckHeader;
