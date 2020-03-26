import React, { createContext, useState } from "react";
import axios from "axios";

export const UserContext = createContext();

export function UserProvider(props) {
  const [userId, setUserId] = useState(-1);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [trigger, setTrigger] = useState(0);

  function register(userInformation) {
    axios
      .post("http://localhost:8080/user/register", userInformation)
      .then(({ data }) => {
        if (data !== -1) {
          setIsLoggedIn(true);
          setUserId(data);
        }
      });
  }

  function login({ username, password }) {
    axios
      .post("http://localhost:8080/user/login", { username, password })
      .then(({ data }) => {
        if (data !== -1) {
          setIsLoggedIn(true);
          setUserId(data);
        }
      });
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
        trigger
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
