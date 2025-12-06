import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

type AuthContextType = {
  user: any | null;
  loading: boolean;
  authProcessing: boolean;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  authProcessing: false,
  logout: async () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [authProcessing, setAuthProcessing] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      setAuthProcessing(true);
      if (!firebaseUser) {
        setUser(null);
        setLoading(false);
        setAuthProcessing(false);
        return;
      }

      try {
        const ref = doc(db, "users", firebaseUser.uid);
        const snapshot = await getDoc(ref);

        if (snapshot.exists()) {
          setUser({ uid: firebaseUser.uid, ...snapshot.data() });
        } else {
          setUser({ uid: firebaseUser.uid, email: firebaseUser.email });
        }
      } catch (err) {
        console.error(err);
        setUser({ uid: firebaseUser.uid, email: firebaseUser.email });
      } finally {
        setLoading(false);
        setAuthProcessing(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const logout = async () => {
    setAuthProcessing(true);
    await signOut(auth);
    setUser(null);
    setAuthProcessing(false);
  };

  return (
    <AuthContext.Provider value={{ user, loading, authProcessing, logout}}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}