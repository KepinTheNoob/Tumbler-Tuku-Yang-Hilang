import { useLocation } from "react-router-dom";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

export default function HSCodeRecommendation() {
  const { state } = useLocation();

  if (!state) {
    return (
      <div className="p-5">
        <h1 className="text-xl font-bold">No data received</h1>
        <p>Please go back and submit the form again.</p>
      </div>
    );
  }

  const data = state;

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

        {data.recommended_hs_codes.map((item: any, index: number) => (
          <div key={index} className="border bg-white p-4 rounded-lg shadow-sm">
            {index === 0 && (
              <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded">
                Best Match
              </span>
            )}

            <h3 className="text-2xl font-bold text-blue-700 mt-2">
              {item.hs_code}
            </h3>

            <p className="text-gray-600">{item.description}</p>

            <div className="flex justify-between items-center mt-2">
              <span className="text-green-600 font-bold text-lg">
                {item.confidence}% Confidence
              </span>
              <button className="px-3 py-1 bg-blue-600 text-white rounded-md">
                Select This Code
              </button>
            </div>
          </div>
        ))}
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
                  <p>{data.product_summary.product_name}</p>
                </div>
              </div>
            </li>
            <li>
              <strong>Materials:</strong>{" "}
              {data.product_summary.materials ?? "—"}
            </li>
            <li>
              <strong>Category:</strong> {data.product_summary.category}
            </li>
            <li>
              <strong>Destination Country:</strong>{" "}
              {data.product_summary.destination_country}
            </li>
          </ul>
        </div>

        {/* Export Readiness */}
        <div className="bg-[#FFF2D7] p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-4">Export Readiness Score</h3>
          <div className="text-5xl font-bold text-yellow-500">
            {data.export_readiness.score_percentage}%
          </div>
          <p className="text-[#D3A14A]">{data.export_readiness.status}</p>
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

          {data.export_regulations.map((reg: any, idx: any) => (
            <div
              key={idx}
              className="p-4 bg-sky-50 border rounded-lg flex gap-3"
            >
              <div>
                <span className="font-semibold">{reg.name}</span>
                <span className="ml-2 px-2 py-1 text-xs rounded bg-red-500 text-white">
                  {reg.requirement}
                </span>
                <p className="text-xs text-gray-600">{reg.notes}</p>
              </div>
            </div>
          ))}
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
            {data.export_readiness.checklist.map((item: any, idx: any) => (
              <div key={idx} className="flex gap-3 p-4 rounded-lg border">
                <div>{item.completed ? "✅" : "⭕"}</div>
                <div>
                  <p className="text-sm font-semibold">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
