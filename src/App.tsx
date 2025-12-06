import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./firebase";
import Login from "./Login";
import SignUp from "./SignUp";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Onboarding from "./pages/onboarding";

function AppContent() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      navigate("/login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#4F70FD]">
        <div className="text-2xl text-white">Loading...</div>
      </div>
    );
  }

  return (
    <>
      {/* Top Navigation Bar */}
      {user && (
        <nav className="bg-[#4F70FD] text-white p-4 flex justify-between items-center">
          <div className="text-xl font-bold">Xporade</div>
          <div className="flex items-center gap-4">
            <span className="text-sm">Welcome, {user.email}</span>
            <button
              onClick={handleLogout}
              className="px-4 py-2 text-sm font-semibold bg-red-500 rounded-lg hover:bg-red-600"
            >
              Logout
            </button>
          </div>
        </nav>
      )}

      <Routes>
        <Route>
          {user ? (
            <>
              {/* Home Page untuk user yang sudah login */}
              <Route
                path="/"
                element={
                  <div className="min-h-screen flex items-center justify-center bg-[#4F70FD]">
                    <div className="p-10 text-center bg-white shadow-lg rounded-2xl">
                      <h1 className="mb-4 text-3xl font-bold">Welcome to Xporade!</h1>
                      <p className="mb-6 text-gray-600">You are logged in as: {user.email}</p>
                      <button
                        onClick={handleLogout}
                        className="bg-[#4F70FD] text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-600"
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                }
              />
              <Route path="/login" element={<div className="flex items-center justify-center min-h-screen"><p>You are already logged in. <a href="/" className="text-blue-600 underline">Go to home</a></p></div>} />
              <Route path="/signup" element={<div className="flex items-center justify-center min-h-screen"><p>You are already logged in. <a href="/" className="text-blue-600 underline">Go to home</a></p></div>} />
            </>
          ) : (
            <>
              {/* User belum login */}
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/onboarding" element={<Onboarding />} />
            </>
          )}
        </Route>
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
