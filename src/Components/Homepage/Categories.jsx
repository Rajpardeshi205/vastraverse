import React from "react";

const products = [
  {
    id: 1,
    image:
      "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/0.1_V0b2KcG.jpg?format=webp&w=480&dpr=1.5",
  },
  {
    id: 2,
    image:
      "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Web_tile.5_2EBCPn7.jpg?format=webp&w=480&dpr=1.5",
  },
  {
    id: 3,
    image:
      "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/0.3_ooiqIYL.jpg?format=webp&w=480&dpr=1.5",
  },
  {
    id: 4,
    image:
      "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/0.2_jI9cjJQ.jpg?format=webp&w=480&dpr=1.5",
  },
  {
    id: 5,
    image:
      "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/CAPS.1_ab0OeKN.jpg?format=webp&w=480&dpr=1.5",
  },
  {
    id: 6,
    image:
      "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Web_tile_Mk17qNP.jpg?format=webp&w=480&dpr=1.5",
  },
  {
    id: 7,
    image:
      "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Web_tile.3_IiLIsO3.jpg?format=webp&w=480&dpr=1.5",
  },
  {
    id: 8,
    image:
      "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/1.7_jIcQnpD.jpg?format=webp&w=480&dpr=1.5",
  },
];

const Categories = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Categories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
        {products.map((product) => (
          <button
            key={product.id}
            type="button"
            className="flex flex-col bg-white shadow-md rounded-md overflow-hidden hover:scale-105 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <div className="aspect-w-4 aspect-h-5">
              <img
                src={product.image}
                alt={`Category ${product.id}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Categories;
