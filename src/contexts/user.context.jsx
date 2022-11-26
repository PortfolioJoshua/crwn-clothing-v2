import { createContext, useState, useEffect } from 'react';

import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from '../utils/firebase/firebase.utils';

export const UserContext = createContext({
  setCurrentUser: () => null,
  currentUser: null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };
  console.log("test");
  console.log(currentUser);
  console.log("end");
  //signOutUser();
  
  useEffect(() => {

    
    const unsubscribe = onAuthStateChangedListener((user10) => {
      console.log("d");
      console.log(user10);
      if (user10) {
        createUserDocumentFromAuth(user10);
      }
      setCurrentUser(user10);
    });
    console.log("a");
    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
