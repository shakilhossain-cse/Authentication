import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  const [user, setUser] = useState("");
  useEffect(() => {
    setIsLoading(true);
    const userData = JSON.parse(localStorage.getItem("user"));
    console.log();
    if (userData) {
      setUser(userData);
    
    } else {
      setUser("");
     
    }
    setIsLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, isLoading}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
