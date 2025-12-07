import { Link } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

export default function Navbar() {
  const { user } = useAuth();

  return (
    <nav className="flex justify-between items-center p-3 shadow-sm bg-[#F4FAFF]">
      <img src="Img_Home/logo.png" className="h-[60px] w-auto object-contain" />
      <ul className="hidden md:flex gap-8 text-gray-600">
        <li>
          <a href="/home" className="font-(family-name:Aptos)">
            Home
          </a>
        </li>
        <li>
          <a href="/onboarding">Form</a>
        </li>
      </ul>

      {user ? (
        <div className="flex items-center gap-4">
          <span className="text-sm font-medium">Hello, {user.name}</span>
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
