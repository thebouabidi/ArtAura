import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from "../Navbar";

const AdminLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        setError("");
        
        if (email === "artaura.admin@gmail.com" && password === "admin") {
            alert("Login successful!");
            navigate("/Home");
        } else {
            setError("Invalid email or password.");
        }
    };

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
            <form className='max-w-2xl mx-auto text-[#222E2F] pt-8' onSubmit={handleLogin}>
                <div className='flex flex-wrap justify-center items-center gap-4 mb-5'>
                    <div className='w-full md:w-1/2 text-left'>
                        Admin email:
                        <input
                            className='w-full border border-[#adb5b6] rounded py-3 px-4 
                            mt-2 outline-none focus:ring-2 focus:ring-[#222E2F]'
                            type="email"
                            name='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder='Enter your email'
                            required
                        />
                    </div>
                    <div className='w-full md:w-1/2 text-left md:p1-4'>
                        Password:
                        <input
                            className='w-full border border-[#adb5b6] rounded py-3 px-4 
                            mt-2 outline-none focus:ring-2 focus:ring-[#222E2F]'
                            type='password'
                            name='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder='Enter your password'
                            required
                        />
                    </div>
                </div>
                {error && <p className='text-red-500 mb-4'>{error}</p>}
                <button type="submit" className='bg-[#222E2F] text-white py-2 px-12 mb-10 rounded'>
                    Log in
                </button>
            </form>
        </div>
    );
};

export default AdminLogin;
