import Sidebar from "./Sidebar";

const PaintingsAdd = () => {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 bg-gray-100 p-6 md:p-10 overflow-y-auto h-screen">
        <h1 className="text-2xl md:text-4xl font-bold mb-6 text-[#222E2F]">
          Add New Painting
        </h1>

        {/* Form */}
        <form className="bg-white shadow rounded-lg p-6 md:p-10 space-y-6">
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              placeholder="Enter painting title"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md 
              shadow-sm focus:ring-[#D12943] focus:border-[#D12943] sm:text-sm"
            />
          </div>

          <div>
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-700"
            >
              Price
            </label>
            <input
              type="text"
              id="price"
              placeholder="Enter painting price"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md 
              shadow-sm focus:ring-[#D12943] focus:border-[#D12943] sm:text-sm"
            />
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              id="description"
              placeholder="Enter painting description"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md 
              shadow-sm focus:ring-[#D12943] focus:border-[#D12943] sm:text-sm"
              rows="4"
            ></textarea>
          </div>
          <div>
            <label
              htmlFor="photo"
              className="block text-sm font-medium text-gray-700"
            >
              Upload Photo
            </label>
            <input
              type="file"
              id="photo"
              className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 
              file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold 
              file:bg-[#D12943] file:text-white hover:file:bg-[#b81f39]"
            />
          </div>

          {/* Add Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-[#D12943] text-white px-6 py-2 rounded-lg shadow 
              hover:bg-[#b81f39] transition"
            >
              Add Painting
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PaintingsAdd;
