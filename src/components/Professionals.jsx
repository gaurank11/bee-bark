import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Custom Arrow Components
const NextArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 right-[-30px] transform -translate-y-1/2 text-black hover:text-gray-900 cursor-pointer z-10"
    onClick={onClick}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      className="w-8 h-8"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 left-[-30px] transform -translate-y-1/2 text-black hover:text-gray-900 cursor-pointer z-10"
    onClick={onClick}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      className="w-8 h-8"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
  </div>
);

const professionals = [
  {
    name: 'Sarah Johnson',
    role: 'Lead Architect',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=80',
    projects: 48,
    rating: 4.9,
  },
  {
    name: 'Michael Chen',
    role: 'Interior Designer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80',
    projects: 36,
    rating: 4.8,
  },
  {
    name: 'Emma Rodriguez',
    role: 'Construction Manager',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=500&q=80',
    projects: 52,
    rating: 4.9,
  },
  {
    name: 'David Kim',
    role: 'Landscape Architect',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80',
    projects: 41,
    rating: 4.7,
  },
];

export function Professionals() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Show 4 items for large screens
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
         
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          nextArrow: null, 
          prevArrow: null,  
        },
      },
    ],
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900">Featured Professionals</h2>
          <button
            onClick={() => (window.location.href = '/professionals')} 
            className="text-green-700 text-sm font-semibold hover:underline"
          >
            See All
          </button>
        </div>

        {/* Carousel Section */}
        <Slider {...settings}>
          {professionals.map((professional) => (
            <div key={professional.name} className="p-4">
              <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer border border-gray-100">
                <img
                  src={professional.image}
                  alt={professional.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-semibold text-md md:text-lg mb-1 text-gray-900">{professional.name}</h3>
                  <p className="text-emerald-600 mb-3 text-sm md:text-md">{professional.role}</p>
                  <div className="flex justify-between ">
                    <span className="text-gray-500  text-sm">{professional.projects} Projects</span>
                    <span className="text-emerald-600 text-sm ">★ {professional.rating}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
