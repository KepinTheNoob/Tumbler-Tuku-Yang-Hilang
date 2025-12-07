import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

export default function EditProfile() {
  const [form, setForm] = useState({
    name: "",
    location: "",
    email: "",
  });

  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        const ref = doc(db, "users", currentUser.uid);
        const snapshot = await getDoc(ref);

        if (snapshot.exists()) {
          const data = snapshot.data();
          setForm({
            name: data.name || "",
            location: data.location || "",
            email: currentUser.email || "",
          });
        }
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleSave = async () => {
    const user = auth.currentUser;
    if (!user) return;

    const ref = doc(db, "users", user.uid);

    await updateDoc(ref, {
      name: form.name,
      location: form.location,
    });

    navigate("/profile", { state: { success: true } });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#4F70FD]">
        <div className="text-white text-2xl">Loading...</div>
      </div>
    );
  }

  const initials = form.name
    ? form.name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
    : "U";

  return (
    <>
      <div className="min-h-screen bg-gray-50 flex flex-col items-center pb-20">
        {/* Back & Title */}
        <div className="w-full flex items-center p-3 bg-[#F4FAFF] shadow-md">
          <button onClick={() => navigate("/profile")} className="flex items-center">
            <img src="/Img_Profile/Back_button.png" alt="Back" className="h-6 mr-2" />
            <p className="text-md font-semibold">Back</p>
          </button>
        </div>

        {/* Avatar */}
        <div className="mt-6 flex justify-center">
          <div className="w-32 h-32 bg-[#FF009D] rounded-full flex items-center justify-center border-4 border-black">
            <p className="text-4xl font-bold text-black">{initials}</p>
          </div>
        </div>

        <p className="text-lg mt-3 font-medium">{form.name || "User"}</p>

        {/* Card */}
        <div className="w-full max-w-md mt-10 p-6 bg-white rounded-xl shadow-xl border border-gray-200">
          <h2 className="text-2xl font-semibold mb-4">Profile Information</h2>

          {/* Name */}
          <div className="mb-5">
            <label className="font-semibold">Full Name</label>
            <input
              type="text"
              className="w-full mt-1 p-3 border rounded-lg bg-gray-50"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </div>

          {/* Location */}
          <div className="mb-5">
            <label className="font-semibold">Location</label>
            <input
              type="text"
              className="w-full mt-1 p-3 border rounded-lg bg-gray-50"
              value={form.location}
              onChange={(e) => setForm({ ...form, location: e.target.value })}
            />
          </div>

          {/* Email (readonly) */}
          <div className="mb-5">
            <label className="font-semibold">Email Address</label>
            <input
              type="text"
              className="w-full mt-1 p-3 border rounded-lg bg-gray-100 text-gray-500"
              value={form.email}
              readOnly
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-10">
          <button
            onClick={() => navigate("/profile")}
            className="px-8 py-3 border border-gray-500 rounded-lg text-gray-700 text-lg"
          >
            Cancel
          </button>

          <button
            onClick={handleSave}
            className="px-10 py-3 bg-blue-600 text-white rounded-lg text-lg"
          >
            Save
          </button>
        </div>
      </div>
    </>
  );
}
