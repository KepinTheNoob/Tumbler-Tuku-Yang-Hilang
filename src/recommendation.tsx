export default function HSCodeRecommendation() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Header */}
      <header className="w-full bg-[#F4FAFF] shadow-sm py-4 px-8 flex justify-between items-center">
        <div className="flex items-center space-x-2 text-2xl font-bold text-blue-600">
          <img src="/Img_Home/logo.png" alt="" className="h-[10vh] w-auto" />
        </div>
        <nav className="space-x-6 text-black-600">
          <a href="#" className="hover:text-black-600">
            Home
          </a>
          <a href="#" className="hover:text-black-600">
            Features
          </a>
          <a href="#" className="hover:text-black-600">
            Pricing
          </a>
          <a href="#" className="hover:text-black-600">
            About
          </a>
        </nav>
        <div className="flex items-center space-x-2">
          <span className="text-gray-700">Ellen</span>
          <div className="w-8 h-8 bg-blue-300 rounded-full"></div>
        </div>
      </header>

      {/* Title Section */}
      <section className="px-8 py-8 bg-[linear-gradient(to_right,#BFE3FF_0%,#EEF8FF_100%,transparent_100%)]">
        <a href="#" className="text-sm text-blue-600">
          ← Back to input form
        </a>
        <h1 className="text-3xl font-bold mt-4">HS Code Recommendation</h1>
        <p className="text-gray-600 mt-1">
          AI-powered analysis for your export product
        </p>

        <div className="flex space-x-4 mt-4">
          <button className="px-4 py-2 bg-transparent gap-2 text-white rounded-md flex border-2 border-solid">
            <span>Share</span>
            <img
              src="Img_Recommendation/share.png"
              alt=""
              className="h-[25px] w-auto"
            />
          </button>
          <button className="px-4 py-2 bg-[#1F74E2] text-white rounded-md flex items-center space-x-2">
            <span>Export Report</span>
            <img
              src="Img_Recommendation/download.png"
              alt=""
              className="h-[25px] w-auto"
            />
          </button>
        </div>
      </section>

      {/* Recommended HS Codes */}
      <section className="px-8 py-4 space-y-4">
        <h2 className="text-xl font-semibold">Recommended HS Code</h2>

        <div className="border bg-white p-4 rounded-lg shadow-sm">
          <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded">
            Best Match
          </span>
          <h3 className="text-2xl font-bold text-blue-700 mt-2">0901.21.00</h3>
          <p className="text-gray-600">
            Coffee, not roasted, not decaffeinated
          </p>
          <div className="flex justify-between items-center mt-2">
            <span className="text-green-600 font-bold text-lg">
              95% Confidence
            </span>
            <button className="px-3 py-1 bg-blue-600 text-white rounded-md">
              Select This Code
            </button>
          </div>
        </div>

        <div className="border bg-white p-4 rounded-lg shadow-sm">
          <h3 className="text-2xl font-bold text-blue-700">0901.11.00</h3>
          <p className="text-gray-600">Coffee, not roasted, decaffeinated</p>
          <div className="flex justify-between items-center mt-2">
            <span className="text-green-600 font-bold text-lg">
              75% Confidence
            </span>
            <button className="px-3 py-1 bg-blue-600 text-white rounded-md">
              Select This Code
            </button>
          </div>
        </div>
      </section>

      {/* Summary and Regulations */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-8 mt-8">
        {/* Product Summary */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-4">Product Summary</h3>
          <ul className="space-y-2 text-gray-700">
            <li>
                <div className="flex gap-1">
                    <div>
                        <img src="Img_Recommendation/cube.png" alt="" />
                    </div>
                    <div>
                        <h1>Product Name</h1>
                        <p>Organic Coffee Beans</p>
                    </div>
                </div>
            </li>
            <li>
              <strong>Materials:</strong> Arabica Coffee
            </li>
            <li>
              <strong>Category:</strong> Food & Beverages
            </li>
            <li>
              <strong>Destination Country:</strong> United States
            </li>
          </ul>
        </div>

        {/* Export Readiness */}
        <div className="bg-[#FFF2D7] p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-4">Export Readiness Score</h3>
          <div className="text-5xl font-bold text-yellow-500">75%</div>
          <p className="text-[#D3A14A]">Needs Attention</p>
        </div>
      </section>

      {/* Regulations & Checklist */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-4 md:px-8 mt-6">
        {/* --- Card 1: Export Regulations --- */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-5">
            <div className="p-2 bg-blue-50 rounded text-blue-600">
              {/* Icon: FileText */}
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <line x1="10" y1="9" x2="8" y2="9" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-800">
              Export Regulations
            </h3>
          </div>

          <div className="space-y-4">
            {/* Regulation Item 1 */}
            <div className="p-4 bg-sky-50/50 border border-sky-100 rounded-lg flex gap-3 items-start">
              {/* Icon: Alert Triangle (Red) */}
              <svg
                className="text-red-500 shrink-0 mt-0.5"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                <line x1="12" y1="9" x2="12" y2="13" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="font-semibold text-gray-800 text-sm">
                    FDA Food Facility Registration
                  </span>
                  <span className="bg-red-500 text-white text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-wide">
                    Required
                  </span>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  All food facilities that manufacture, process, pack, or hold
                  food for human or animal consumption in the U.S. must register
                  with FDA.
                </p>
              </div>
            </div>

            {/* Regulation Item 2 */}
            <div className="p-4 bg-sky-50/50 border border-sky-100 rounded-lg flex gap-3 items-start">
              {/* Icon: Alert Triangle (Red) */}
              <svg
                className="text-red-500 shrink-0 mt-0.5"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                <line x1="12" y1="9" x2="12" y2="13" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="font-semibold text-gray-800 text-sm">
                    Phytosanitary Certificate
                  </span>
                  <span className="bg-red-500 text-white text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-wide">
                    Required
                  </span>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Required for plant-based products to ensure they meet the
                  importing country's plant health standards.
                </p>
              </div>
            </div>

            {/* Regulation Item 3 */}
            <div className="p-4 bg-yellow-50/50 border border-yellow-100 rounded-lg flex gap-3 items-start">
              {/* Icon: Alert Triangle (Yellow) */}
              <svg
                className="text-yellow-600 shrink-0 mt-0.5"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                <line x1="12" y1="9" x2="12" y2="13" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="font-semibold text-gray-800 text-sm">
                    Organic Certification (USDA)
                  </span>
                  <span className="bg-yellow-500 text-white text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-wide">
                    Attention
                  </span>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  If labeled as organic, products must be certified by a
                  USDA-accredited certifying agent.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* --- Card 2: Export Checklist --- */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 h-fit">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-blue-50 rounded text-blue-600">
              {/* Icon: Clipboard/Checklist */}
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
                <path d="M9 14l2 2 4-4" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-800">
                Export Checklist
              </h3>
              <p className="text-xs text-gray-500 font-medium">
                1 of 3 items ready
              </p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-gray-100 rounded-full h-1.5 mb-6 mt-2">
            <div
              className="bg-blue-600 h-1.5 rounded-full shadow-sm"
              style={{ width: "33%" }}
            ></div>
          </div>

          <div className="space-y-3">
            {/* Checklist Item 1 (Complete) */}
            <div className="flex gap-3 bg-green-50 p-4 rounded-lg border border-green-100 items-start">
              <div className="mt-0.5 text-green-600 shrink-0">
                {/* Icon: Check Circle (Filled) */}
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="none"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-bold text-gray-800">
                  Product Classification Complete
                </p>
                <p className="text-xs text-gray-600 mt-0.5">
                  HS Code has been identified and verified
                </p>
              </div>
            </div>

            {/* Checklist Item 2 (Incomplete) */}
            <div className="flex gap-3 bg-sky-50/30 p-4 rounded-lg border border-sky-100 items-start">
              <div className="mt-0.5 text-gray-400 shrink-0">
                {/* Icon: Circle (Outline) */}
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-700">
                  Certificate of Origin
                </p>
                <p className="text-xs text-gray-500 mt-0.5">
                  COO from authorized Indonesian chamber
                </p>
              </div>
            </div>

            {/* Checklist Item 3 (Incomplete) */}
            <div className="flex gap-3 bg-sky-50/30 p-4 rounded-lg border border-sky-100 items-start">
              <div className="mt-0.5 text-gray-400 shrink-0">
                {/* Icon: Circle (Outline) */}
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-700">
                  Phytosanitary Certificate
                </p>
                <p className="text-xs text-gray-500 mt-0.5">
                  Plant health inspection certificate
                </p>
              </div>
            </div>
          </div>
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
    </div>
  );
}
