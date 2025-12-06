import Footer from "./components/footer";
import Navbar from "./components/navbar";

export default function HSCodeRecommendation() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Header */}
      <Navbar />

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
      <Footer />
    </div>
  );
}
