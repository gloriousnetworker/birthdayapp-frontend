// src/pages/CountdownPage.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function CountdownPage() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
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
      }
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  return (
    <div
      className="flex items-center justify-center h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/cake.jpg')" }} // Background image from public folder
    >
      <div className="bg-white bg-opacity-75 p-8 rounded shadow-md text-center">
        <h1 className="text-4xl font-bold mb-6">Countdown to My Birthday!</h1>
        
        {/* Countdown Box */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="p-4 bg-blue-200 rounded-lg">
            <p className="text-lg font-bold">{timeLeft.days}</p>
            <p>Days</p>
          </div>
          <div className="p-4 bg-green-200 rounded-lg">
            <p className="text-lg font-bold">{timeLeft.hours}</p>
            <p>Hours</p>
          </div>
          <div className="p-4 bg-yellow-200 rounded-lg">
            <p className="text-lg font-bold">{timeLeft.minutes}</p>
            <p>Minutes</p>
          </div>
          <div className="p-4 bg-red-200 rounded-lg">
            <p className="text-lg font-bold">{timeLeft.seconds}</p>
            <p>Seconds</p>
          </div>
        </div>

        {/* Button to navigate to add wish page */}
        <button
          onClick={() => navigate('/add-wish')}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Click to Add Birthday Wish/Message
        </button>
      </div>
    </div>
  );
}

export default CountdownPage;
