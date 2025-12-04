import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setMessage("Login Success!");
      setTimeout(() => navigate("/"), 1000);
    } catch (error: any) {
      setMessage(error.message);
      setLoading(false);
    }
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-[#4F70FD] relative overflow-hidden">
        {/* Decorative Elements - Top Right */}
        <img
          src={`Img_Login/Group 11.png`}
          className="absolute top-[10px] right-[69px] w-[80px] select-none pointer-events-none"
          alt="decoration"
        />

        {/* Decorative Elements - Bottom Left */}
        <img
          src={`Img_Login/Group 10.png`}
          className="absolute bottom-[10px] left-[69px] w-[80px] select-none pointer-events-none"
          alt="decoration"
        />

        {/* Decorative Elements - Top Left */}
        <img
          src={`Img_Login/Vector.png`}
          className="absolute top-[0px] left-[0px] w-[140px] select-none pointer-events-none"
          alt="decoration"
        />

        {/* Decorative Elements - Bottom Right */}
        <img
          src={`Img_Login/Group 7.png`}
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
          <h1 className="text-3xl font-bold mt-12">Login</h1>
          <p className="text-gray-600 mt-1 mb-6">Welcome Back to Xporade!</p>

          {/* Form */}
          <form
            action=""
            className="w-full flex flex-col gap-4"
            onSubmit={handleSubmit}
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full p-4 rounded-xl border-2 border-black focus:outline-none"
            />

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full p-4 rounded-xl border-2 border-black focus:outline-none"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#4F70FD] text-white py-3 rounded-xl text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          {/* Sign Up */}
          <p className="mt-5 text-black text-sm">
            Don't have an account?{" "}
            <a href="/signup" className="text-blue-600 underline">
              Sign Up
            </a>
          </p>

          {/* Message */}
          {message && (
            <p className={`mt-4 text-sm ${message.includes("Success") ? "text-green-600" : "text-red-600"}`}>
              {message}
            </p>
          )}
        </div>
      </div>
    </>
  );
}
