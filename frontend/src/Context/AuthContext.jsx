import { createContext, useState, useMemo, useCallback } from "react";
import Cookies from "js-cookie";

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [userToken, setUserToken] = useState(Cookies.get("userToken") || null);
  const [userFirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const setUserTokenCookie = useCallback((token) => {
    if (token) {
      Cookies.set("userToken", token, {
        expires: 1 / 24,
      });
      setUserToken(token);
    } else {
      Cookies.remove("userToken");
      setUserToken(null);
    }
  }, []);

  const value = useMemo(
    () => ({
      userFirstName,
      setUserFirstName,
      userLastName,
      setUserLastName,
      setUserTokenCookie,
      userToken,
      userEmail,
      setUserEmail,
    }),
    [userToken, userFirstName, userLastName, userEmail]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
