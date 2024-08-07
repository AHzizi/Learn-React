import React, { useState, useEffect } from 'react';

const ClockPages = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalID = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Cleanup function to clear the interval when component unmounts
    return () => clearInterval(intervalID);
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  // Format hours, minutes, and seconds to always have 2 digits
  const hours = String(time.getHours() % 12 || 12).padStart(2, '0'); // Convert 0 to 12 for 12-hour format
  const minutes = String(time.getMinutes()).padStart(2, '0');
  const seconds = String(time.getSeconds()).padStart(2, '0');

  // Determine AM/PM
  const amOrPm = time.getHours() >= 12 ? 'PM' : 'AM';

  const formattedTime = `${hours}:${minutes}:${seconds} ${amOrPm}`;

  // Function to determine the background class based on time
  const getBackgroundClass = () => {
    const hour = time.getHours();
    if (hour >= 7 && hour < 15) {
      return 'bg-beachSiang';
    } else if (hour >= 15 && hour < 17) {
      return 'bg-beachSore';
    } else {
      return 'bg-beachMalam';
    }
  };

  return (
    <div className={`p-10 text-9xl text-center w-full min-h-screen overflow-hidden ${getBackgroundClass()} bg-center bg-no-repeat bg-cover md:`}>

      <div className='bg-slate-600 bg-opacity-20'>
        <h1 className='mb-3 text-5xl mt-72 font-bold bg-gradient-to-br text-transparent from-teal-400 to-sky-500 bg-clip-text hover:bg-gradient-to-bl hover:from-yellow-400 hover:to-green-400 hover:text-transparents hover:bg-clip-text text-'>{formattedTime}</h1>
      </div>
    </div>
  );
};

export default ClockPages;
