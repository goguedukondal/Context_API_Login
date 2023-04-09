import { createContext, useState } from "react";

export const AuthContext = createContext();

function CustomProvider({ children }) {
  const [isloggedin, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({
    name: "",
    password: "",
  });
  return (
    <AuthContext.Provider value={{ isloggedin, setIsLoggedIn,user,setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export default CustomProvider;
