import { useAuth } from "../auth/AuthContext";

function Homepage() {
  const { user } = useAuth();
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#4F70FD]">
      <div className="bg-white p-10 rounded-2xl shadow-lg text-center">
        <h1 className="text-3xl font-bold mb-4">Welcome to Xporade!</h1>
        <p className="text-gray-600 mb-6">You are logged in as: {user.name}</p>
      </div>
    </div>
  );
}

export default Homepage;
