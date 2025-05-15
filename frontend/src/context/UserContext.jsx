import { createContext, useContext, useState , useEffect } from "react";
import Cookie from "js-cookie";
const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [token , setToken] = useState("");

  // Refresh ke baad cookie se name load karo
  useEffect(() => {
    const nameFromCookie = Cookie.get("userId");
    const tokenFromCookie = Cookie.get("token")
    if (nameFromCookie) {
      setName(nameFromCookie);
      setToken(tokenFromCookie)
    }
  }, []);

  return (
    <UserContext.Provider value={{ name, setName , token , setToken }}>
      {children}
    </UserContext.Provider>
  );
};

export const useName = () => useContext(UserContext);
