    import Sidebar from "./Sidebar";
    import { useState } from "react";

    const TestimonialsEdit = () => {
    const testimonialData = {
        id: 1,
        name: "John Doe",
        testimonial: "This is an amazing service! Highly recommended.",
        photo: "https://via.placeholder.com/150",
    };


    const [name, setName] = useState(testimonialData.name);
    const [testimonial, setTestimonial] = useState(testimonialData.testimonial);

    const handleSave = () => {
        alert("Testimonial updated!");
    };

    return (
        <div className="flex">

        <Sidebar />

        <div className="flex-1 bg-gray-100 p-6 md:p-10 overflow-y-auto h-screen">
            <h1 className="text-2xl md:text-4xl font-bold mb-6 text-[#222E2F]">
            Edit Testimonial
            </h1>

            <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex mb-6 justify-center">
                <img
                src={testimonialData.photo}
                alt={testimonialData.name}
                className="w-32 h-32 rounded-full border-2 border-[#D12943]"
                />
            </div>

            <form>
                <div className="mb-4">
                <label
                    htmlFor="name"
                    className="block text-lg font-semibold text-[#222E2F]"
                >
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-3 mt-2 border rounded-lg focus:outline-none 
                    focus:ring-2 focus:ring-[#D12943] focus:border-[#D12943]"
                />
                </div>

                <div className="mb-4">
                <label
                    htmlFor="testimonial"
                    className="block text-lg font-semibold text-[#222E2F]"
                >
                    Testimonial
                </label>
                <textarea
                    id="testimonial"
                    value={testimonial}
                    onChange={(e) => setTestimonial(e.target.value)}
                    rows="4"
                    className="w-full p-3 mt-2 border rounded-lg focus:outline-none 
                    focus:ring-2 focus:ring-[#D12943] focus:border-[#D12943]"
                />
                </div>

                <div className="flex justify-end">
                <button
                    type="button"
                    onClick={handleSave}
                    className="bg-[#D12943] text-white py-2 px-6 rounded-lg shadow 
                    hover:bg-[#b81f39] transition"
                >
                    Save Changes
                </button>
                </div>
            </form>
            </div>
        </div>
        </div>
    );
    };

    export default TestimonialsEdit;
