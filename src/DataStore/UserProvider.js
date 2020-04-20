import React, { createContext, useState } from "react";
import { honestoneAPI } from "../Components/axiosos";
import Axios from "axios";

export const UserContext = createContext();

export function UserProvider(props) {
  const [userId, setUserId] = useState(-1);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [trigger, setTrigger] = useState(0);
  const [username, setUsername] = useState("");

  const setCredentials = (data) => {
    setIsLoggedIn(true);
    setUserId(data.id);
    setUsername(data.username);
  };

  function register(userInformation) {
    honestoneAPI
      .post("http://localhost:8080/auth/register", userInformation)

      .then((resp) => {
        if (resp.status === 200) {
          setCredentials(resp.data);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }

  function login({ username, password }) {
    honestoneAPI.post("http://localhost:8080/auth/login", { username, password }).then(
      (resp) => {
        if (resp.status === 200) {
          setCredentials(resp.data);
        }
      }
    );
  }

  return (
    <UserContext.Provider
      value={{
        userId,
        setUserId,
        isLoggedIn,
        setIsLoggedIn,
        register,
        login,
        setTrigger,
        trigger,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
