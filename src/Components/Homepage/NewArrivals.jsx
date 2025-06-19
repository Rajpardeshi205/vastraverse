import React from "react";
import products from "../Categories/Items/products";
import { useNavigate } from "react-router-dom";

const NewArrivals = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center py-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-8 text-center">New Arrivals</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-6 w-full max-w-7xl">
        {products.slice(6, 12).map((product) => (
          <button
            onClick={() => navigate(`/product/${product.id}`)}
            key={product.id}
            className="flex flex-col bg-white shadow-md rounded-xl overflow-hidden hover:scale-[1.03] transition-transform duration-300"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[300px] sm:h-[320px] md:h-[340px] object-contain"
            />
            <div className="p-4 text-left">
              <h2 className="text-lg font-semibold line-clamp-1">
                {product.name}
              </h2>
              <p className="text-sm text-gray-600">
                Category:{" "}
                <span className="text-blue-400">{product.category}</span>
              </p>
              <p className="text-base font-semibold text-red-600 mt-2">
                {product.price}
              </p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;
