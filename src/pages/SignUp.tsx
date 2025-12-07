import { useState } from "react";
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { auth, db } from "../firebase";
import { useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword)
      return setMessage("Password does not match");

    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        name,
        location,
        email,
        createdAt: new Date(),
      });

      await signOut(auth); // tunggu sampai user benar-benar keluar

      setMessage("Sign Up Success!");
      navigate("/login", { replace: true }); // baru redirect
    } catch (err: any) {
      setMessage(err.message);
      setLoading(false);
    }
  };

  return (
    <>
      <div className="min-h-screen w-full flex items-center justify-center bg-[#4F70FD] relative py-20">
        {/* Decorative Elements - Top Right */}
        <img
          src={`Img_SignUp/Group.png`}
          className="absolute top-[30px] right-[80px] w-[60px] select-none pointer-events-none"
          alt="decoration"
        />

        {/* Decorative Elements - Bottom Left */}
        <img
          src={`Img_SignUp/Group-1.png`}
          className="absolute bottom-[30px] left-[80px] w-[60px] select-none pointer-events-none"
          alt="decoration"
        />

        {/* Decorative Elements - Top Left */}
        <img
          src={`Img_SignUp/Vector.png`}
          className="absolute top-[0px] left-[0px] w-[140px] select-none pointer-events-none"
          alt="decoration"
        />

        {/* Decorative Elements - Bottom Right */}
        <img
          src={`Img_SignUp/Group 15.png`}
          className="absolute bottom-[0px] right-[40px] w-[100px] select-none pointer-events-none"
          alt="decoration"
        />

        {/* Card */}
        <div className="bg-[#F3FAFF] w-[500px] p-10 rounded-2xl shadow-lg relative flex flex-col items-center">
          {/* Avatar Icon */}
          <div className="w-20 h-20 bg-[#36B3FF] rounded-full flex items-center justify-center absolute -top-10 border-4 border-[#F4FAFF]">
            <svg width="45" height="45" fill="white" viewBox="0 0 24 24">
              <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z" />
            </svg>
          </div>

          {/* Title */}
          <h1 className="mt-12 text-3xl font-bold">Register</h1>
          <p className="mt-1 mb-6 text-gray-600">Welcome Back to Xporade!</p>

          {/* Form */}
          <form
            action=""
            className="flex flex-col w-full gap-4"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              placeholder="Name (min. 3 characters)"
              className="w-full p-4 border-2 border-black rounded-xl focus:outline-none"
            />

            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full p-4 border-2 border-black rounded-xl focus:outline-none"
            />

            <input
              type="location"
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Your Location"
              className="w-full p-4 border-2 border-black rounded-xl focus:outline-none"
            />

            <div>
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password (min. 6 characters)"
                className="w-full p-4 border-2 border-black rounded-xl focus:outline-none"
              />
              <button
                type="button"
                className="absolute text-sm right-4 top-4"
                onClick={() => setShowPassword((prev) => !prev)}
              >
              </button>
            </div>

            <input
              type="password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
              className="w-full p-4 border-2 border-black rounded-xl focus:outline-none"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#4F70FD] text-white py-3 rounded-xl text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Creating Account..." : "Create Account"}
            </button>
          </form>

          {/* Sign Up */}
          <p className="mt-5 text-sm text-black">
            Already have an account?{" "}
            <a href="/login" className="text-blue-600 underline">
              Sign in
            </a>
          </p>

          {/* Message */}
          {message && (
            <p
              className={`mt-4 text-sm ${
                message.includes("Success") ? "text-green-600" : "text-red-600"
              }`}
            >
              {message}
            </p>
          )}
        </div>
      </div>
    </>
  );
}
