import React, { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { FaHeart, FaRegHeart, FaStar } from "react-icons/fa";

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`https://dummyjson.com/products/${id}`);
                setProduct(response.data);
            } catch (error) {
                console.error("Error fetching product details:", error);
                toast.error(error.response?.data?.message || 'Failed to fetch Product Detail!');

            }
        };

        fetchProduct();
    }, [id]);

    if (!product) {
        return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
    }

    return (
        <div className="py-10 px-4">
            <div className="max-w-4xl flex mx-auto bg-white rounded-lg">
                <div className="w-3/6">
                    <img
                        src={product.thumbnail}
                        alt={product.title}
                        className="w-full bg-gray-200 rounded-md"
                    />
                </div>
                <div className="w-4/6 py-6 pl-6">

                    <div className="flex flex-row items-center justify-between">
                        <h1 className="text-3xl font-bold text-gray-800 mb-1">{product.title}</h1>
                        <h1 className=" bg-green-200 h-fit px-2 py-1 rounded-lg text-sm text-green-800">In stock</h1>
                    </div>
                    <p className="text-gray-600 text-lg mb-2">{product.title}</p>
                    <div className="flex flex-row gap-1 text-orange-500 mb-2 items-center">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <p className="text-gray-600">5.0 (121 reviews)</p>

                    </div>
                    <p className="text-gray-600 text-lg mb-4">{product.description}</p>
                    <p className="text-2xl font-semibold text-gray-800 mb-3">${product.price}</p>
                    <p className="text-xl font-semibold text-gray-800 mb-2">Color</p>
                    <div className="flex flex-row mb-3 gap-2">
                        <div className="bg-green-600 p-3 rounded-md"></div>
                        <div className="bg-blue-600 p-3 rounded-md"></div>
                        <div className="bg-red-600 p-3 rounded-md"></div>
                        <div className="bg-yellow-600 p-3 rounded-md"></div>
                        <div className="bg-gray-600 p-3 rounded-md"></div>
                    </div>
                    <p className="text-xl font-semibold text-gray-800 mb-2">Size</p>
                    <div className="flex flex-row mb-3 gap-2 text-sm">
                        <div className="p-1 w-8 h-8 text-center border border-black bg-black rounded-md text-white">S</div>
                        <div className="p-1 w-8 h-8 text-center border border-black rounded-md">M</div>
                        <div className="p-1 w-8 h-8 text-center border border-black rounded-md">L</div>
                        <div className="p-1 w-8 h-8 text-center border border-black rounded-md">XL</div>
                        <div className="p-1 w-8 h-8 text-center border border-black rounded-md">XXL</div>
                    </div>
                    <div className="flex flex-row gap-4 w-full">
                        <div className="border w-1/4 border-black rounded-md text-center p-2 text-lg gap-4">-  1  +</div>
                        <button onClick={() => navigate('/checkout')} className="bg-black text-white py-2 w-3/4 rounded-md hover:scale-95 duration-300 transition">
                            Add to Cart
                        </button>
                        <div className="border border-black px-3 pt-4  rounded-md items-center text-center"><FaRegHeart /></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
