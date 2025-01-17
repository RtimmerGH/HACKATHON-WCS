import { createContext, useState, useMemo, useCallback } from "react";
import Cookies from "js-cookie";

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [userToken, setUserToken] = useState(Cookies.get("userToken") || null);
  const [userFirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userRole, setUserRole] = useState("");
  const [userId, setUserId] = useState("");

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
      userId,
      setUserId,
      userFirstName,
      setUserFirstName,
      userLastName,
      setUserLastName,
      setUserTokenCookie,
      userToken,
      userEmail,
      setUserEmail,
      userRole,
      setUserRole,
    }),
    [userToken, userFirstName, userLastName, userEmail, userRole, userId]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
