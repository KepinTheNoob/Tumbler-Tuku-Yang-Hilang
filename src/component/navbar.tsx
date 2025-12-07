
export default function Navbar(){
    return (
        <>
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
        </>
    );
}
