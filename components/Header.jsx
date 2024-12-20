import React from "react";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 shadow-lg">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-center py-4 px-6 space-y-4 md:space-y-0 md:space-x-4">
        {/* User Directory Branding */}
        <div className="flex items-center space-x-4">
          {/* Decorative Logo Icon */}
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-8 h-8 text-purple-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5c-4.2 0-7.5 3.3-7.5 7.5s3.3 7.5 7.5 7.5 7.5-3.3 7.5-7.5S16.2 4.5 12 4.5z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3l2.5 1.5"
              />
            </svg>
          </div>

          {/* Title with Custom Font and Animation */}
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-wide text-white 
                       drop-shadow-lg animate-pulse font-[Poppins] leading-relaxed text-center md:text-left"
          >
            User Directory
          </h1>
        </div>
      </div>

      {/* Subtle Animated Bottom Glow */}
      <div className="h-1 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-500 animate-pulse"></div>
    </header>
  );
};

export default Header;
