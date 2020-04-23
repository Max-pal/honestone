import React, {
  useState,
  useContext,
  createContext,
  useEffect,
  useCallback,
} from "react";
import { UserContext } from "../DataStore/UserProvider";
import { honestoneAPI } from "../Components/axiosos";

export const ProfileContext = createContext();

export function ProfileProvider(props) {
  const [profile, setProfile] = useState();
  const { setLoading } = useContext(LoadingContext);
  const { userId } = useContext(UserContext);

  const getProfileData = useCallback(() => {
    if (userId !== -1) {
      setLoading(true);
      honestoneAPI
        .get(`http://localhost:8080/user/profile/get/${userId}`)
        .then(({ data }) => {
          setProfile(data);
        });
    }
  }, [userId, setLoading]);

  return (
    <ProfileContext.Provider value={{ profile, getProfileData }}>
      {props.children}
    </ProfileContext.Provider>
  );
}
