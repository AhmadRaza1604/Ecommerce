import React, { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import { Link } from "react-router-dom";
import axios from "axios";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true)
        const fetchProducts = async () => {
            try {
                // Data from dummy Api
                const response = await axios.get(
                    "https://dummyjson.com/products?limit=12"
                );
                setProducts(response.data.products);
                setLoading(false)
            } catch (error) {
                console.error("Error fetching products:", error);
                toast.error(error.response?.data?.message || 'Error Fetching Products!');
                setLoading(false)
            }
        };

        fetchProducts();
    }, []);

    return (
        <div className="min-h-screen bg-white py-10 px-16">
            <h1 className="text-lg text-center text-gray-800 mb-8">
                Shop {'>'} All Products
            </h1>
            {loading === true ? <div className=" border-4 rounded-full w-10 border-r-blue-700 border-l-gray-300 place-self-center border-t-gray-300 border-b-blue-700 p-6 animate-spin" ></div> :
                <div className=" grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-6">
                    {products.map((product) => (
                        <Link
                            to={`/product-detail/${product.id}`}
                            key={product.id}
                        >

                            <div
                                className="bg-white shadow-md  rounded-lg w-52 place-self-center border-gray-100   h-80 hover:shadow-lg duration-300 hover:-translate-y-4 transition-all "
                            >
                                <img
                                    src={product.thumbnail}
                                    alt={product.title}
                                    className="w-full h-48 border-2  bg-gray-200 rounded-t-lg border-gray-200 mb-4"
                                />
                                <h2 className="text-lg px-4 text-gray-800 mb-2">
                                    {product.title}
                                </h2>
                                <p className="text-gray-600 px-4 font-semibold mb-4">${product.price}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            }
        </div>
    );
};

export default Products;
