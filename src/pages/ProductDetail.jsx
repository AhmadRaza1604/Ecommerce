import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

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

                    <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.title}</h1>
                    <p className="text-gray-600 text-lg mb-4">{product.description}</p>
                    <p className="text-2xl font-semibold text-gray-800 mb-6">${product.price}</p>
                    <button onClick={() => navigate('/checkout')} className="bg-black text-white py-2 px-4 rounded-md hover:scale-95 duration-300 transition">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
