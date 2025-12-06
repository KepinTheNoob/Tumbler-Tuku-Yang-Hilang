import Footer from "./components/footer";
import Navbar from "./components/navbar";
import { useAuth } from "./auth/AuthContext";

export default function Home() {
  const { user } = useAuth();

  return (
    <div className="font-sans text-gray-800">
      <Navbar />
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

          {user ? (
            <></>
          ) : (
            <a href="/signup">
              <button className="mt-6 px-8 py-2 bg-[#35B7FA] text-white rounded-xl hover:bg-blue-700 transition animate-fade-in delay-300 font-semibold">
                Register
              </button>
            </a>
          )}

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
      <section className="py-16 bg-[#2F77B0] text-white text-center px-4 bg-[url('/Img_Home/background.png')] bg-no-repeat bg-cover bg-center">
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
          <a href="/onboarding">
            <button className="mt-6 px-8 py-3 bg-[#253D6D] text-white font-semibold rounded-xl hover:opacity-90 transition">
              Get Started
            </button>
          </a>
        </div>
      </section>

      <Footer />

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
