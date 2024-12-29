
    import { FaHome, FaPaintBrush, FaCommentDots, FaSignOutAlt } from "react-icons/fa"; 

    const Sidebar = () => {
    return (
        <div className="flex flex-col bg-[#D12943] text-[#fff] p-4 w-16 md:w-64 h-screen">
        {/* Logo Section */}
        <div className="flex flex-row items-center justify-center md:justify-start mb-8">
            <span className="hidden md:block text-xl font-semibold text-[#ffff]  ">Art Aura</span>
        </div>

        {/* Links Section */}
        <div className="flex flex-col space-y-6 flex-grow">
            <a
            href="#home"
            className="flex items-center text-lg hover:text-[#222E2F] transition duration-300 space-x-3 p-2"
            >
            <FaHome className="text-2xl" />
            <span className="hidden md:block">Home</span>
            </a>
            <a
            href="#paintings"
            className="flex items-center text-lg hover:text-[#222E2F] transition duration-300 space-x-3 p-2"
            >
            <FaPaintBrush className="text-2xl" />
            <span className="hidden md:block">Paintings</span>
            </a>
            <a
            href="#testimonials"
            className="flex items-center text-lg hover:text-[#222E2F] transition duration-300 space-x-3 p-2"
            >
            <FaCommentDots className="text-2xl" />
            <span className="hidden md:block">Testimonials</span>
            </a>
        </div>

        {/* Logout Button */}
        <div className="mt-auto">
            <button
            onClick={() => alert("Logging out...")}
            className="flex items-center text-lg  text-white py-2 px-4 rounded hover:text-[#222E2F] transition duration-300 space-x-2"
            >
            <FaSignOutAlt className="text-2xl" />
            <span className="hidden md:block">Logout</span>
            </button>
        </div>
        </div>
        
    );
    };

    export default Sidebar;
