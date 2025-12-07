import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { useAuth } from "../auth/AuthContext";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";
import { monthlyActivityData } from "../data/monthlyActivityData";
import { topCountriesData } from "../data/topCountriesData";

// --- 2. KOMPONEN CHART BARU ---

const AnalysisActivityChart: React.FC = () => (
  <div style={{ width: "100%", height: 300 }}>
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={monthlyActivityData}
        margin={{ top: 5, right: 30, left: -20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="analyses"
          stroke="#3b82f6"
          strokeWidth={3}
          dot={{ r: 5 }}
        />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

const TopCountriesBarChart: React.FC = () => (
  <div style={{ width: "100%", height: 300 }}>
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        layout="vertical"
        data={topCountriesData}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        {/* YAxis (Vertikal) menggunakan dataKey 'country' karena layout-nya vertikal */}
        <YAxis dataKey="country" type="category" />
        {/* XAxis (Horizontal) adalah sumbu nilai, tanpa dataKey */}
        <XAxis type="number" hide />
        <Tooltip />
        <Bar
          dataKey="analyses"
          fill="#3b82f6"
          label={{ position: "right", fill: "#000" }}
        />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

// --- 3. KOMPONEN DASHBOARD UTAMA (DIMODIFIKASI) ---

export default function Dashboard() {
  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();

  const [userName, setUsername] = useState<string>("Guest");
  const [, setLoadingData] = useState<boolean>(true);

  useEffect(() => {
    if (user && user.uid) {
      setLoadingData(true);
      const userRef = doc(db, "users", user.uid);

      const unsub = onSnapshot(
        userRef,
        (snapshot) => {
          if (snapshot.exists()) {
            // Ambil nama dari Firestore
            setUsername(snapshot.data().name || user.email || "User");
          } else {
            // Dokumen user belum ada
            setUsername(user.email || "User");
          }
          setLoadingData(false);
        },
        (err) => {
          console.error("Dashboard data fetch error:", err);
          setUsername("User"); // Fallback jika ada error
          setLoadingData(false);
        }
      );

      return () => unsub(); // Cleanup listener saat komponen di-unmount
    } else if (!authLoading) {
      // Jika auth loading selesai dan tidak ada user
      setUsername("Guest");
      setLoadingData(false);
    }

    if(!user){
        navigate("/login");
    }
  }, [user, authLoading, navigate]);

  return (
    <>
      <Navbar />
      <main className="px-8">
        <header className="py-10 space-y-3">
          <h1 className="font-bold text-[Arial] text-3xl text-center sm:text-left">
            Hello, {userName}
          </h1>
          <p className="text-[Arial] text-2xl text-center sm:text-left">
            Here's an overview of your export analysis activity
          </p>
        </header>

        {/* STATS CARDS */}
        <section className="grid grid-cols-1 pb-10 sm:grid-cols-4 xl:grid-cols-4 gap-7">
          {/* Total Analysis */}
          <div className="flex flex-row justify-between p-5 align-middle border border-gray-500 rounded-lg bg-blue-50 sm:p-9">
            <div className="flex flex-col justify-start gap-3 align-middle ">
              <p className="text-xl text-[Arial] text-gray-500">
                Total Analysis
              </p>
              <p className="text-3xl text-[Arial] font-bold ">156</p>
              <p className="text-sm text-[Arial] text-gray-500">All Time</p>
              <p className="text-sm text-[Arial] text-gray-500">
                <span className="text-green-600">+12% </span>vs last month
              </p>
            </div>
            <div className="flex flex-col justify-start gap-3 align-middle ">
              <div className="p-4 bg-blue-100 rounded-xl">
                <img src={`dashboard/checklist.png`} alt="" className="w-8" />
              </div>
            </div>
          </div>
          {/* This Month */}
          <div className="flex flex-row justify-between p-5 align-middle border border-gray-500 rounded-lg sm:p-9">
            <div className="flex flex-col justify-start gap-3 align-middle ">
              <p className="text-xl text-[Arial] text-gray-500">This Month</p>
              <p className="text-3xl text-[Arial] font-bold ">24</p>
              <p className="text-sm text-[Arial] text-gray-500">Dec 2025</p>
              <p className="text-sm text-[Arial] text-gray-500">
                <span className="text-green-600">+8% </span>vs last month
              </p>
            </div>
            <div className="flex flex-col justify-start gap-3 align-middle ">
              <div className="p-4 bg-gray-200 rounded-xl">
                <img
                  src={`dashboard/graph-increase.png`}
                  alt=""
                  className="w-8"
                />
              </div>
            </div>
          </div>
          {/* Countries */}
          <div className="flex flex-row justify-between p-5 align-middle border border-gray-500 rounded-lg sm:p-9">
            <div className="flex flex-col justify-start gap-3 align-middle ">
              <p className="text-xl text-[Arial] text-gray-500">Countries</p>
              <p className="text-3xl text-[Arial] font-bold ">18</p>
              <p className="text-sm text-[Arial] text-gray-500">
                Unique Destinations
              </p>
            </div>
            <div className="flex flex-col justify-start gap-3 align-middle ">
              <div className="p-4 bg-gray-200 rounded-xl">
                <img src={`dashboard/globe.png`} alt="" className="w-8" />
              </div>
            </div>
          </div>
          {/* Avg. Confidence */}
          <div className="flex flex-row justify-between p-5 align-middle border border-gray-500 rounded-lg bg-green-50 sm:p-9">
            <div className="flex flex-col justify-start gap-3 align-middle ">
              <p className="text-xl text-[Arial] text-gray-500">
                Avg. Confidence
              </p>
              <p className="text-3xl text-[Arial] font-bold ">91%</p>
              <p className="text-sm text-[Arial] text-gray-500">
                Recommendation Accuracy
              </p>
            </div>
            <div className="flex flex-col justify-start gap-3 align-middle ">
              <div className="p-3 bg-green-200 sm:p-5 rounded-xl">
                <img
                  src={`dashboard/clock-outline.png`}
                  alt=""
                  className="w-8"
                />
              </div>
            </div>
          </div>
        </section>

        {/* RIWAYAT ANALISIS & QUICK ACTIONS */}
        <section className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <article className="p-8 mb-2 border border-gray-500 rounded-lg lg:col-span-2">
            <h2 className="font-[Arial] sm:text-3xl text-xl text-left font-medium">
              Recent Analysis History
            </h2>
            <div className="flex flex-col justify-center gap-5 pt-7">
              {/* ... (Isi Riwayat Analisis yang sudah ada) ... */}
              <div className="flex justify-between p-10 border border-gray-400 rounded-[20px] sm:flex-row flex-col gap-7">
                <div className="flex flex-col justify-start gap-5 sm:flex-row">
                  <div className="p-4 bg-blue-100 rounded-xl">
                    <img src={`dashboard/cube.png`} alt="" />
                  </div>
                  <div className="flex flex-col justify-between gap-2">
                    <div className="flex flex-col justify-between gap-3 sm:flex-row">
                      <p className="text-lg sm:text-xl">
                        Organic Coffee Beans{" "}
                      </p>
                      <span className="px-1 bg-[#DBFFDB] flex justify-center items-center rounded-md text-[#42B540]">
                        Completed
                      </span>
                    </div>
                    <div className="flex flex-col justify-between gap-1 align-middle sm:flex-row">
                      <p className="text-sm text-gray-600">0901.21.00</p>
                      <p className="text-sm text-gray-600">United States</p>
                      <p className="text-sm text-gray-600">Dec 5, 2025</p>
                    </div>
                  </div>
                </div>
                <hr className="block border-gray-300 sm:hidden" />
                <div className="flex flex-row items-center justify-between gap-4">
                  <div className="flex flex-col justify-center gap-1 align-middle">
                    <p className="text-sm text-gray-700">Confidence</p>
                    <p className="text-4xl font-bold text-blue-700">75%</p>
                  </div>
                  <img
                    src={`dashboard/arrow-left.png`}
                    alt=""
                    className="w-3 h-6"
                  />
                </div>
              </div>
              <div className="flex justify-between p-10 border border-gray-400 rounded-[20px] sm:flex-row flex-col gap-7">
                <div className="flex flex-col justify-start gap-5 sm:flex-row">
                  <div className="p-4 bg-blue-100 rounded-xl">
                    <img src={`dashboard/cube.png`} alt="" />
                  </div>
                  <div className="flex flex-col justify-between gap-2">
                    <div className="flex flex-col justify-between gap-3 sm:flex-row">
                      <p className="text-lg sm:text-xl">
                        Organic Coffee Beans{" "}
                      </p>
                      <span className="flex items-center justify-center px-1 text-yellow-400 bg-yellow-100 rounded-md">
                        Pending
                      </span>
                    </div>
                    <div className="flex flex-col justify-between gap-1 align-middle sm:flex-row">
                      <p className="text-sm text-gray-600">0901.21.00</p>
                      <p className="text-sm text-gray-600">United States</p>
                      <p className="text-sm text-gray-600">Dec 5, 2025</p>
                    </div>
                  </div>
                </div>
                <hr className="block border-gray-300 sm:hidden" />
                <div className="flex flex-row items-center justify-between gap-4">
                  <div className="flex flex-col justify-center gap-1 align-middle">
                    <p className="text-sm text-gray-700">Confidence</p>
                    <p className="text-4xl font-bold text-blue-700">89%</p>{" "}
                    {/* Changed value for Pending */}
                  </div>
                  <img
                    src={`dashboard/arrow-left.png`}
                    alt=""
                    className="w-3 h-6"
                  />
                </div>
              </div>
              <div className="flex justify-between p-10 border border-gray-400 rounded-[20px] sm:flex-row flex-col gap-7">
                <div className="flex flex-col justify-start gap-5 sm:flex-row">
                  <div className="p-4 bg-blue-100 rounded-xl">
                    <img src={`dashboard/cube.png`} alt="" />
                  </div>
                  <div className="flex flex-col justify-between gap-2">
                    <div className="flex flex-col justify-between gap-3 sm:flex-row">
                      <p className="text-lg sm:text-xl">
                        Organic Coffee Beans{" "}
                      </p>
                      <span className="flex items-center justify-center px-1 text-gray-500 bg-gray-200 rounded-md">
                        Draft
                      </span>
                    </div>
                    <div className="flex flex-col justify-between gap-1 align-middle sm:flex-row">
                      <p className="text-sm text-gray-600">0901.21.00</p>
                      <p className="text-sm text-gray-600">United States</p>
                      <p className="text-sm text-gray-600">Dec 5, 2025</p>
                    </div>
                  </div>
                </div>
                <hr className="block border-gray-300 sm:hidden" />
                <div className="flex flex-row items-center justify-between gap-4">
                  <div className="flex flex-col justify-center gap-1 align-middle">
                    <p className="text-sm text-gray-700">Confidence</p>
                    <p className="text-4xl font-bold text-blue-700">91%</p>{" "}
                    {/* Changed value for Draft */}
                  </div>
                  <img
                    src={`dashboard/arrow-left.png`}
                    alt=""
                    className="w-3 h-6"
                  />
                </div>
              </div>
            </div>
          </article>

          {/* QUICK ACTIONS */}
          <aside className="p-6 mb-2 border border-gray-500 rounded-lg cursor-pointer">
            <h2 className="font-[Arial] text-2xl text-center sm:text-left font-bold">
              Quick Actions
            </h2>
            <div className="grid grid-cols-1 gap-3 pt-6 sm:grid-cols-2">
              <div className="gap-1 p-3 border border-gray-400 rounded-lg bg-[#2990E1] text-white hover:text-gray-500 hover:bg-blue-50">
                <img src="/dashboard/Plus.png" alt="plus" />
                <p className="w-full text-sm font-semibold text-left">
                  New Analysis
                </p>
                <p className="w-full text-xs text-left">
                  Start a new code recommendation
                </p>
              </div>
              <div className="gap-1 p-3 text-gray-500 border border-gray-400 rounded-lg bg-blue-50 hover:text-blue-50 hover:bg-blue-500">
                <img src="/dashboard/Upload.png" alt="" />
                <p className="w-full text-sm font-semibold text-left">
                  Bulk Upload
                </p>
                <p className="w-full text-xs text-left">
                  Upload multiple products at once
                </p>
              </div>
              <div className="gap-1 p-3 text-gray-500 border border-gray-400 rounded-lg bg-blue-50 hover:text-blue-50 hover:bg-blue-500">
                <img src="/dashboard/Search.png" alt="" />
                <p className="w-full text-sm font-semibold text-left">
                  Search History
                </p>
                <p className="w-full text-xs text-left">
                  Find past recommendations
                </p>
              </div>
              <div className="gap-1 p-3 text-gray-500 border border-gray-400 rounded-lg bg-blue-50 hover:text-blue-50 hover:bg-blue-500">
                <img src="/dashboard/Export.png" alt="" />
                <p className="w-full text-sm font-semibold text-left">
                  Export Report
                </p>
                <p className="w-full text-xs text-left">
                  Download your analysis report
                </p>
              </div>
            </div>
          </aside>
        </section>

        {/* CHART SECTION */}
        <section className="grid grid-cols-1 gap-6 pb-10 lg:grid-cols-3">
          {/* ANALYSIS ACTIVITY (LINE CHART) */}
          <article className="p-8 border border-gray-500 rounded-lg lg:col-span-2">
            <h2 className="font-[Arial] text-2xl text-center sm:text-left font-bold">
              Analysis Activity
            </h2>
            <AnalysisActivityChart />
          </article>

          {/* TOP DESTINATION COUNTRIES (BAR CHART) */}
          <aside className="p-6 border border-gray-500 rounded-lg">
            <h2 className="font-[Arial] text-2xl text-center sm:text-left font-bold">
              Top Destination Countries
            </h2>
            <TopCountriesBarChart />
          </aside>
        </section>
      </main>
      <Footer />
    </>
  );
}
