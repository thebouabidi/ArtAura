    import Sidebar from "./Sidebar";
    import { FaEdit, FaTrashAlt } from "react-icons/fa";

    const TestimonialsHome = () => {
    // Static data for testimonials
    const testimonialsData = [
        {
        id: 1,
        name: "Nizar HAMIDI",
        testimonial: "This is an amazing service! Highly recommended.",
        photo: "https://via.placeholder.com/150",
        },
        {
        id: 2,
        name: "SOUFIA YOUSFI",
        testimonial: "A fantastic experience from start to finish.",
        photo: "https://via.placeholder.com/150",
        },
        {
        id: 3,
        name: "Med MARZOUKI",
        testimonial: "I love the platform! It's so easy to use.",
        photo: "https://via.placeholder.com/150",
        },
        {
            id: 3,
            name: "Med MARZOUKI",
            testimonial: "I love the platform! It's so easy to use.",
            photo: "https://via.placeholder.com/150",
        },
        {
            id: 3,
            name: "Med MARZOUKI",
            testimonial: "I love the platform! It's so easy to use.",
            photo: "https://via.placeholder.com/150",
            },

    ];

    return (
        <div className="flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 bg-gray-100 p-6 md:p-10 overflow-y-auto h-screen">
            {/* Title */}
            <h1 className="text-2xl md:text-4xl font-bold mb-6 text-[#222E2F]">
            Manage Testimonials
            </h1>

            {/* Table */}
            <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg shadow">
                <thead className="bg-[#D12943] text-white">
                <tr>
                    <th className="py-3 px-4 text-left">Photo</th>
                    <th className="py-3 px-4 text-left">Name</th>
                    <th className="py-3 px-4 text-left">Testimonial</th>
                    <th className="py-3 px-4 text-center">Actions</th>
                </tr>
                </thead>
                <tbody>
                {testimonialsData.map((testimonial) => (
                    <tr
                    key={testimonial.id}
                    className="border-b hover:bg-gray-100 transition"
                    >
                    <td className="py-3 px-4">
                        <img
                        src={testimonial.photo}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full"
                        />
                    </td>
                    <td className="py-3 px-4">{testimonial.name}</td>
                    <td className="py-3 px-4">{testimonial.testimonial}</td>
                    <td className="py-3 px-4 flex justify-center gap-4">
                        <button className="text-[#222E2F] hover:text-blue-700 transition">
                        <FaEdit />
                        </button>
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

    export default TestimonialsHome;
