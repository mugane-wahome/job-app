import axios from "axios";
import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const login = async (inputs) => {
    try {
      const res = await axios.post("http://localhost:9000/login", inputs, { withCredentials: true});
      console.log(res.data)
      setCurrentUser(res.data);
      console.log(res.data);
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await axios.post("http://localhost:9000/logout");
      setCurrentUser(null);
    } catch (error) {
      console.log(error.message);
    }
  };

  // useEffect(() => {
  //   const checkLoggedIn = async () => {
  //     try {
  //       const res = await axios.get("http://localhost:9000/loggedIn");
  //       setCurrentUser(res.data);
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   };
  //   checkLoggedIn();
  // }, []);

  return (
    <AuthContext.Provider
      value={{ currentUser, setCurrentUser, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
