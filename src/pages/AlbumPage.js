// src/pages/AlbumPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Correct hook for navigation in react-router-dom v6

const AlbumPage = () => {
  // List of 30 images
  const images = [
    { id: 1, src: '/image1.jpg', alt: 'Image 1' },
    { id: 2, src: '/image2.jpg', alt: 'Image 2' },
    { id: 3, src: '/image3.jpg', alt: 'Image 3' },
    { id: 4, src: '/image4.jpg', alt: 'Image 4' },
    { id: 5, src: '/image5.jpg', alt: 'Image 5' },
    { id: 6, src: '/image6.jpg', alt: 'Image 6' },
    { id: 7, src: '/image7.jpg', alt: 'Image 7' },
    { id: 8, src: '/image8.jpg', alt: 'Image 8' },
    { id: 9, src: '/image9.jpg', alt: 'Image 9' },
    { id: 10, src: '/image10.jpg', alt: 'Image 10' },
    { id: 11, src: '/image11.jpg', alt: 'Image 11' },
    { id: 12, src: '/image12.jpg', alt: 'Image 12' },
    { id: 13, src: '/image13.jpg', alt: 'Image 13' },
    { id: 14, src: '/image14.jpg', alt: 'Image 14' },
    { id: 15, src: '/image15.jpg', alt: 'Image 15' },
    { id: 16, src: '/image16.jpg', alt: 'Image 16' },
    { id: 17, src: '/image17.jpg', alt: 'Image 17' },
    { id: 18, src: '/image18.jpg', alt: 'Image 18' },
    { id: 19, src: '/image19.jpg', alt: 'Image 19' },
    { id: 20, src: '/image20.jpg', alt: 'Image 20' },
    { id: 21, src: '/image21.jpg', alt: 'Image 21' },
    { id: 22, src: '/image22.jpg', alt: 'Image 22' },
    { id: 23, src: '/image23.jpg', alt: 'Image 23' },
    { id: 24, src: '/image24.jpg', alt: 'Image 24' },
    { id: 25, src: '/image25.jpg', alt: 'Image 25' },
    { id: 26, src: '/image26.jpg', alt: 'Image 26' },
    { id: 27, src: '/image27.jpg', alt: 'Image 27' },
    { id: 28, src: '/image28.jpg', alt: 'Image 28' },
    { id: 29, src: '/image29.jpg', alt: 'Image 29' },
    { id: 30, src: '/image30.jpg', alt: 'Image 30' },
  ];

  const downloadImage = (src) => {
    const link = document.createElement('a');
    link.href = src;
    link.download = src.split('/').pop(); // Get the image name from the src path
    link.click();
  };

  const navigate = useNavigate(); // Correct hook for navigation in react-router-dom v6

  const goBackHome = () => {
    navigate('/'); // Navigate back to the home page
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      {/* Animated Heading */}
      <h1 className="text-4xl font-bold text-center mb-8 animate-slideInOut bg-clip-text text-transparent bg-gradient-to-r from-gradientStart via-gradientMiddle to-gradientEnd">
        This is my album page. Download a picture of your choice.
      </h1>

      {/* Image Grid */}
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {images.map((image) => (
          <div key={image.id} className="bg-white p-4 rounded shadow-md">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-64 object-cover rounded mb-4"
            />
            <button
              onClick={() => downloadImage(image.src)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
            >
              Download
            </button>
          </div>
        ))}
      </div>

      {/* Back to Home Button */}
      <div className="flex justify-center mt-8">
        <button
          onClick={goBackHome}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default AlbumPage;
