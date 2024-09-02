import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function CountdownPage() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isCountdownOver, setIsCountdownOver] = useState(false);
  const navigate = useNavigate();

  // Calculate the time left until your birthday
  useEffect(() => {
    const countdown = setInterval(() => {
      const birthdayDate = new Date('2024-09-04T00:00:00'); // Set your birthday date here
      const currentTime = new Date();
      const difference = birthdayDate - currentTime;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        clearInterval(countdown);
        setIsCountdownOver(true); // Countdown is over
      }
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  // Handler for adding wish/message
  const handleAddWish = () => {
    if (!isCountdownOver) {
      alert('04 SEPTEMBER IS THE DATE! Please come back then to add your wish/message.');
    } else {
      navigate('/add-wish');
    }
  };

  // Handler for navigating to the album page
  const handleGoToAlbum = () => {
    navigate('/album');
  };

  return (
    <div
      className="flex flex-col items-center justify-center h-screen bg-cover bg-center p-4 relative"
      style={{ backgroundImage: "url('/cake.jpg')" }} // Background image from public folder
    >
      {/* Animated Header */}
      <AnimatedHeader />

      <div className="bg-white bg-opacity-75 p-6 rounded shadow-md text-center w-full max-w-md">
        <h1 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">Countdown to My Birthday!</h1>
        
        {/* Countdown Box */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="p-2 md:p-4 bg-blue-200 rounded-lg">
            <p className="text-base md:text-lg font-bold">{timeLeft.days}</p>
            <p className="text-sm md:text-base">Days</p>
          </div>
          <div className="p-2 md:p-4 bg-green-200 rounded-lg">
            <p className="text-base md:text-lg font-bold">{timeLeft.hours}</p>
            <p className="text-sm md:text-base">Hours</p>
          </div>
          <div className="p-2 md:p-4 bg-yellow-200 rounded-lg">
            <p className="text-base md:text-lg font-bold">{timeLeft.minutes}</p>
            <p className="text-sm md:text-base">Minutes</p>
          </div>
          <div className="p-2 md:p-4 bg-red-200 rounded-lg">
            <p className="text-base md:text-lg font-bold">{timeLeft.seconds}</p>
            <p className="text-sm md:text-base">Seconds</p>
          </div>
        </div>

        {/* Button to navigate to add wish page */}
        <button
          onClick={handleAddWish}
          className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4 ${!isCountdownOver ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={!isCountdownOver}
        >
          Click to Add Birthday Wish/Message
        </button>

        {/* Button to navigate to album page */}
        <button
          onClick={handleGoToAlbum}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Go to Album Page
        </button>
      </div>
    </div>
  );
}

// Animated Header Component
function AnimatedHeader() {
  return (
    <div className="w-full bg-blue-600 text-white py-2 text-center text-lg font-semibold animate-slideInOut">
      Do you love what you see? 8024983733 Moniepoint 😁😊❤
    </div>
  );
}

export default CountdownPage;
