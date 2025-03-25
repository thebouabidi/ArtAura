    import Sidebar from "./Sidebar";

    const Home = () => {
    return (
        <div className="flex">
        <Sidebar />
        <div className="flex-1 bg-gray-100 p-6 md:p-10 overflow-y-auto h-screen">
            <div className="flex justify-center items-center h-full">
            <div className="text-center">
                <h1 className="text-3xl md:text-5xl font-bold text-[#222E2F] mb-4">
                Welcome to Art Aura
                </h1>
                <p className="text-lg md:text-xl text-[#555]">
                Art Aura is a platform dedicated to showcasing beautiful artwork 
                and fostering creativity. Here, you can explore various paintings, 
                engage with artists, and discover the stories behind each masterpiece.
                </p>
            </div>
            </div>
        </div>
        </div>
    );
    };

    export default Home;
