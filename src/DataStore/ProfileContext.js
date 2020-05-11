import React, { useState, useContext, createContext, useCallback } from "react";
import { UserContext } from "../DataStore/UserProvider";
import { honestoneAPI } from "../Components/axiosos";

export const ProfileContext = createContext();

export function ProfileProvider(props) {
  const [profile, setProfile] = useState(0);
  const { userId } = useContext(UserContext);

  const getProfileData = useCallback(() => {
    if (userId !== -1) {
      honestoneAPI
        .get(
          `https://Honestone-env.eba-k4swcanf.eu-central-1.elasticbeanstalk.com/profile/${userId}`
        )
        .then(({ data }) => {
          setProfile(data);
        });
    }
  }, [userId]);

  return (
    <ProfileContext.Provider value={{ profile, getProfileData }}>
      {props.children}
    </ProfileContext.Provider>
  );
}
