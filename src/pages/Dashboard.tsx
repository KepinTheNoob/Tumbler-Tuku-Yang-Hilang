import React from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
    BarChart, Bar, Legend,
} from 'recharts';
import Navbar from "../component/navbar";
import Footer from "../components/footer";

// --- 1. INTERFACES DAN DATA DUMMY ---

// Data untuk Analysis Activity (Line Chart)
interface ActivityDataPoint {
    name: string; // Bulan
    analyses: number; // Jumlah analisis
}

const monthlyActivityData: ActivityDataPoint[] = [
    { name: 'Jan', analyses: 9 },
    { name: 'Feb', analyses: 18 },
    { name: 'Mar', analyses: 27 },
    { name: 'Apr', analyses: 18 },
    { name: 'May', analyses: 24 },
    { name: 'Jun', analyses: 27 },
    { name: 'Jul', analyses: 36 },
];

// Data untuk Top Destination Countries (Bar Chart)
interface CountryDataPoint {
    country: string;
    analyses: number;
    fill: string; // Warna untuk Bar Chart
}

const topCountriesData: CountryDataPoint[] = [
    { country: 'US', analyses: 24, fill: '#8884d8' },
    { country: 'JP', analyses: 18, fill: '#83a6ed' },
    { country: 'AU', analyses: 15, fill: '#8dd1e1' },
    { country: 'SG', analyses: 12, fill: '#82ca9d' },
    { country: 'DE', analyses: 9, fill: '#a4de6c' },
];

// --- 2. KOMPONEN CHART BARU ---

const AnalysisActivityChart: React.FC = () => (
    <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer width="100%" height="100%">
            <LineChart
                data={monthlyActivityData}
                margin={{ top: 5, right: 30, left: -20, bottom: 5 }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="analyses" stroke="#3b82f6" strokeWidth={3} dot={{ r: 5 }} />
            </LineChart>
        </ResponsiveContainer>
    </div>
);

const TopCountriesBarChart: React.FC = () => (
    <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer width="100%" height="100%">
            {/* Menggunakan layout 'vertical' untuk Bar Chart horizontal */}
            <BarChart layout="vertical" data={topCountriesData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                {/* YAxis (Vertikal) menggunakan dataKey 'country' karena layout-nya vertikal */}
                <YAxis dataKey="country" type="category" />
                {/* XAxis (Horizontal) adalah sumbu nilai, tanpa dataKey */}
                <XAxis type="number" hide /> 
                <Tooltip />
                {/* Bar menggunakan dataKey 'analyses' */}
                <Bar dataKey="analyses" fill="#3b82f6" label={{ position: 'right', fill: '#000' }} />
            </BarChart>
        </ResponsiveContainer>
    </div>
);


// --- 3. KOMPONEN DASHBOARD UTAMA (DIMODIFIKASI) ---

export default function Dashboard() {
    return (
        <>
            <Navbar />
            <main className="px-8">
                <header className="space-y-3 py-10">
                    <h1 className="font-bold text-[Arial] text-3xl text-center sm:text-left">Hello, Ellen</h1>
                    <p className="text-[Arial] text-2xl text-center sm:text-left">Here's an overview of your export analysis activity</p>
                </header>
                
                {/* STATS CARDS */}
                <section className="grid grid-cols-1 sm:grid-cols-4 xl:grid-cols-4 gap-7 pb-10">
                    {/* ... (Kotak Statistik yang sudah ada) ... */}
                    {/* Total Analysis */}
                    <div className="flex justify-between align-middle bg-blue-50 flex-row sm:p-9 p-5 border border-gray-500 rounded-lg">
                        <div className="flex justify-start align-middle flex-col gap-3 ">
                            <p className="text-xl text-[Arial] text-gray-500">Total Analysis</p>
                            <p className="text-3xl text-[Arial] font-bold ">156</p>
                            <p className="text-sm text-[Arial] text-gray-500">All Time</p>
                            <p className="text-sm text-[Arial] text-gray-500"><span className="text-green-600">+12% </span>vs last month</p>
                        </div>
                        <div className="flex justify-start align-middle flex-col gap-3 ">
                            <div className="p-4 bg-blue-100 rounded-xl">
                                <img src={`dashboard/checklist.png`} alt="" className="w-8" />
                            </div>
                        </div>
                    </div>
                    {/* This Month */}
                    <div className="flex justify-between align-middle flex-row sm:p-9 p-5 border border-gray-500 rounded-lg">
                        <div className="flex justify-start align-middle flex-col gap-3 ">
                            <p className="text-xl text-[Arial] text-gray-500">This Month</p>
                            <p className="text-3xl text-[Arial] font-bold ">24</p>
                            <p className="text-sm text-[Arial] text-gray-500">Dec 2025</p>
                            <p className="text-sm text-[Arial] text-gray-500"><span className="text-green-600">+8% </span>vs last month</p>
                        </div>
                        <div className="flex justify-start align-middle flex-col gap-3 ">
                            <div className="p-4 bg-gray-200 rounded-xl">
                                <img src={`dashboard/graph-increase.png`} alt="" className="w-8" />
                            </div>
                        </div>
                    </div>
                    {/* Countries */}
                    <div className="flex justify-between align-middle flex-row sm:p-9 p-5 border border-gray-500 rounded-lg">
                        <div className="flex justify-start align-middle flex-col gap-3 ">
                            <p className="text-xl text-[Arial] text-gray-500">Countries</p>
                            <p className="text-3xl text-[Arial] font-bold ">18</p>
                            <p className="text-sm text-[Arial] text-gray-500">Unique Destinations</p>
                        </div>
                        <div className="flex justify-start align-middle flex-col gap-3 ">
                            <div className="p-4 bg-gray-200 rounded-xl">
                                <img src={`dashboard/globe.png`} alt="" className="w-8" />
                            </div>
                        </div>
                    </div>
                    {/* Avg. Confidence */}
                    <div className="flex justify-between align-middle bg-green-50 flex-row sm:p-9 p-5 border border-gray-500 rounded-lg">
                        <div className="flex justify-start align-middle flex-col gap-3 ">
                            <p className="text-xl text-[Arial] text-gray-500">Avg. Confidence</p>
                            <p className="text-3xl text-[Arial] font-bold ">91%</p>
                            <p className="text-sm text-[Arial] text-gray-500">Recommendation Accuracy</p>
                        </div>
                        <div className="flex justify-start align-middle flex-col gap-3 ">
                            <div className="sm:p-5 p-3 bg-green-200 rounded-xl">
                                <img src={`dashboard/clock-outline.png`} alt="" className="w-8" />
                            </div>
                        </div>
                    </div>
                </section>
                
                {/* RIWAYAT ANALISIS & QUICK ACTIONS */}
                <section className="grid lg:grid-cols-3 grid-cols-1 gap-6">
                    <article className="lg:col-span-2 border border-gray-500 p-8 rounded-lg mb-2">
                        <h2 className="font-[Arial] sm:text-3xl text-xl text-left font-medium">Recent Analysis History</h2>
                        <div className="flex justify-center flex-col gap-5 pt-7">
                            {/* ... (Isi Riwayat Analisis yang sudah ada) ... */}
                            <div className="flex justify-between p-10 border border-gray-400 rounded-[20px] sm:flex-row flex-col gap-7">
                                <div className="flex justify-start flex-col sm:flex-row gap-5">
                                    <div className="p-4 bg-blue-100 rounded-xl"><img src={`dashboard/cube.png`} alt="" /></div>
                                    <div className="flex justify-between flex-col gap-2">
                                        <div className="flex justify-between flex-col sm:flex-row gap-3">
                                            <p className="sm:text-xl text-lg">Organic Coffee Beans </p>
                                            <span className="px-1 bg-[#DBFFDB] flex justify-center items-center rounded-md text-[#42B540]">Completed</span>
                                        </div>
                                        <div className="flex justify-between align-middle flex-col gap-1 sm:flex-row">
                                            <p className="text-sm text-gray-600">0901.21.00</p>
                                            <p className="text-sm text-gray-600">United States</p>
                                            <p className="text-sm text-gray-600">Dec 5, 2025</p>
                                        </div>
                                    </div>
                                </div>
                                <hr className="sm:hidden block border-gray-300"/>
                                <div className="flex justify-between items-center flex-row gap-4">
                                    <div className="flex justify-center align-middle flex-col gap-1">
                                        <p className="text-sm text-gray-700">Confidence</p>
                                        <p className="text-4xl text-blue-700 font-bold">75%</p>
                                    </div>
                                    <img src={`dashboard/arrow-left.png`} alt="" className="w-3 h-6" />
                                </div>
                            </div>
                            <div className="flex justify-between p-10 border border-gray-400 rounded-[20px] sm:flex-row flex-col gap-7">
                                <div className="flex justify-start flex-col sm:flex-row gap-5">
                                    <div className="p-4 bg-blue-100 rounded-xl"><img src={`dashboard/cube.png`} alt="" /></div>
                                    <div className="flex justify-between flex-col gap-2">
                                        <div className="flex justify-between flex-col sm:flex-row gap-3">
                                            <p className="sm:text-xl text-lg">Organic Coffee Beans </p>
                                            <span className="px-1 bg-yellow-100 flex justify-center items-center rounded-md text-yellow-400">Pending</span>
                                        </div>
                                        <div className="flex justify-between align-middle flex-col gap-1 sm:flex-row">
                                            <p className="text-sm text-gray-600">0901.21.00</p>
                                            <p className="text-sm text-gray-600">United States</p>
                                            <p className="text-sm text-gray-600">Dec 5, 2025</p>
                                        </div>
                                    </div>
                                </div>
                                <hr className="sm:hidden block border-gray-300"/>
                                <div className="flex justify-between items-center flex-row gap-4">
                                    <div className="flex justify-center align-middle flex-col gap-1">
                                        <p className="text-sm text-gray-700">Confidence</p>
                                        <p className="text-4xl text-blue-700 font-bold">89%</p> {/* Changed value for Pending */}
                                    </div>
                                    <img src={`dashboard/arrow-left.png`} alt="" className="w-3 h-6" />
                                </div>
                            </div>
                            <div className="flex justify-between p-10 border border-gray-400 rounded-[20px] sm:flex-row flex-col gap-7">
                                <div className="flex justify-start flex-col sm:flex-row gap-5">
                                    <div className="p-4 bg-blue-100 rounded-xl"><img src={`dashboard/cube.png`} alt="" /></div>
                                    <div className="flex justify-between flex-col gap-2">
                                        <div className="flex justify-between flex-col sm:flex-row gap-3">
                                            <p className="sm:text-xl text-lg">Organic Coffee Beans </p>
                                            <span className="px-1 bg-gray-200 flex justify-center items-center rounded-md text-gray-500">Draft</span>
                                        </div>
                                        <div className="flex justify-between align-middle flex-col gap-1 sm:flex-row">
                                            <p className="text-sm text-gray-600">0901.21.00</p>
                                            <p className="text-sm text-gray-600">United States</p>
                                            <p className="text-sm text-gray-600">Dec 5, 2025</p>
                                        </div>
                                    </div>
                                </div>
                                <hr className="sm:hidden block border-gray-300"/>
                                <div className="flex justify-between items-center flex-row gap-4">
                                    <div className="flex justify-center align-middle flex-col gap-1">
                                        <p className="text-sm text-gray-700">Confidence</p>
                                        <p className="text-4xl text-blue-700 font-bold">91%</p> {/* Changed value for Draft */}
                                    </div>
                                    <img src={`dashboard/arrow-left.png`} alt="" className="w-3 h-6" />
                                </div>
                            </div>
                        </div>
                    </article>

                    {/* QUICK ACTIONS */}
                    <aside className="border border-gray-500 p-6 rounded-lg mb-2">
                        <h2 className="font-[Arial] text-2xl text-center sm:text-left font-bold">Quick Actions</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6">
                            <div className="gap-1 p-3 border border-gray-400 rounded-lg bg-[#2990E1] text-white hover:text-gray-500 hover:bg-blue-50">
                                <img src="/dashboard/Plus.png" alt="plus" />
                                <p className="text-sm text-left w-full font-semibold">New Analysis</p>
                                <p className="text-xs text-left w-full">Start a new code recommendation</p>
                            </div>
                            <div className="gap-1 p-3 border border-gray-400 rounded-lg bg-blue-50 text-gray-500 hover:text-blue-50 hover:bg-blue-500">
                                <img src="/dashboard/Upload.png" alt="" />
                                <p className="text-sm text-left w-full font-semibold">Bulk Upload</p>
                                <p className="text-xs text-left w-full">Upload multiple products at once</p>
                            </div>
                            <div className="gap-1 p-3 border border-gray-400 rounded-lg bg-blue-50 text-gray-500 hover:text-blue-50 hover:bg-blue-500">
                                <img src="/dashboard/Search.png" alt="" />
                                <p className="text-sm text-left w-full font-semibold">Search History</p>
                                <p className="text-xs text-left w-full">Find past recommendations</p>
                            </div>
                            <div className="gap-1 p-3 border border-gray-400 rounded-lg bg-blue-50 text-gray-500 hover:text-blue-50 hover:bg-blue-500">
                                <img src="/dashboard/Export.png" alt="" />
                                <p className="text-sm text-left w-full font-semibold">Export Report</p>
                                <p className="text-xs text-left w-full">Download your analysis report</p>
                            </div>
                        </div>
                    </aside>
                </section>

                {/* CHART SECTION */}
                <section className="grid lg:grid-cols-3 grid-cols-1 gap-6 pb-10">
                    {/* ANALYSIS ACTIVITY (LINE CHART) */}
                    <article className="lg:col-span-2 border border-gray-500 p-8 rounded-lg">
                        <h2 className="font-[Arial] text-2xl text-center sm:text-left font-bold">Analysis Activity</h2>
                        <AnalysisActivityChart />
                    </article>

                    {/* TOP DESTINATION COUNTRIES (BAR CHART) */}
                    <aside className="border border-gray-500 p-6 rounded-lg">
                        <h2 className="font-[Arial] text-2xl text-center sm:text-left font-bold">Top Destination Countries</h2>
                        <TopCountriesBarChart />
                    </aside>
                </section>
            </main>
            <Footer />
        </>
    );
}