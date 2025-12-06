export default function Home() {
  return (
    <div className="font-sans text-gray-800">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-3 shadow-sm bg-[#F4FAFF]">
        <img
          src="Img_Home/logo.png"
          className="h-[60px] w-auto object-contain"
        />
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

      {/* Hero Section */}
      <section className="py-20 bg-[#F3FAFF] px-20">
        <div className="max-w-4xl mx-auto text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1A66A2] leading-tight animate-fade-in">
            Empowering UMKM to <br /> grow beyond the borders
          </h1>

          <p className="mt-4 max-w-2xl text-[#1A66A2] animate-fade-in delay-150 text-sm">
            From rising UMKM to established exporters, thousands of businesses
            trust AI Export Advisor to navigate HS Codes, regulations, and
            international requirements with accuracy. Discover how we help
            Indonesian products reach global shelves.
          </p>

          <button className="mt-6 px-8 py-2 bg-[#35B7FA] text-white rounded-xl hover:bg-blue-700 transition animate-fade-in delay-300 font-semibold">
            Register
          </button>

          <div className="mt-10 animate-fade-in delay-500">
            <img
              src="Img_Home/building.png"
              alt="Building"
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* Key Points */}
      <section
        className="relative py-16 px-4 
before:absolute before:inset-1 before:top-20 before:left-0 before:right-0 before:pointer-events-none before:-z-10
before:bg-[linear-gradient(-9deg,transparent_40%,#7993FE_40%,#7993FE_65%,transparent_65%)] before:opacity-[0.17]"
      >
        <h2 className="text-3xl font-bold text-center text-[#1A66A2] mb-10">
          Key Points
        </h2>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center relative">
          {[
            {
              title: "High Recommendation Accuracy",
              img: "Img_Home/plane.png",
            },
            { title: "Regulations by Country", img: "Img_Home/globe.png" },
            {
              title: "Ready to Use for Any Product",
              img: "Img_Home/cube.png",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-6 bg-[#F5F5F5] shadow rounded-xl hover:shadow-lg transition duration-300 animate-slide-up"
            >
              <img
                src={item.img}
                className="w-9 h-auto mx-auto mb-4 object-contain"
                alt={item.title}
              />
              <h3 className="font-semibold text-gray-800">{item.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Challenges */}
      <section className="py-16 bg-[#E8F6FF]/47 px-4 grid grid-cols-1 md:grid-cols-3 items-center gap-10">
        {/* Image */}
        <div className="flex justify-center">
          <img
            src="Img_Home/building2.png"
            alt=""
            className="max-w-[300px] w-full"
          />
        </div>

        {/* Text */}
        <div className="md:col-span-2 mx-auto max-w-xl text-left">
          <h2 className="text-4xl font-bold text-[#253D6D] mb-6">
            Challenges for UMKM When Starting to Export
          </h2>

          <p className="text-black-600">
            Many UMKM struggle to determine the correct HS Code, understand
            export regulations, document needs, restrictions, and shipping
            rules. Mistakes can lead to delays, fees, or goods being rejected at
            customs.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4">
        <h2 className="text-5xl font-bold text-center text-[#2F77B0] mb-10">
          How It Works
        </h2>

        <div className="flex gap-2">
          <div className="max-w-4xl mx-auto space-y-8">
            {[
              {
                step: "Step 1 — Product Input",
                desc: "Enter your product name, materials, category, and select the destination country.",
              },
              {
                step: "Step 2 — AI Analysis",
                desc: "Our AI searches HS Code information and aligns it with destination-country export regulations.",
              },
              {
                step: "Step 3 — Export Ready Checklist",
                desc: "Receive a list of required documents, country-specific requirements, and your product’s export readiness status.",
              },
            ].map((item, idx) => (
              <div key={idx} className="animate-slide-up">
                <h3 className="font-semibold text-xl text-[#2F77B0]">
                  {item.step}
                </h3>
                <p className="text-[#2F77B0]">{item.desc}</p>
              </div>
            ))}
          </div>
          <div>
            <img src="Img_Home/building3.png" alt="" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-16 bg-[#2F77B0] text-white text-center px-4 bg-[url('/Img_Home/background.png')] bg-no-repeat bg-cover bg-center"
      >
        <div className="text-left max-w-xl">
          <p className="text-lg">Let's Move Forward Together</p>
          <h2 className="text-4xl font-semibold leading-tight">
            Ready to Export Your Products to the Global Market?
          </h2>
          <p className="mt-4 text-lg">
            Get HS Code recommendations and check export regulations instantly.
          </p>
        </div>
        <div className="flex md:justify-end w-full md:w-auto">
          <button className="mt-6 px-8 py-3 bg-[#253D6D] text-white font-semibold rounded-xl hover:opacity-90 transition">
            Get Started
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#101010] text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* --- ROW 1: Main Grid (3 Columns) --- */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
            {/* 1. Logo & Description */}
            <div>
              <img
                src="/Img_Home/logo2.png"
                alt="Xporade Logo"
                className="h-[15vh] w-auto object-contain mb-4"
              />
              <p className="text-gray-300 text-sm leading-relaxed">
                We have helped thousands of businesses — from rising UMKM to
                established exporters navigate HS Codes, regulations, and
                international requirements with accuracy, bringing Indonesian
                products to global shelves.
              </p>
            </div>

            {/* 2. Pages */}
            <div>
              <h3 className="font-semibold mb-6 text-3xl">Pages</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="hover:text-white cursor-pointer transition">
                  Features
                </li>
                <li className="hover:text-white cursor-pointer transition">
                  Pricing
                </li>
                <li className="hover:text-white cursor-pointer transition">
                  About Us
                </li>
              </ul>
            </div>

            {/* 3. Address */}
            <div>
              <h3 className="font-semibold mb-4 text-3xl">Address</h3>

              <div className="flex gap-1">
                <img
                  src="/Img_Home/location.png"
                  alt=""
                  className="h-[5vh] w-auto"
                />

                <p className="text-white">
                  Jl. Cempaka Putih Timur No. 88, Jakarta Pusat
                </p>
              </div>
            </div>
          </div>

          {/* --- ROW 2: Contact Us (Separate Row) --- */}
          <div className="mb-12">
            <h3 className="font-semibold mb-6 text-2xl">Contact Us</h3>
            <ul className="space-y-4 text-gray-300">
              {/* Facebook */}
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <span className="text-sm">Xporade.id</span>
              </li>

              {/* Instagram */}
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <span className="text-sm">@Xporade_AI</span>
              </li>

              {/* X (Twitter) */}
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                </svg>
                <span className="text-sm">@Xporade_</span>
              </li>

              {/* LinkedIn */}
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                <span className="text-sm">Xporade</span>
              </li>
            </ul>
          </div>

          {/* --- ROW 3: Copyright (Bottom) --- */}
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-500 text-sm">
              &copy; 2025 All rights reserved. Served by Xporade.
            </p>
          </div>
        </div>
      </footer>

      {/* Tailwind Animations */}
      <style>{`
        .animate-fade-in {
          opacity: 0;
          animation: fadeIn 0.8s forwards;
        }
        .animate-slide-up {
          opacity: 0;
          transform: translateY(20px);
          animation: slideUp 0.7s forwards;
        }
        @keyframes fadeIn {
          to { opacity: 1; }
        }
        @keyframes slideUp {
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
