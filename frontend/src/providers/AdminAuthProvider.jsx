import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut
} from "firebase/auth";
import app from "../firebase/firebase.config";

const AdminAuthContext = createContext();

const AdminAuthProvider = ({ children }) => {
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const adminAuth = getAuth(app);

  //Register Admin

  const registerAdmin = (email, password) => {
    setLoading(true);
    setError(null);

    return createUserWithEmailAndPassword(adminAuth, email, password)
      .catch((err) => {
        setError(err.message);
        throw err;
      })
      .finally(() => setLoading(false));
  };

  //Login Admin

  const signInAdmin = (email, password) => {
    setLoading(true);
    setError(null);

    return signInWithEmailAndPassword(adminAuth, email, password)
      .catch((err) => {
        setError(err.message);
        throw err;
      })
      .finally(() => setLoading(false));
  };

  //Sign In With Google

  const signInWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    setLoading(true);
    setError(null);
    return signInWithPopup(adminAuth, googleProvider)
      .catch((err) => {
        setError(err.message);
        throw err;
      })
      .finally(() => setLoading(false));
  };

  //signOut

  const signingOut = ()=> {
    signOut(adminAuth).then(() => {
        console.log("Sign Out Successful")
      }).catch((error) => {
        console.log(error.message)
      });
  }

  // Inside AdminAuthProvider component
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(adminAuth, (currentUser) => {
      setAdmin(currentUser);
      setLoading(false);
    });

    // Cleanup on unmount
    return () => unsubscribe();
  }, []);

  const value = {
    admin,
    loading,
    error,
    loggedIn: !!admin,
    registerAdmin,
    signInAdmin,
    signInWithGoogle,
    signingOut
  };

  return (
    <AdminAuthContext.Provider value={value}>
      {children}
    </AdminAuthContext.Provider>
  );
};
export const useAdminAuth = () => useContext(AdminAuthContext);

export default AdminAuthProvider;
