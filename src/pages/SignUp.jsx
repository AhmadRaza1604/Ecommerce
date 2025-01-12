import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const navigate = useNavigate();
    const validationSchema = yup.object({
        firstName: yup.string().required("First name is required"),
        lastName: yup.string().required("Last name is required"),
        email: yup.string().email("Invalid email address").required("Email is required"),
        password: yup
            .string()
            .required("Password is required")
            .min(8, "Password must be at least 8 characters")
            .matches(/[a-z]/, "Password must contain at least one lowercase letter")
            .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
            .matches(/\d/, "Password must contain at least one number")
            .matches(/[!@#$%^&*(),.?":{}|<>]/, "Password must contain at least one special character"),
        terms: yup.bool().oneOf([true], "You must accept the terms and conditions"),
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
            const response = await axios.post("https://dummyjson.com/users/add", {
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                password: data.password,
            });
            console.log("Signup successful:", response.data);
            toast.success(`SignUp Successful, You can Login now!`);
            navigate("/login");
        } catch (error) {
            console.error("Signup failed:", error);
            toast.error(error.response?.data?.message || 'Failed to Signup!');

        }
    };

    return (
        <div className="flex min-h-screen">
            <img src='assets/SignUp.avif' className="md:w-6/12 lg:w-7/12 h-svh hidden md:block " />
            <Link to='/' className=" p-1 rounded-full border-b-2 hover:scale-95 duration-300 border-cyan-50 hidden m-6 absolute gap-1 md:flex items-center  font-semibold">
                <img src='/assets/Logo.webp' className="w-12 h-12 " />
                Ecommerce
            </Link>
            <div className="w-full md:w-6/12 lg:w-5/12 justify-items-center bg-white">
                <div className="w-9/12 pt-12 lg:pr-4">
                    {/* For mobile view link in center */}
                    <Link to='/' className="md:hidden mb-3 justify-center flex gap-2 items-center  font-semibold">
                        <img src='/assets/Logo.webp' className="w-12 h-12 " />
                        Ecommerce
                    </Link>

                    <h2 className="text-2xl font-semibold text-gray-800  text-center md:text-start mb-1">Create New Account</h2>
                    <h2 className="text-md text-gray-500 text-center md:text-start mb-3">Please Enter Details</h2>

                    <form onSubmit={handleSubmit(onSubmit)} className={`${errors.email || errors.firstName || errors.lastName ? 'space-y-0' : 'space-y-4'}`}>
                        <div>
                            <label className="block text-sm font-medium text-gray-700" htmlFor="firstName">
                                First Name
                            </label>
                            <input
                                type="text"
                                id="firstName"
                                {...register("firstName")}
                                className={`mt-1 block w-full px-3 py-1 border rounded-md shadow-sm focus:outline-none focus:ring-green-500 ${errors.firstName ? 'focus:border-red-500' : 'focus:border-green-500'} text-sm md:text-lg ${errors.firstName ? "border-red-500" : "border-gray-300"
                                    }`}
                            />
                            {errors.firstName && (
                                <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>
                            )}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700" htmlFor="lastName">
                                Last Name
                            </label>
                            <input
                                type="text"
                                id="lastName"
                                {...register("lastName")}
                                className={`mt-1 block w-full px-3 py-1 border rounded-md shadow-sm focus:outline-none focus:ring-green-500 ${errors.lastName ? 'focus:border-red-500' : 'focus:border-green-500'} text-sm md:text-lg ${errors.lastName ? "border-red-500" : "border-gray-300"
                                    }`}
                            />
                            {errors.lastName && (
                                <p className="text-red-500 text-xs mt-1">{errors.lastName.message}</p>
                            )}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700" htmlFor="email">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                {...register("email")}
                                className={`mt-1 block w-full px-3 py-1 border rounded-md shadow-sm focus:outline-none focus:ring-green-500 ${errors.email ? 'focus:border-red-500' : 'focus:border-green-500'} text-sm md:text-lg ${errors.email ? "border-red-500" : "border-gray-300"
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
                                    className={`mt-1 block w-full px-3 py-1 border rounded-md shadow-sm focus:outline-none focus:ring-green-500 ${errors.password ? 'focus:border-red-500' : 'focus:border-green-500'}  text-sm md:text-lg ${errors.password ? "border-red-500" : "border-gray-300"
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

                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="terms"
                                {...register("terms")}
                                className={`h-4 w-4 text-black focus:ring-black border-gray-300 rounded bg-black ${errors.terms ? "border-red-500" : "border-gray-300"
                                    }`}
                            />
                            <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
                                I agree to the <b>terms and conditions</b>
                            </label>
                        </div>
                        {errors.terms && (
                            <p className="text-red-500 text-xs mt-1">{errors.terms.message}</p>
                        )}

                        <button
                            type="submit"
                            className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                        >
                            Signup
                        </button>
                        <h1 onClick={() => navigate('/login')} className="text-blue-500 hover:text-blue-800 cursor-pointer text-center" >Already a User? Login</h1>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default Signup;
