import React from 'react';

const AfricanFlagsScroll = () => {
  // Array of African emblems using the actual images from your project
  const africanEmblems = [
    { name: 'African Emblem 1', emblem: '/images/emblem1.jpg' },
    { name: 'African Emblem 2', emblem: '/images/emblem2.jpg' },
    { name: 'African Emblem 3', emblem: '/images/emblem3.jpg' },
    { name: 'African Emblem 4', emblem: '/images/emblem4.jpg' },
    { name: 'African Emblem 5', emblem: '/images/emblem5.jpg' },
    { name: 'African Emblem 6', emblem: '/images/emblem6.jpg' },
    { name: 'African Emblem 7', emblem: '/images/emblem7.jpg' },
    { name: 'African Emblem 8', emblem: '/images/emblem8.jpg' },
    { name: 'African Emblem 9', emblem: '/images/emblem9.jpg' },
    { name: 'African Emblem 10', emblem: '/images/emblem10.jpg' },
    // Duplicate the set to have more emblems for smoother scrolling
    { name: 'African Emblem 1', emblem: '/images/emblem1.jpg' },
    { name: 'African Emblem 2', emblem: '/images/emblem2.jpg' },
    { name: 'African Emblem 3', emblem: '/images/emblem3.jpg' },
    { name: 'African Emblem 4', emblem: '/images/emblem4.jpg' },
    { name: 'African Emblem 5', emblem: '/images/emblem5.jpg' },
    { name: 'African Emblem 6', emblem: '/images/emblem6.jpg' },
    { name: 'African Emblem 7', emblem: '/images/emblem7.jpg' },
    { name: 'African Emblem 8', emblem: '/images/emblem8.jpg' },
    { name: 'African Emblem 9', emblem: '/images/emblem9.jpg' },
    { name: 'African Emblem 10', emblem: '/images/emblem10.jpg' },
  ];

  return (
    <>
      <div className="bg-white py-4 overflow-hidden relative">
        <div className="flex animate-marquee hover:animate-none">
          {/* First set of emblems */}
          {africanEmblems.map((country, index) => (
            <div key={`first-${index}`} className="flex-shrink-0 mx-3">
              <img 
                src={country.emblem} 
                alt={`${country.name}`}
                className="w-16 h-12 object-cover rounded shadow-sm border border-gray-200"
                onError={(e) => {
                  // Fallback to a placeholder if image fails to load
                  e.target.src = `https://via.placeholder.com/64x48/cccccc/666666?text=${country.name.substring(-1)}`;
                }}
              />
            </div>
          ))}
          {/* Duplicate set for seamless scrolling */}
          {africanEmblems.map((country, index) => (
            <div key={`second-${index}`} className="flex-shrink-0 mx-3">
              <img 
                src={country.emblem} 
                alt={`${country.name}`}
                className="w-16 h-12 object-cover rounded shadow-sm border border-gray-200"
                onError={(e) => {
                  // Fallback to a placeholder if image fails to load
                  e.target.src = `https://via.placeholder.com/64x48/cccccc/666666?text=${country.name.substring(-1)}`;
                }}
              />
            </div>
          ))}
        </div>
      </div>
      
      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-marquee {
          animation: marquee 60s linear infinite;
          width: calc(200%);
        }
      `}</style>
    </>
  );
};

export default AfricanFlagsScroll;