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

const categories = [
  {
    image: 'https://cedreo.com/wp-content/uploads/cloudinary/Visuel_AllHands_2022-04-22_JOUR_554px_prml8g.jpg',
    name: 'Residential Architecture',
    count: '200',
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvMmgY0IfpOiJIDIroUC-ipgALMjTETTq2gg&s',
    name: 'Commercial Projects',
    count: '180',
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_z0QxU8_qQF7jWoyH7t4om7GlKp4Dgl_O8A&s',
    name: 'Interior Design',
    count: '300',
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAf84Ulr9iDFqE_Uuf6maJRXx8IUB0q-SqYw&s',
    name: 'Landscape Architecture',
    count: '140',
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR00G7_7K6PONQzlR1CC_yem78kUzwBc7L8Jg&s',
    name: 'Renovation Specialists',
    count: '250',
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE7d09PxbXp5VzngDWslfPpr6cg1BPQL4-vQ&s',
    name: 'Construction Management',
    count: '120',
  },
];

export function Categories() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5, // Show 5 items for large screens
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4, // Show 4 items for medium screens
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3, // Show 3 items for small screens
          nextArrow: null, 
          prevArrow: null, 
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3, // Show 3 items for extra small screens
          nextArrow: null, 
          prevArrow: null, 
        },
      },
    ],
  };

  return (
    <section className="mt-10 py-6 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900">Popular Categories</h2>
          <button
            onClick={() => (window.location.href = '/categories')} // Replace with your actual navigation logic
            className="text-green-700 text-sm font-semibold hover:underline"
          >
            See All
          </button>
        </div>

        {/* Carousel Section */}
        <Slider {...settings}>
          {categories.map((category) => (
            <div key={category.name} className="p-4">
              <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
                <div className="overflow-hidden rounded-lg mb-4">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-40 object-cover transition-transform transform hover:scale-110"
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-lg text-gray-900">{category.name}</h3>
                  <p className="text-gray-600">{category.count} professionals</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
