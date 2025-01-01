    import Sidebar from "./Sidebar";
    import {Link} from 'react-router-dom'

    const TestimonialsAdd = () => {
    return (
        <div className="flex">
        {/* Sidebar */}
        <Sidebar />
        <div className="flex-1 bg-gray-100 p-6 md:p-10 overflow-y-auto h-screen">
            <h1 className="text-2xl md:text-4xl font-bold mb-6 text-[#222E2F]">
            Add Testimonial
            </h1>

            {/* Form */}
            <div className="bg-white p-6 rounded-lg shadow-md">
            <form>
                <div className="mb-4">
                <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-[#222E2F]"
                >
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    placeholder="Enter name"
                    className="w-full p-3 mt-2 border border-gray-300 rounded-md"
                />
                </div>

                {/* Testimonial Text Field */}
                <div className="mb-4">
                <label
                    htmlFor="testimonial"
                    className="block text-sm font-semibold text-[#222E2F]"
                >
                    Testimonial
                </label>
                <textarea
                    id="testimonial"
                    placeholder="Write your testimonial here..."
                    className="w-full p-3 mt-2 border border-gray-300 rounded-md"
                    rows="4"
                ></textarea>
                </div>
                <div className="mb-4">
                <label
                    htmlFor="photo"
                    className="block text-sm font-semibold text-[#222E2F]"
                >
                    Upload Photo (Optional)
                </label>
                <input
                    type="file"
                    id="photo"
                    className="w-full p-3 mt-2 border border-gray-300 rounded-md"
                />
                </div>

                <div className="flex justify-end">
                <Link
                    to="/TestimonialsHome"
                    type="submit"
                    className="bg-[#D12943] text-white px-6 py-2 rounded-lg 
                    shadow hover:bg-[#b81f39] transition"
                >
                    Add Testimonial
                </Link>
                </div>
            </form>
            </div>
        </div>
        </div>
    );
    };

    export default TestimonialsAdd;
