import React, { useContext } from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { heroImages } from "./Header/HeroSelect";
import { Link } from "react-router-dom";
import { DeckContext } from "../DataStore/DeckContext";
import styled from "styled-components";

const getDate = (dateTime) => {
  const d = new Date(dateTime);
  let year = d.getFullYear();
  let month = d.getMonth() + 1;
  let date = d.getDate();
  let hours = d.getHours();
  let mins = d.getMinutes();

  return `${year}-${month < 10 ? "0" + month : month}-${
    date < 10 ? "0" + date : +date
  } ${hours < 10 ? "0" + hours : +hours}:${mins < 10 ? "0" + mins : mins}`;
};

const imageSelector = (deck) => {
  return heroImages.filter((hero) => {
    return hero.id === deck.hero;
  });
};

const useStyles = makeStyles({
  table: {
    maxWidth: "550px",
  },
});
const TableContainerStyle = styled(TableContainer)`
  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #f5f5f5;
    border-radius: 10px;
  }

  ::-webkit-scrollbar {
    width: 10px;
    background-color: #f5f5f5;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-image: -webkit-gradient(
      linear,
      left bottom,
      left top,
      color-stop(0.44, rgb(122, 153, 217)),
      color-stop(0.72, rgb(73, 125, 189)),
      color-stop(0.86, rgb(28, 58, 148))
    );
  }
`;
function DeckTable(props) {
  const classes = useStyles();
  const { loadDeck } = useContext(DeckContext);
  return (
    <div
      style={{
        display: "inline-block",
        float: props.align,
        marginLeft: props.align === "left" ? "10%" : "0",
        marginRight: props.align === "right" ? "10%" : "0",
      }}
    >
      <Typography
        className={classes.title}
        variant="h6"
        id="tableTitle"
        component="div"
      >
        {props.title}
      </Typography>
      {props.decks && (
        <TableContainerStyle style={{ margin: "auto", maxHeight: "80vh" }}>
          <Table stickyHeader className={classes.table} aria-label="decklist">
            <TableHead>
              <TableRow>
                <TableCell align="center">Name</TableCell>

                <TableCell align="center">Format</TableCell>

                {!props.myprofile && (
                  <TableCell align="center">Made by</TableCell>
                )}

                <TableCell align="center">Last Update</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.decks.map((deck) => (
                <TableRow hover key={deck.id}>
                  <TableCell component="th" scope="row">
                    <img
                      style={{ verticalAlign: "bottom" }}
                      src={imageSelector(deck)[0].icon}
                      alt=""
                    />{" "}
                    <Link
                      style={{
                        textDecoration: "none",
                        color: "#4242a7",
                        fontWeight: "bold",
                      }}
                      to="/deckpage"
                      onClick={() =>
                        loadDeck(
                          deck.deckcode,
                          deck.id,
                          deck.name,
                          deck.hero,
                          true
                        )
                      }
                    >
                      {deck.name}
                    </Link>
                  </TableCell>
                  <TableCell align="center">
                    {deck.format == 2 ? "Standard" : "Wild"}
                  </TableCell>
                  {!props.myprofile && (
                    <TableCell align="center">{deck.username}</TableCell>
                  )}
                  <TableCell align="center">
                    {getDate(deck.updateTime)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainerStyle>
      )}
    </div>
  );
}

export default DeckTable;
