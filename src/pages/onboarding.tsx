import { Link } from "react-router-dom";
import Dropdown from "../component/dropdown";
import Navbar from "../components/navbar";
import { CategoryData } from "../data/categoryData";

export default function Onboarding() {
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
      <form className="px-10 py-5 sm:px-20 sm:py-9">
        <h1 className="font-[Arial] text-2xl  font-bold text-black lg:text-6xl sm:text-4xl">
          Product Information
        </h1>
        <p className="font-[Arial] text-black text-base  opacity-60 lg:text-3xl sm:text-xl">
          Let's get to know your product
        </p>
        <section className="flex flex-col justify-start gap-6 py-8 align-middle border-b sm:gap-11 border-b-black/55 ">
          <div className="flex flex-col justify-start gap-2 align-middle">
            <h2 className="text-lg font-bold font-[Arial] lg:text-4xl sm:text-2xl">
              Product Name<span className="text-red-600">*</span>
            </h2>
            <input
              type="text"
              className="w-full px-4 py-3 font-[Arial] text-[rgba(0,0,0,0.65)] text-lg sm:text-2xl shadow-[1px_1px_6.8px_2px_rgba(0,0,0,0.25)] lg:text-4xl"
              placeholder="e.g., Organic Cotton T-Shirts"
              required
            />
          </div>
          <div className="flex flex-col justify-start gap-2 align-middle">
            <h2 className="text-lg font-bold sm:text-2xl lg:text-4xl">
              Product Category<span className="text-red-600">*</span>
            </h2>
            <Dropdown options={CategoryData} placeholder="Select a Category" />
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
              Primary Trade Route<span className="text-red-600">*</span>
            </h2>
            <input
              type="text"
              className="w-full px-4 py-3 font-[Arial] text-lg sm:text-2xl lg:text-4xl shadow-[1px_1px_6.8px_2px_rgba(0,0,0,0.25)]"
              placeholder="e.g., India to United States"
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
              Annual Export Volume (Units)<span className="text-red-600">*</span>
            </h2>
            <input
              type="number"
              className="w-full h-20  px-4 py-3 font-[Arial] text-lg sm:text-2xl lg:text-4xl shadow-[1px_1px_6.8px_2px_rgba(0,0,0,0.25)]"
              placeholder="e.g., 50000"
              required
            />
          </div>
          <Link to="/recommendation">
            <button
              type="submit"
              className="w-full font-[Arial] bg-[#1F74E2] text-base lg:text-3xl sm:text-xl text-white sm:py-8 py-4 rounded-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white hover:text-[#1F74E2] hover:border-2 border-[#1F74E2]"
            >
              Complete Onboarding
            </button>
          </Link>
          <p className="text-sm text-center text-black sm:text-lg lg:text-2xl opacity-55">
            By completing this form, you agree to our Terms of Service and
            Privacy Policy.
          </p>
        </section>
      </form>
    </>
  );
}
