import { BrowserRouter, Routes, Route, useNavigate, Link } from "react-router-dom";
import { AuthProvider, useAuth } from "./auth/AuthContext";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import ProtectedRoute from "./auth/ProtectedRoute";
import Homepage from "./pages/Homepage";
import EditProfile from "./pages/EditProfile";
import Onboarding from "./pages/onboarding";

function AppRoutes() {
  const { user, loading, logout } = useAuth();
  const navigate = useNavigate();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#4F70FD]">
        <div className="text-white text-2xl">Loading...</div>
      </div>
    );
  }

  const handleLogout = async () => {
    try {
      await logout();
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
      {user && (
        <nav className="bg-[#4F70FD] text-white p-4 flex justify-between items-center">
          <div className="text-xl font-bold">Xporade</div>
          <div className="flex items-center gap-4">
            <span className="text-sm">Welcome, {user.email}</span>

            <Link to="/profile">
              <div className="w-10 h-10 bg-[#FF009D] rounded-full relative flex items-center justify-center border-2 border-white">
                <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
                  <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z" />
                </svg>
              </div>
            </Link>

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
                <Route
                path="/"
                element={
                  <ProtectedRoute>
                    <Homepage/>
                  </ProtectedRoute>
                }
              />

              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/profile/edit"
                element={
                  <ProtectedRoute>
                    <EditProfile />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/onboarding"
                element={
                  <ProtectedRoute>
                    <Onboarding />
                  </ProtectedRoute>
                }
              />
            </>
          ) : (
            <>
              {/* User belum login */}
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
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
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  );
}
