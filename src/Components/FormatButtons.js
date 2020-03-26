import React, { useContext } from "react";
import wild from "../static/images/wild.png";
import standard from "../static/images/standard.png";
import styled from "styled-components";
import { DeckContext } from "../DataStore/DeckContext";

function FormatButtons(props) {
  const { format, setFormat } = useContext(DeckContext);

  const ImageStyle = styled.img`
    width: 60px;
    height: 70px;
    margin: 8px;
    cursor: pointer;
  `;

  const ContainerStlye = styled.div`
    display: flex;
    justify-content: center;
  `;
  return (
    <ContainerStlye>
      <ImageStyle
        style={{
          filter: `${format === 1 ? "drop-shadow(0px 0px 5px aqua)" : ""}`
        }}
        class="format"
        src={wild}
        alt="wild"
        onClick={() => setFormat(1)}
      />
      <ImageStyle
        style={{
          filter: `${format === 2 ? "drop-shadow(0px 0px 5px aqua)" : ""}`
        }}
        class="format"
        src={standard}
        alt="standard"
        onClick={() => setFormat(2)}
      />
    </ContainerStlye>
  );
}

export default FormatButtons;
