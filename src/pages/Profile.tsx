import { useEffect, useState } from "react";
import { db } from "../firebase";
import { doc, onSnapshot } from "firebase/firestore";
import { useAuth } from "../auth/AuthContext";
import { Link, useLocation, useNavigate, Navigate } from "react-router-dom";
import Navbar from "../components/navbar";

export default function Profile() {
  const [userData, setUserData] = useState({
    name: "",
    location: "",
    email: "",
  });

  const [loading, setLoading] = useState(true);
  const { user, logout, loading: authLoading } = useAuth();
  const locationRouter = useLocation();
  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const state: any = locationRouter.state;
    if (state && state.success) {
      setShowSuccess(true);
      const t = setTimeout(() => {
        setShowSuccess(false);
        try {
          navigate(locationRouter.pathname, { replace: true, state: {} });
        } catch (e) {}
      }, 5000);

      return () => clearTimeout(t);
    }
  }, [locationRouter, navigate]);

  useEffect(() => {
    if (user && user.uid) {
      const ref = doc(db, "users", user.uid);
      const unsub = onSnapshot(
        ref,
        (snapshot) => {
          if (snapshot.exists()) {
            setUserData({
              name: snapshot.data().name || "",
              location: snapshot.data().location || "",
              email: snapshot.data().email || user.email || "",
            });
          } else {
            setUserData({
              name: user.name || "",
              location: user.location || "",
              email: user.email || "",
            });
          }
          setLoading(false);
        },
        (err) => {
          console.error("Profile onSnapshot error:", err);
          setLoading(false);
        }
      );

      return () => unsub();
    }

    // if no user, stop loading and clear data
    setUserData({ name: "", location: "", email: "" });
    setLoading(false);
  }, [user]);

  // show loading while auth state or profile data is loading
  if (authLoading || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#4F70FD]">
        <div className="text-white text-2xl">Loading...</div>
      </div>
    );
  }

  // only redirect when we are sure auth has been resolved and there is no user
  if (!authLoading && !user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <>
      <Navbar />
      <div className="mt-10 flex justify-center items-center">
        <div className="w-32 h-32 bg-[#FF009D] rounded-full relative flex items-center justify-center border-4 border-black">
          <svg width="90" height="90" fill="white" viewBox="0 0 24 24">
            <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z" />
          </svg>
        </div>
      </div>

      <h1 className="flex justify-center mt-2 text-2xl">{userData.name}</h1>

      <div className="min-h-screen bg-gray-50 flex flex-col items-center pb-20">
        <div className="w-full max-w-sm mt-8 p-6 bg-white rounded-xl shadow-xl border border-gray-200">
          <div className="flex justify-between items-center mb-6 border-b pb-4">
            <h2 className="text-xl font-semibold text-gray-800">
              Profile Information
            </h2>
            <div className="flex items-center gap-2">
              <Link to="/profile/edit">
                <button className="flex items-center p-2 text-sm font-medium text-gray-700 bg-white border border-gray-500 rounded-lg hover:bg-gray-200">
                  <img
                    src="/Img_Profile/Edit.png"
                    alt=""
                    className="h-4 mr-1"
                  />
                  <p>Edit Profile</p>
                </button>
              </Link>
            </div>
          </div>

          {userData ? (
            <div className="space-y-4">
              {/* Profile */}
              <div className="flex items-center">
                <img src="/Img_Profile/User.png" alt="" className="h-10 mr-2" />
                <div>
                  <p className="font-semibold">Full Name</p>
                  <p className="text-sm">{userData.name}</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center">
                <img
                  src="/Img_Profile/Location.png"
                  alt=""
                  className="h-10 mr-2"
                />
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-sm">{userData.location}</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center">
                <img
                  src="/Img_Profile/Email.png"
                  alt=""
                  className="h-10 mr-2"
                />
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-sm">{userData.email}</p>
                </div>
              </div>
            </div>
          ) : (
            <div>Tidak ada data</div>
          )}
        </div>

        <button
          onClick={async () => {
            try {
              await logout();
              navigate("/login");
            } catch (err) {
              console.error("Logout error:", err);
            }
          }}
          className="mt-2 px-3 py-2 text-md font-medium text-white bg-red-500 rounded-lg hover:bg-red-600"
        >
          Logout
        </button>
      </div>

      {showSuccess && (
        <div className="fixed bottom-5 bg-blue-500 text-white px-5 py-3 rounded-lg shadow-lg animate-fade-in">
          Profile Successfully Changed
        </div>
      )}
    </>
  );
}
