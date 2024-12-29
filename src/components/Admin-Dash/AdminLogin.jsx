
import Navbar from "../Navbar";

const AdminLogin = () => {
    
    const color = { backgroundColor: '#F4F5F5' };

    return (
        <div
            className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden min-h-screen'
            style={color}
            id='AdminLogin'
        >
            <Navbar />
            <h1 className='text-2xl sm:text-4xl font-bold mb-8 text-center text-[#222E2F]'>
                Welcome Back, Admin!
            </h1>
            <p className='text-center text-[#405558] mb-12 max-w mx-auto'>
                Please enter your credentials to access the admin panel.
            </p>
            <form className='max-w-2xl mx-auto text-[#222E2F] pt-8'>
                <div className='flex flex-wrap justify-center items-center gap-4 mb-5'>
                    <div className='w-full md:w-1/2 text-left'>
                        Admin email:
                        <input
                            className='w-full border border-[#adb5b6] rounded py-3 px-4 mt-2 outline-none focus:ring-2 focus:ring-[#222E2F]'
                            type="text"
                            name='Name'
                            placeholder='Enter your name'
                            required
                        />
                    </div>
                    <div className='w-full md:w-1/2 text-left md:p1-4'>
                        Password:
                        <input
                            className='w-full border border-[#adb5b6] rounded py-3 px-4 mt-2 outline-none focus:ring-2 focus:ring-[#222E2F]'
                            type='password'
                            name='Email'
                            placeholder='Enter your password'
                            required
                        />
                    </div>
                </div>
                <button className='bg-[#222E2F] text-white py-2 px-12 mb-10 rounded'>
                    Log in
                </button>
            </form>
            <div className='text-center'>
                <a href='/forgot-password' className='text-[#222E2F] hover:underline'>
                    Forgot Password?
                </a>
            </div>
        </div>
        
    );
};

export default AdminLogin;
