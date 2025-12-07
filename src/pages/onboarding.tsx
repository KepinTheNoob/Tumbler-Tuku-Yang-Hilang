import { useLocation, useNavigate } from "react-router-dom";
import Dropdown from "../component/dropdown";
import Navbar from "../components/navbar";
import { CategoryData } from "../data/categoryData";
import { useState } from "react";

type formData = {
  productName: "Organic Coffee Beans";
  category: "Food & Beverages";
  description: "High-quality Arabica coffee beans...";
  tradeRoute: "Indonesia to United States";
  hsCode: "0901.21.00";
  exportVolume: 50000;
};

export default function Onboarding() {
  const navigate = useNavigate();

  const [productName, setProductName] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [tradeRoute, setTradeRoute] = useState("");
  const [hsCode, setHsCode] = useState("");
  const [exportVolume, setExportVolume] = useState("");

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async () => {
    setErrorMsg("");
    setLoading(true);

    const prompt = `You are an expert trade compliance and HS code classification assistant.
                   Based on the user's product and trade information, you must analyze the data 
                   and generate accurate HS code recommendations and export readiness details.
   
                   ### USER INPUT DATA
                   Product Name: ${productName}
                   Product Category: ${productCategory}
                   Product Description: ${productDescription}
                   Primary Trade Route: ${tradeRoute}
                   Annual Export Volume: ${exportVolume}
   
                   ### YOUR TASK
                   1. Recommend the TOP 2 most suitable HS codes.
                   2. Provide a short explanation for each HS code.
                   3. Assign a confidence percentage (0-100%) for each HS code.
                   4. Generate a clear product summary based on the data.
                   5. Identify all export regulations the exporter must comply with.
                   6. Generate an export readiness score and checklist.
   
                   ### OUTPUT FORMAT
                   Return your result ONLY in the following JSON structure:
   
                   {
                   "recommended_hs_codes": [
                       {
                       "hs_code": "string",
                       "description": "string",
                       "confidence": number
                       },
                       {
                       "hs_code": "string",
                       "description": "string",
                       "confidence": number
                       }
                   ],
                   "product_summary": {
                       "product_name": "string",
                       "category": "string",
                       "materials": "string or null",
                       "destination_country": "string"
                   },
                   "export_regulations": [
                       {
                       "name": "string",
                       "requirement": "Required | Optional",
                       "notes": "string"
                       }
                   ],
                   "export_readiness": {
                       "score_percentage": number,
                       "status": "Ready | Needs Attention | Not Ready",
                       "checklist": [
                       {
                           "title": "string",
                           "completed": boolean
                       }
                       ]
                   }
                   }
   
                   ### RULES
                   - Confidence values must be between 0 and 100.
                   - All text must be concise and professional.
                   - If user information is incomplete, infer the most reasonable assumptions.
                   - DO NOT include any text outside the JSON.
                   `;

    try {
      const response = await fetch(
        "https://api.kolosal.ai/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
          },
          body: JSON.stringify({
            model: "meta-llama/llama-4-maverick-17b-128e-instruct",
            max_tokens: 1000,
            messages: [{ role: "user", content: prompt }],
          }),
        }
      );

      console.log("STATUS:", response.status);

      const raw = await response.text();
      console.log("RAW RESPONSE:", raw);

      if (!response.ok) throw new Error("API request failed");

      const json = JSON.parse(raw);
      console.log("PARSED JSON:", json);

      const resultText = json.choices?.[0]?.message?.content;
      console.log("MODEL OUTPUT:", resultText);
      
      if (!resultText) throw new Error("Invalid API response");

      let resultObject;
      try {
        resultObject = JSON.parse(resultText);
      } catch {
        throw new Error("Model returned invalid JSON");
      }

      navigate("/recommendation", { state: resultObject });
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error(err.message);
        setErrorMsg(err.message);
      } else {
        console.error("Unknown error:", err);
        setErrorMsg("Unknown error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <header className="bg-[#2F77B0] flex justify-start align-middle flex-col md:px-16 md:py-11  px-8 py-5 rounded-b-3xl border-t-0">
        <img
          src={`Onboarding/xporade_black_white.png`}
          alt="xporade_logo"
          className="lg:w-[300px] w-[200px]"
        />
        <p className=" text-white font-[Arial] ml-5 lg:text-3xl sm:text-xl text-base">
          Let's get to know your product
        </p>
      </header>
      <form
        className="px-10 py-5 sm:px-20 sm:py-9"
        onSubmit={(e) => {
          e.preventDefault();
          if (!loading) handleSubmit();
        }}
      >
        {errorMsg && (
          <p className="mb-4 font-semibold text-red-600">{errorMsg}</p>
        )}
        <h1 className="font-[Arial] text-2xl  font-bold text-black lg:text-6xl sm:text-4xl">
          Product Information
        </h1>
        <p className="font-[Arial] text-black text-base  opacity-60 lg:text-3xl sm:text-xl">
          Let's get to know your product
        </p>
        <section className="flex flex-col justify-start gap-6 py-8 align-middle border-b sm:gap-11 border-b-black/55 ">
          <div className="flex flex-col justify-start gap-2 align-middle">
            <h2 className="text-lg font-bold font-[Arial] lg:text-4xl sm:text-2xl">
              Product Name *
            </h2>
            <input
              type="text"
              className="w-full px-4 py-3 font-[Arial] text-[rgba(0,0,0,0.65)] text-lg sm:text-2xl shadow-[1px_1px_6.8px_2px_rgba(0,0,0,0.25)] lg:text-4xl"
              placeholder="e.g., Organic Cotton T-Shirts"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col justify-start gap-2 align-middle">
            <h2 className="text-lg font-bold sm:text-2xl lg:text-4xl">
              Product Category *
            </h2>
            <Dropdown
              options={CategoryData}
              placeholder="Select a Category"
              onChange={(value: string) => setProductCategory(value)}
            />
          </div>
          <div className="flex flex-col justify-start gap-2 align-middle">
            <h2 className="text-lg font-bold sm:text-2xl lg:text-4xl">
              Product Description
            </h2>
            <textarea
              className="w-full font-[Arial] h-56 p-4 text-lg sm:text-2xl lg:text-4xl shadow-[1px_1px_6.8px_2px_rgba(0,0,0,0.25)]
                resize-none align-top text-[rgba(0,0,0,0.65)]"
              placeholder="Describe your product, key features, and specifications..."
            ></textarea>
          </div>
        </section>
        <section className="flex flex-col justify-start py-8 align-middle border-b sm:gap-14 gap-7 border-b-black/55 ">
          <h1 className="text-2xl font-bold text-black lg:text-6xl sm:text-4xl">
            Trade Information
          </h1>
          <div className="flex flex-col justify-start gap-2 align-middle">
            <h2 className="font-[Arial] text:lg sm:text-2xl font-bold lg:text-4xl">
              Primary Trade Route *
            </h2>
            <input
              type="text"
              className="w-full px-4 py-3 font-[Arial] text-lg sm:text-2xl lg:text-4xl shadow-[1px_1px_6.8px_2px_rgba(0,0,0,0.25)]"
              placeholder="e.g., India to United States"
              value={tradeRoute}
              onChange={(e) => setTradeRoute(e.target.value)}
              required
            />
          </div>
        </section>
        <section className="flex flex-col justify-start py-8 align-middle sm:gap-14 gap-7">
          <h1 className="font-[Arial]  text-2xl font-bold text-black lg:text-6xl sm:text-4xl">
            Export Volume
          </h1>
          <div className="flex flex-col justify-start gap-2 align-middle">
            <h2 className="font-[Arial] text-lg sm:text-2xl font-bold lg:text-4xl">
              Annual Export Volume (Units) *
            </h2>
            <input
              type="number"
              className="w-full h-20  px-4 py-3 font-[Arial] text-lg sm:text-2xl lg:text-4xl shadow-[1px_1px_6.8px_2px_rgba(0,0,0,0.25)]"
              placeholder="e.g., 50000"
              value={exportVolume}
              onChange={(e) => setExportVolume(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full font-[Arial] bg-[#1F74E2] text-base lg:text-3xl sm:text-xl text-white sm:py-8 py-4 rounded-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white hover:text-[#1F74E2] hover:border-2 border-[#1F74E2]"
          >
            {loading ? "Processing..." : "Complete Onboarding"}
          </button>
          <p className="text-sm text-center text-black sm:text-lg lg:text-2xl opacity-55">
            By completing this form, you agree to our Terms of Service and
            Privacy Policy.
          </p>
        </section>
      </form>
    </>
  );
}
