import React, { useContext, useState, useEffect } from "react";
import { StartHandContext } from "../../DataStore/StartHandContext";
import styled from "styled-components";
import { Button } from "@material-ui/core";

export default function StartHandSimulator() {
  const { startHand, setStartHand, generateStartingHand } = useContext(
    StartHandContext
  );
  const [generatedCards, setGeneratedCards] = useState([]);
  console.log("Bazdmeg");

  useEffect(() => {
    setGeneratedCards(generateStartingHand());
  }, [generateStartingHand]);

  const StyledCard = styled.img`
    height: 395px;
    width: 295px;
    cursor: pointer;
    &:hover {
      transform: scale(1.08);
    }
    transition-duration: 0.3s;
  `;

  const centered = {
    textAlign: "center"
  };

  return (
    <React.Fragment>
      <h2 style={centered}>Your Starting Hand</h2>
      <div style={centered}>
        {generatedCards.map(card => (
          <StyledCard src={card.image} alt="" />
        ))}
      </div>
      <div style={centered}>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => setGeneratedCards(generateStartingHand())}
        >
          New Hand
        </Button>
      </div>
    </React.Fragment>
  );
}
