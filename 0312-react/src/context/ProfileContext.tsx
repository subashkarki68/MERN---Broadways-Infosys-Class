import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

const ProfileContext: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [profile, setProfile] = useState<string | undefined>(undefined);
  const ProfileContext = createContext<string | undefined>(undefined);
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      const { data } = await axios.get("https://dummyjson.com/users/1");
      setProfile(data);
      console.log(data);
    };
    fetchData();
    return () => {
      controller.abort();
    };
  }, []);
  return (
    <ProfileContext.Provider value={profile}>
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileContext;
