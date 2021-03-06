import React, { useContext } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import { CardsContext } from "../../DataStore/CardsContext";
import { Link, Redirect } from "react-router-dom";
import { UserContext } from "../../DataStore/UserProvider";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  bottomMargin: {
    marginBottom: "20px",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 120,
      "&:focus": {
        width: 200,
      },
    },
  },
}));

export default function SearchAppBar() {
  const classes = useStyles();
  const { isLoggedIn, setIsLoggedIn, userId, setUserId } = useContext(
    UserContext
  );
  return (
    <div className={classes.root}>
      <AppBar className={classes.bottomMargin} position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          />
          <Typography className={classes.title} variant="h6" noWrap>
            <Link
              style={{ color: "#fff", textDecoration: "none" }}
              to="/collection"
              underline="none"
            >
              HoneStone
            </Link>
          </Typography>
          {isLoggedIn && (
            <React.Fragment>
              <Typography
                className={classes.menuButton}
                variant="button"
                noWrap
              >
                <Link
                  style={{ color: "#fff", textDecoration: "none" }}
                  to="/deckbuilder/heroselect"
                  underline="none"
                >
                  Create Deck
                </Link>
              </Typography>
              <Typography
                className={classes.menuButton}
                variant="button"
                noWrap
              >
                <Link
                  style={{ color: "#fff", textDecoration: "none" }}
                  to="/collection"
                  underline="none"
                >
                  Collection
                </Link>
              </Typography>
              <Typography
                className={classes.menuButton}
                variant="button"
                noWrap
              >
                <Link
                  style={{ color: "#fff", textDecoration: "none" }}
                  to="/profile"
                  underline="none"
                >
                  Profile
                </Link>
              </Typography>
              <Typography
                className={classes.menuButton}
                variant="button"
                noWrap
              >
                <Link
                  style={{ color: "#fff", textDecoration: "none" }}
                  to="/browser"
                  underline="none"
                >
                  Browser
                </Link>
              </Typography>
              {/* <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <form
                  onSubmit={e => {
                    e.preventDefault();
                  }}
                >
                  <InputBase
                    autoComplete="off"
                    id="search"
                    placeholder="Search…"
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput
                    }}
                    inputProps={{ "aria-label": "search" }}
                  />
                </form>
              </div> */}

              <ExitToAppIcon
                style={{ marginLeft: "10px" }}
                cursor="pointer"
                onClick={() => {
                  setIsLoggedIn(false);
                  setUserId(-1);
                }}
              />
            </React.Fragment>
          )}
          {!isLoggedIn && <Redirect to="/" />}
        </Toolbar>
      </AppBar>
    </div>
  );
}
