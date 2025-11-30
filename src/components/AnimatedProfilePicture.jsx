import React from 'react';

const AnimatedProfilePicture = ({ imageUrl }) => {
  return (
    <div className="flex items-center justify-center my-4">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-15px) translateX(5px); }
          50% { transform: translateY(-20px) translateX(0px); }
          75% { transform: translateY(-10px) translateX(-5px); }
        }

        @keyframes rotateBorder {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes pulse-glow {
          0%, 100% { opacity: 0.5; box-shadow: 0 0 20px rgba(168, 85, 247, 0.4), 0 0 40px rgba(236, 72, 153, 0.3); }
          50% { opacity: 0.8; box-shadow: 0 0 30px rgba(168, 85, 247, 0.6), 0 0 60px rgba(236, 72, 153, 0.5); }
        }

        @keyframes shimmer {
          0%, 100% { opacity: 0; transform: translateX(-100%); }
          50% { opacity: 1; }
          100% { opacity: 0; transform: translateX(100%); }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-rotate-border {
          animation: rotateBorder 8s linear infinite;
        }

        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }

        .shimmer-effect {
          animation: shimmer 3s infinite;
        }

        .profile-picture-wrapper {
          position: relative;
          width: 140px;
          height: 140px;
        }

        @media (min-width: 640px) {
          .profile-picture-wrapper {
            width: 180px;
            height: 180px;
          }
        }

        @media (min-width: 1024px) {
          .profile-picture-wrapper {
            width: 220px;
            height: 220px;
          }
        }
      `}</style>

      <div className="profile-picture-wrapper animate-float">
        {/* Outer animated gradient ring */}
        <div 
          className="absolute inset-0 rounded-full animate-rotate-border"
          style={{
            background: 'conic-gradient(from 0deg, #a855f7, #ec4899, #f43f5e, #a855f7)',
            padding: '3px',
          }}
        >
          {/* Inner container for the actual content */}
          <div className="w-full h-full rounded-full bg-gray-50 dark:bg-gray-900"></div>
        </div>

        {/* Pulsing glow background */}
        <div 
          className="absolute inset-0 rounded-full animate-pulse-glow"
          style={{
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.1), transparent)',
          }}
        ></div>

        {/* Main profile image container */}
        <div 
          className="absolute inset-[3px] rounded-full overflow-hidden 
                     bg-cover bg-center bg-no-repeat
                     transition-all duration-300 ease-out
                     hover:scale-95 cursor-pointer
                     shadow-2xl"
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
        >
          {/* Shimmer overlay effect on hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 hover:opacity-20 shimmer-effect"></div>
          
          {/* Dark overlay that intensifies on hover */}
          <div className="absolute inset-0 bg-black opacity-0 hover:opacity-5 transition-opacity duration-300"></div>
        </div>

        {/* Floating accent dots */}
        <div className="absolute -top-2 -right-2 w-4 h-4 bg-purple-500 rounded-full shadow-lg opacity-80"></div>
        <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-pink-500 rounded-full shadow-lg opacity-70"></div>
        <div className="absolute top-1/2 -right-3 w-2 h-2 bg-rose-500 rounded-full shadow-lg opacity-60"></div>
      </div>
    </div>
  );
};

export default AnimatedProfilePicture;