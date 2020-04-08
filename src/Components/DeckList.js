import React, { useContext, useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { CollectionContext } from "../DataStore/CollectionContext";
import { heroImages } from "../Components/Header/HeroSelect";
import { Paper, TableContainer } from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    maxWidth: "550px",
  },
});

export default function DeckList() {
  const { decks } = useContext(CollectionContext);

  const classes = useStyles();

  const imageSelector = (deck) => {
    return heroImages.filter((hero) => {
      return hero.id === deck.hero;
    });
  };

  return (
    <TableContainer style={{ margin: "auto" }}>
      <Table className={classes.table} aria-label="decklist">
        <TableBody>
          {decks.map((deck) => (
            <TableRow key={deck.id}>
              <TableCell component="th" scope="row">
                <img src={imageSelector(deck)[0].icon} alt="" /> {deck.name}
              </TableCell>
              <TableCell align="right">{deck.format}</TableCell>
              <TableCell align="right">{deck.hero}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
