import React, { useContext } from "react";
import styled from "styled-components";
import { VoteContext } from "../DataStore/VoteContext";

function VoteButton(props) {
  const { handleVote } = useContext(VoteContext);

  const VoteButtonStyle = styled.img`
    margin: 5px;
    width: 40px;
    height: 40px;
    filter: ${props.voted ? props.filter : ""};
    &:hover {
      filter: ${props.voted
        ? "invert(0%) sepia(98%) saturate(27%) hue-rotate(169deg) brightness(105%) contrast(100%)"
        : props.filter};
    }
  `;

  const vote = () => {
    const endpoint = props.voted ? "unlike" : props.endpoint;
    handleVote(endpoint);
  };
  return <VoteButtonStyle src={props.src} onClick={() => vote()} />;
}

export default VoteButton;
