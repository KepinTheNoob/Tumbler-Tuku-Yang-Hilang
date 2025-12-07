import { Link } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

export default function Navbar() {
  const { user, loading: authLoading } = useAuth();
  const location = useLocation();
  const pathname = location.pathname;
  const [userName, setUsername] = useState<String>("Guest");
  const [loadingData, setLoadingData] = useState<boolean>(true);

  const isActive = (path: string) => {
    if (path === "/home")
      return pathname === "/" || pathname.startsWith("/home");
    // Consider recommendation pages as part of the onboarding/form flow
    if (path === "/onboarding")
      return (
        pathname.startsWith("/onboarding") ||
        pathname.startsWith("/recommendation")
      );
    return pathname.startsWith(path);
  };


  useEffect(() => {
    if (user && user.uid) {
      setLoadingData(true);
      const userRef = doc(db, "users", user.uid);

      const unsub = onSnapshot(
        userRef,
        (snapshot) => {
          if (snapshot.exists()) {
            // Ambil nama dari Firestore
            setUsername(snapshot.data().name || user.email || "User");
          } else {
            // Dokumen user belum ada
            setUsername(user.email || "User");
          }
          setLoadingData(false);
        },
        (err) => {
          console.error("Dashboard data fetch error:", err);
          setUsername("User"); // Fallback jika ada error
          setLoadingData(false);
        }
      );

      return () => unsub(); // Cleanup listener saat komponen di-unmount
    } else if (!authLoading) {
      // Jika auth loading selesai dan tidak ada user
      setUsername("Guest");
      setLoadingData(false);
    }
  }, [user, authLoading]);

  return (
    <nav className="flex justify-between items-center p-3 shadow-sm bg-[#F4FAFF]">
      <img src="Img_Home/logo.png" className="h-[60px] w-auto object-contain" />
      <ul className="hidden md:flex gap-8 text-gray-600">
        <li>
          <Link
            to="/home"
            className={`font-(family-name:Aptos) px-2 py-1 ${
              isActive("/home")
                ? "underline decoration-2 underline-offset-4 text-blue-600"
                : ""
            }`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/onboarding"
            className={`px-2 py-1 ${
              isActive("/onboarding")
                ? "underline decoration-2 underline-offset-4 text-blue-600"
                : ""
            }`}
          >
            Form
          </Link>
        </li>

      </ul>

      {user ? (
        <div className="flex items-center gap-4">
          <span className="text-sm font-medium">Hello, {userName}</span>
          <Link to="/profile">
            <div className="w-12 h-12 bg-[#FF009D] rounded-full relative flex items-center justify-center border-2 border-black">
              <svg width="30" height="30" fill="white" viewBox="0 0 24 24">
                <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z" />
              </svg>
            </div>
          </Link>
        </div>
      ) : (
        <Link to="/login">
          <button className="px-4 py-1 bg-[#35B7FA] text-white rounded-full hover:opacity-90 transition font-bold">
            Login
          </button>
        </Link>
      )}
    </nav>
  );
}
