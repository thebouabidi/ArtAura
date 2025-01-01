    import Sidebar from "./Sidebar";
    import {Link} from 'react-router-dom'
    import { FaEdit, FaTrashAlt } from "react-icons/fa";

    const PaintingsHome = () => {
    // Static data
    const paintingsData = [
        {
        id: 1,
        title: "Sunset Glow",
        price: "1300 MAD",
        description: "A beautiful depiction of sunset colors.",
        photo: "https://via.placeholder.com/150",
        },
        {
        id: 2,
        title: "Mountain Retreat",
        price: "1300 MAD",
        description: "A serene mountain landscape.",
        photo: "https://via.placeholder.com/150",
        },
        {
        id: 3,
        title: "Ocean Breeze",
        price: "1300 MAD",
        description: "Waves crashing on the shore.",
        photo: "https://via.placeholder.com/150",
        },
        {
            id: 3,
            title: "Ocean Breeze",
            price: "1300 MAD",
            description: "Waves crashing on the shore.",
            photo: "https://via.placeholder.com/150",
            },
            {
                id: 3,
                title: "Ocean Breeze",
                price: "1300 MAD",
                description: "Waves crashing on the shore.",
                photo: "https://via.placeholder.com/150",
                },    
    ];

    return (
        <div className="flex flex-col md:flex-row h-screen">
        <Sidebar />

        <div className="flex-1 bg-gray-100 p-4 md:p-10 overflow-y-auto">
            {/* Title */}
            <h1 className="text-2xl md:text-4xl font-bold mb-6 text-[#222E2F]">
            Admin Panel: Your Mission Awaits!
            </h1>

            <div className="flex justify-end mb-4">
            <Link 
            to="/PaintingsAdd"
            className="bg-[#D12943] text-white px-4 md:px-6 py-2 rounded-lg 
            shadow hover:bg-[#b81f39] transition">
                Add New Painting
            </Link>
            </div>

            <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg shadow">
                <thead className="bg-[#D12943] text-white">
                <tr>
                    <th className="py-3 px-4 text-left">Photo</th>
                    <th className="py-3 px-4 text-left">Title</th>
                    <th className="py-3 px-4 text-left">Price</th>
                    <th className="py-3 px-4 text-left">Description</th>
                    <th className="py-3 px-4 text-center">Actions</th>
                </tr>
                </thead>
                <tbody>
                {paintingsData.map((painting) => (
                    <tr
                    key={painting.id}
                    className="border-b hover:bg-gray-100 transition"
                    >
                    <td className="py-3 px-4">
                        <img
                        src={painting.photo}
                        alt={painting.title}
                        className="w-16 h-16 rounded-lg"
                        />
                    </td>
                    <td className="py-3 px-4">{painting.title}</td>
                    <td className="py-3 px-4">{painting.price}</td>
                    <td className="py-3 px-4">{painting.description}</td>
                    <td className="py-3 px-4 flex justify-center gap-4">
                        <Link 
                        to="/PaintingsEdit"
                        className="text-[#222E2F] hover:text-blue-700 transition">
                        <FaEdit />
                        </Link>
                        <button className="text-[#222E2F] hover:text-red-700 transition">
                        <FaTrashAlt />
                        </button>
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
        </div>
        </div>
    );
    };

    export default PaintingsHome;
