import React from 'react';
import { FaArrowRight, FaFacebook, FaInstagram, FaMapMarker, FaMapMarkerAlt, FaMarker, FaPhone, FaTwitter } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Footer = () => {
    const Information = [
        { label: 'My Account', link: '/account' },
        { label: 'Login', link: '/login' },
        { label: 'My Cart', link: '/cart' },
        { label: 'My Wishlist', link: '/wishlist' },
        { label: 'Checkout', link: '/checkout' },
    ]
    const Services = [
        { label: 'About Us', link: '/about' },
        { label: 'Career', link: '/career' },
        { label: 'Delivery Information', link: '/delivery-info' },
        { label: 'Privacy Policy', link: '/privacy-policy' },
        { label: 'Terms & Condition', link: '/terms' },
    ]
    return (
        <div className='bg-black w-full'>
        <div className='bg-black w-full py-6 px-20 flex flex-col lg:flex-row gap-10 justify-center items-center lg:text-start text-center lg:justify-between text-white'>

            <div className=' flex flex-col gap-6 '>
                <Link className='flex flex-row gap-2'>
                    <img className='w-9' src='/assets/Logo.webp' />
                    <h1 className='text-4xl'>Ecommerce</h1>
                </Link>
                <div className=' flex flex-row gap-1 items-center'>
                    <h1><FaPhone /></h1>
                    <h1>(704) 555-0127</h1>
                </div>
                <div className=' flex flex-row gap-1 items-center'>
                    <h1><MdMail /> </h1>
                    <h1>ecommerce@example.com</h1>
                </div>
                <div className=' flex flex-row gap-1 items-center'>
                    <h1><FaMapMarkerAlt /> </h1>
                    <h1>3891 Ranchview Dr. Richardson, California 62639</h1>
                </div>
            </div>
            <div className='w-3/12'>
                <h1><b>Information</b></h1>
                <div className='flex flex-col gap-2 mt-3'>
                    {Information.map((info) => (
                        <Link to={info.link}>{info.label}</Link>
                    ))}
                </div>
            </div>
            <div className='w-3/12'>
                <h1><b>Services</b></h1>
                <div className='flex flex-col gap-2 mt-3'>
                    {Services.map((info) => (
                        <Link to={info.link}>{info.label}</Link>
                    ))}
                </div>
            </div>
            <div className='flex flex-col gap-6 w-3/12'>
                <h1><b>Subscribe</b></h1>
                <h1>Enter your Email below to be the first to know about new collections and product launches.</h1>
                <div className='flex flex-row'>
                    <MdMail className='ml-2 mt-4 z-50 text-xl absolute' />
                    <input className='rounded-md bg-transparent z-20 w-full border pl-8 pr-12 py-3 border-gray-300' placeholder='Your Email'></input>
                    <FaArrowRight className=' mt-4 z-50 text-xl -ml-8 cursor-pointer' />
                </div>
            </div>

        </div>
        <div className='border-t border-gray-600 mx-20'></div>
        <div className='bg-black w-full py-6 px-20 flex flex-row gap-10 justify-between text-white'>
            <h1>&copy; {new Date().getFullYear()} Ecommerce. All rights are reserved</h1>
            <div className='flex flex-row text-xl gap-4'>
                <FaFacebook/>
                <FaInstagram/>
                <FaTwitter/>
            </div>
        </div>
        </div>
    );
};

export default Footer;