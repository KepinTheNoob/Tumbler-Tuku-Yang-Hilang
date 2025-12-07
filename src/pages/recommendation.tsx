import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";


export default function HSCodeRecommendation() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const handleExportPDF = () => {
    if (!data) return;

    const pdf = new jsPDF();
    const marginLeft = 15;
    let y = 15;

    // Header Title
    pdf.setFont("Helvetica", "bold");
    pdf.setFontSize(20);
    pdf.text("HS Code Recommendation Report", marginLeft, y);
    y += 10;

    // Product Summary
    pdf.setFontSize(14);
    pdf.setFont("Helvetica", "bold");
    pdf.text("Product Summary", marginLeft, y);
    y += 6;

    pdf.setDrawColor(220, 220, 220);
    pdf.setFillColor(248, 248, 248);
    pdf.roundedRect(marginLeft, y, 180, 30, 3, 3, "F");
    y += 10;

    pdf.setFont("Helvetica", "normal");
    pdf.setFontSize(12);
    pdf.text(
      `Product Name: ${data.product_summary.product_name}`,
      marginLeft + 5,
      y
    );
    y += 7;
    pdf.text(`Materials: ${data.product_summary.materials}`, marginLeft + 5, y);
    y += 7;
    pdf.text(`Category: ${data.product_summary.category}`, marginLeft + 5, y);
    y += 15;

    // Table Recommend HS Code
    pdf.setFontSize(14);
    pdf.setFont("Helvetica", "bold");
    pdf.text("Recommended HS Codes", marginLeft, y);
    y += 6;

    autoTable(pdf, {
      startY: y,
      head: [["HS Code", "Confidence (%)", "Description"]],
      body: data.recommended_hs_codes.map((item: any) => [
        item.hs_code,
        item.confidence,
        item.description ?? "-",
      ]),
      styles: {
        fontSize: 11,
        cellPadding: 4,
      },
      headStyles: {
        fillColor: [40, 40, 40],
        textColor: 255,
        fontStyle: "bold",
      },
      alternateRowStyles: {
        fillColor: [245, 245, 245],
      },
    });

    pdf.save("hs-report.pdf");
  };

  if (!state) {
    return (
      <div className="p-5">
        <button
          onClick={() => navigate("/onboarding")}
          className="flex items-center"
        >
          <img
            src="/Img_Profile/Back_button.png"
            alt="Back"
            className="h-6 mr-2"
          />
          <p className="font-semibold text-md">Back</p>
        </button>
        <h1 className="text-xl font-bold">No data received</h1>
        <p>Please go back and submit the form again.</p>
      </div>
    );
  }

  const data = state;
  const checklist = data.export_readiness.checklist || [];
  const totalItems = checklist.length;
  const completedItems = checklist.filter((item: any) => item.completed).length;

  const progressPercent =
    totalItems === 0 ? 0 : Math.round((completedItems / totalItems) * 100);

  return (
    <div className="min-h-screen font-sans text-gray-800 bg-gray-50">
      {/* Header */}
      <Navbar />

      {/* Title Section */}
      <section className="px-8 py-8 bg-[linear-gradient(to_right,#BFE3FF_0%,#EEF8FF_100%,transparent_100%)]">
        <a href="/onboarding" className="text-sm text-blue-600 hover:underline">
          ← Back to input form
        </a>
        <h1 className="mt-4 text-3xl font-bold">HS Code Recommendation</h1>
        <p className="mt-1 text-gray-600">
          AI-powered analysis for your export product
        </p>
        <div className="flex mt-4 space-x-4" id="report-content">
          <button
            onClick={handleExportPDF}
            className="px-4 py-2 bg-[#1F74E2] text-white rounded-md flex items-center space-x-2"
          >
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
          <div key={index} className="p-4 bg-white border rounded-lg shadow-sm">
            {index === 0 && (
              <span className="px-2 py-1 text-xs text-white bg-blue-600 rounded">
                Best Match
              </span>
            )}

            <h3 className="mt-2 text-2xl font-bold text-blue-700">
              {item.hs_code}
            </h3>

            <p className="text-gray-600">{item.description}</p>

            <div className="flex items-center justify-between mt-2">
              <span className="text-lg font-bold text-green-600">
                {item.confidence}% Confidence
              </span>
            </div>
          </div>
        ))}
      </section>

      {/* Summary and Regulations */}
      <section className="grid grid-cols-1 gap-6 px-8 mt-8 lg:grid-cols-2">
        {/* Product Summary */}
        <div className="p-6 bg-white rounded-lg shadow-sm">
          <h3 className="mb-4 text-xl font-semibold">Product Summary</h3>
          <ul className="space-y-2 text-gray-700">
            <li>
              <div className="flex gap-1">
                <div>
                  <img src="Img_Recommendation/cube.png" alt="" />
                </div>
                <div>
                  <h1 className="font-bold">Product Name</h1>
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
          <h3 className="mb-4 text-xl font-semibold">Export Readiness Score</h3>
          <div className="text-5xl font-bold text-yellow-500">
            {data.export_readiness.score_percentage}%
          </div>
          <p className="text-[#D3A14A]">{data.export_readiness.status}</p>
        </div>
      </section>

      {/* Regulations & Checklist */}
      <section className="grid grid-cols-1 gap-6 px-4 mt-6 lg:grid-cols-2 md:px-8">
        {/* --- Card 1: Export Regulations --- */}
        <div className="p-6 bg-white border border-gray-200 shadow-sm rounded-xl">
          <div className="flex items-center gap-3 mb-5">
            <div className="p-2 text-blue-600 rounded bg-blue-50">
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
            <div key={idx} className="flex p-4 border rounded-lg bg-sky-50">
              <div>
                <span className="font-semibold">{reg.name}</span>
                <span className="px-2 py-1 ml-2 text-xs text-white bg-red-500 rounded">
                  {reg.requirement}
                </span>
                <p className="text-xs text-gray-600">{reg.notes}</p>
              </div>
            </div>
          ))}
        </div>

        {/* --- Card 2: Export Checklist --- */}
        <div className="p-6 bg-white border border-gray-200 shadow-sm rounded-xl h-fit">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 text-blue-600 rounded bg-blue-50">
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
              <p className="text-xs font-medium text-gray-500">
                1 of 3 items ready
              </p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-gray-100 rounded-full h-1.5 mb-6 mt-2">
            <div
              className="bg-blue-600 h-1.5 rounded-full shadow-sm"
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>

          <div className="space-y-3">
            {/* Checklist Item 1 (Complete) */}
            {data.export_readiness.checklist.map((item: any, idx: any) => (
              <div key={idx} className="flex gap-3 p-4 border rounded-lg">
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

