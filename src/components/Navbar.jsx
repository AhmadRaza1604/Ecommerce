import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
const Navbar = () => {
    const [show, setShow] = useState(false);
    const user = JSON.parse(localStorage.getItem('user'));
    const navigate = useNavigate();
    const links = [
        {
            name: "Home",
            url: "/",
        },
        {
            name: "Products",
            url: "/products",
        },
        {
            name: "About",
            url: "/about",
        },
    ];
    const handleLogout = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('user');
        toast.info('You have been logged Out!');
        navigate('/login');
    }
    return (
        <>
            <div className="w-full h-fit bg-white z-50 fixed top-0 py-4 px-6 md:px-16 text-white flex justify-between items-center">
                <Link to='/'>
                    <div className="flex flex-row gap-2 w-3/12">
                        <img src="/assets/Logo.webp" className="w-9" alt="Logo" />
                        <h1 className="text-2xl font-thin text-black">Ecommerce</h1>
                    </div>
                </Link>
                <div className="md:flex flex-row hidden w-10/12 h-12 rounded-lg items-center justify-end px-4">
                    <div>
                        {links.map((link) => (
                            <Link
                                to={link.url}
                                key={link.name}
                                className={`mx-1 ${link.name === "Login"
                                    ? "text-white bg-black hover:bg-green-800"
                                    : "hover:bg-black text-black hover:text-white"
                                    } font-semibold py-2 px-4 duration-300 transition-all ease-in rounded-lg`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                        {/* If user is logged in user name and logout button will show otherwise login button */}
                    {user ?
                        <>
                            <img src={user.image} className=" ml-2 w-6 border-2 rounded-lg" />
                            <h1 className="text-black mr-2 cursor-pointer  font-semibold">{user.firstName}</h1>
                            <button
                                onClick={() => handleLogout()}
                                className={`ml-2 text-white bg-black hover:scale-95 font-semibold py-2 px-4 duration-300 transition-all ease-in rounded-lg`}
                            >
                                Logout
                            </button>
                        </>
                        :
                        <Link
                            to={'/login'}
                            className={`mx-1 text-white bg-black hover:scale-95 font-semibold py-2 px-4 duration-300 transition-all ease-in rounded-lg`}
                        >
                            Login
                        </Link>
                    }
                </div>
                 {/* Toggle Links Button For mobile view */}
                <div
                    onClick={() => setShow(!show)}
                    className="sm:flex md:hidden bg-black w-fit h-12 hover:bg-green-800 cursor-pointer rounded-lg items-center flex justify-end px-1"
                >
                    <button className="mx-1 font-semibold py-1 px-2 duration-300 transition-all ease-in rounded-lg">
                        {show ? <IoClose /> : <FaBars />}
                    </button>
                </div>
            </div>
                {/* Links For mobile view */}
            {show && (
                <div className="flex flex-col top-20 md:hidden z-50 fixed bg-white w-full border-t-2 h-fit justify-end gap">
                    <div className="flex flex-col my-2 gap-2 text-center items-center">
                        {links.map((link) => (
                            <Link
                                to={link.url}
                                key={link.name}
                                className={`mx-1 w-52 hover:bg-black text-black hover:text-white font-semibold py-2 px-4 duration-300 transition-all ease-in rounded-lg`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        {/* If user is logged in user name and logout button will show otherwise login button */}
                        {user ?
                            <>
                                <div className="flex gap-1">

                                    <img src={user.image} className=" ml-2 w-6 border-2 rounded-lg" />
                                    <h1 className="text-black mr-2 font-semibold">{user.firstName} {user.lastName}</h1>
                                </div>
                                <button
                                    onClick={() => handleLogout()}
                                    className={`mx-1 text-white bg-black hover:scale-95 font-semibold py-2 px-4 duration-300 transition-all ease-in rounded-lg`}
                                >
                                    Logout
                                </button>
                            </>
                            :
                            <Link
                                to={'/login'}
                                className={`mx-1 w-52 text-white bg-black hover:bg-green-800 font-semibold py-2 px-4 duration-300 transition-all ease-in rounded-lg`}
                            >
                                Login
                            </Link>
                        }
                    </div>
                </div>
            )}
        </>
    );
};
export default Navbar;