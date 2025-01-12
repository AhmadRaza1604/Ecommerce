import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const navigate = useNavigate();

    const validationSchema = yup.object({
        email: yup.string().email("Invalid email address").required("Email is required"),
        password: yup.string().min(8, "Password must be at least 8 characters").required("Password is required"),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(validationSchema),
        mode: 'onChange'
    });

    const onSubmit = async (data) => {
        try {
            //dummy api call
            const response = await axios.post("https://dummyjson.com/auth/login", {
                method: 'POST',
                username: 'michaelw',
                password: 'michaelwpass',
                expiresInMins: 60,
                credentials: 'include',
                headers: { 'Content-Type': 'application/json' },
            });
            console.log("Login successful:", response.data);
            localStorage.setItem('accessToken', response.data.accessToken)
            // set user data in local storage to show in navbar
            const response1 = await axios.get("https://dummyjson.com/users/2");
            localStorage.setItem('user', JSON.stringify(response1.data));
            navigate("/");
        } catch (error) {
            console.error("Login failed:", error);
        }
    };

    return (
        <div className="flex min-h-screen">
            <img src='assets/SignUp.avif' className="md:w-6/12 lg:w-7/12 hidden md:block h-screen" />
            <Link to='/' className=" p-1 hover:scale-95 duration-300 rounded-full border-b-2 border-cyan-50 hidden m-6 absolute gap-1 md:flex items-center  font-semibold">
                <img src='/assets/Logo.webp' className="w-12 h-12 " />
                Ecommerce
            </Link>
            <div className="w-full md:w-6/12 lg:w-5/12 content-center justify-items-center bg-white">
                <div className="w-9/12 pt-12 lg:pr-4">
                {/*for mobile screen */}
                    <Link to='/' className="md:hidden mb-3 justify-center flex gap-1 items-center  font-semibold">
                        <img src='/assets/Logo.webp' className="w-12 h-12 " />
                        Ecommerce
                    </Link>
                    {/* Login form */}
                    <h2 className="text-2xl font-semibold text-gray-800  text-center md:text-start mb-2">Welcome 👋</h2>
                    <h2 className="text-md text-gray-500 text-center md:text-start mb-6">Please Login Here</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700" htmlFor="email">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                {...register("email")}
                                className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-green-500 ${errors.email ? 'focus:border-red-500' : 'focus:border-green-500'} text-sm md:text-lg ${errors.email ? "border-red-500" : "border-gray-300"
                                    }`}
                            />
                            {errors.email && (
                                <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                            )}
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700" htmlFor="password">
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    type={passwordVisible ? "text" : "password"}
                                    id="password"
                                    {...register("password")}
                                    className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-green-500 ${errors.password ? 'focus:border-red-500' : 'focus:border-green-500'} text-sm md:text-lg ${errors.password ? "border-red-500" : "border-gray-300"
                                        }`}
                                />
                                <div
                                    className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                                    onClick={() => setPasswordVisible(!passwordVisible)}
                                >
                                    {passwordVisible ? <AiOutlineEyeInvisible className="text-gray-500" /> : <AiOutlineEye className="text-gray-500" />}
                                </div>
                            </div>
                            {errors.password && (
                                <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                        >
                            Login
                        </button>
                        <h1 onClick={() => navigate('/signup')} className="text-blue-500 hover:text-blue-800 cursor-pointer text-center" >New User? Create Your Account</h1>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
