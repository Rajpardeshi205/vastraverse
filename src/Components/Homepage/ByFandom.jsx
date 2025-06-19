import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const data = [
  {
    id: 1,
    brand: "Marvel",
    image:
      "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Venom2.jpg?format=webp&w=480&dpr=1.5",
  },
  {
    id: 2,
    brand: "DC",
    image:
      "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/dc-1.jpg?format=webp&w=480&dpr=1.5",
  },
  {
    id: 3,
    brand: "Naruto",
    image:
      "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/naruto__copy.jpg?format=webp&w=480&dpr=1.5",
  },
  {
    id: 4,
    brand: "Harry Potter",
    image:
      "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/harry_potter_fandom_tile.jpg?format=webp&w=480&dpr=1.5",
  },
  {
    id: 5,
    brand: "Squid Game",
    image:
      "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/squid_1.jpg?format=webp&w=480&dpr=1.5",
  },
  {
    id: 6,
    brand: "Star Wars",
    image:
      "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/star_wars_shop_by_fandom.jpg?format=webp&w=480&dpr=1.5",
  },
];

const NextArrow = ({ onClick }) => (
  <button
    aria-label="Next Slide"
    className="absolute top-1/2 right-2 -translate-y-1/2 z-20 cursor-pointer bg-white p-3 rounded-full shadow hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
    onClick={onClick}
  >
    <FaChevronRight size={22} />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    aria-label="Previous Slide"
    className="absolute top-1/2 left-2 -translate-y-1/2 z-20 cursor-pointer bg-white p-3 rounded-full shadow hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
    onClick={onClick}
  >
    <FaChevronLeft size={22} />
  </button>
);

const ByFandom = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "40px",
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="relative mx-auto py-10 max-w-7xl px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center mb-10">Shop by Brand</h2>
      <Slider {...settings}>
        {data.map((item) => (
          <div key={item.id} className="p-2 sm:p-4">
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="h-64 sm:h-72 md:h-80 w-full overflow-hidden flex items-center justify-center bg-gray-50">
                <img
                  src={item.image}
                  alt={item.brand || "Brand"}
                  className="max-h-full max-w-full object-contain"
                  loading="lazy"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold truncate">{item.brand}</h3>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ByFandom;
