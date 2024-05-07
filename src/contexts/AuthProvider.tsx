import { createContext, ReactNode, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithPopup,
  signOut,
  User,
  onAuthStateChanged,
  AuthProvider,
  UserCredential,
} from "firebase/auth";
import "@/firebase/firebase.config";

type TAuthProviderProps = {
  children: ReactNode;
};

export type TAuthContext = {
  createUser: (email: string, password: string) => Promise<UserCredential>;
  signIn: (email: string, password: string) => Promise<UserCredential>;
  providerLogin: (provider: AuthProvider) => Promise<UserCredential>;
  resetPassword: (email: string) => Promise<void>;
  user: User | null;
  logOut: () => Promise<void>;
  loading: boolean;
};

export const AuthContext = createContext<TAuthContext | null>(null);

const auth = getAuth();

const AuthProviderComponent = ({ children }: TAuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const createUser = async (email: string, password: string) => {
    setLoading(true);
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    setLoading(false);
    return userCredential;
  };

  const signIn = async (email: string, password: string) => {
    setLoading(true);
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    setLoading(false);
    return userCredential;
  };

  const providerLogin = async (provider: AuthProvider) => {
    setLoading(true);
    const userCredential = await signInWithPopup(auth, provider);
    setLoading(false);
    return userCredential;
  };

  const resetPassword = async (email: string) => {
    setLoading(true);
    await sendPasswordResetEmail(auth, email);
    setLoading(false);
  };

  const logOut = async () => {
    setLoading(true);
    await signOut(auth);
    setLoading(false);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const authInfo: TAuthContext = {
    createUser,
    signIn,
    providerLogin,
    resetPassword,
    user,
    logOut,
    loading,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviderComponent;
