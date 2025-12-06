export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-3 shadow-sm bg-[#F4FAFF]">
      <img src="Img_Home/logo.png" className="h-[60px] w-auto object-contain" />
      <ul className="hidden md:flex gap-8 text-gray-600">
        <li>
          <a href="#" className="font-(family-name:Aptos)">
            Home
          </a>
        </li>
        <li>
          <a href="/onboarding">Form</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
      </ul>
      <button className="px-4 py-1 bg-[#35B7FA] text-white rounded-full hover:opacity-90 transition font-bold">
        Login
      </button>
    </nav>
  );
}
