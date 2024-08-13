import React from 'react';

// Generates an array of random image URLs
const generateImageUrls = (count) => {
  return Array.from({ length: count }, (_, i) => `https://picsum.photos/640/480?random=${i + 1}`);
};

const LearnGrid = () => {
  const imageCount = 20; // Total number of images
  const imageUrls = generateImageUrls(imageCount);

  return (
    <div className="h-full w-screen">
      <div className="container mx-auto py-7">
        <div className="grid grid-cols-4 gap-4 sm:mx-4 sm:grid-cols-3 lg:mx-0 lg:grid-cols-4">
          <div className="flex items-center justify-start aspect-[4/3] rounded-lg font-sans text-2xl duration-200 hover:bg-green-600 sm:col-start-3 sm:row-start-3 md:col-start-2 md:row-start-3">
            <span>Hello World</span>
          </div>
          <div className="flex aspect-[4/3] flex-col items-start justify-center gap-4 rounded-lg font-sans text-xl duration-200 hover:bg-green-600">
            <span>@Lord</span>
            <span>@Length</span>
          </div>
          {imageUrls.map((url, index) => (
            <div
              key={index}
              className="aspect-[4/3] rounded-lg bg-blue-500 bg-cover duration-200 hover:bg-green-600 hover:scale-110"
              style={{ backgroundImage: `url('${url}')` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LearnGrid;
