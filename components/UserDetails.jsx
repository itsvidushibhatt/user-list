import React, { useState, useEffect } from "react";
import Loader from "./Loader"; // Import the Loader component

const UserDetails = ({ user }) => {
  const [isLoading, setIsLoading] = useState(true); // Controls loader visibility

  useEffect(() => {
    // Simulate a delay for loading user details (e.g., fetching from an API)
    const timer = setTimeout(() => {
      setIsLoading(false); // Disable loader after details are ready
    }, 500); // Adjust the timeout duration as needed

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, [user]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-96">
        <Loader /> {/* Display the loader while user details are loading */}
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto p-6 md:p-8 bg-gradient-to-b from-blue-50 via-white to-gray-50 rounded-3xl shadow-xl transform transition duration-500 hover:shadow-2xl hover:scale-105">
      {/* Avatar with Border and Badge */}
      <div className="relative w-24 h-24 md:w-32 md:h-32 mx-auto">
        <img
          src={
            user.avatar?.startsWith("https://cloudflare-ipfs.com")
              ? user.avatar.replace("https://cloudflare-ipfs.com", "https://gateway.pinata.cloud")
              : user.avatar || "https://via.placeholder.com/150"
          }
          alt={user.profile?.username || "User Avatar"}
          className="w-full h-full rounded-full object-cover border-4 border-blue-400 shadow-lg hover:shadow-blue-400 transition duration-300"
        />
        <span className="absolute bottom-1 right-1 bg-green-500 w-4 h-4 md:w-6 md:h-6 rounded-full border-2 border-white shadow-md"></span>
      </div>

      {/* User Info */}
      <div className="text-center mt-6 md:mt-8">
        <h3 className="text-2xl md:text-3xl font-extrabold text-gray-800 tracking-tight mb-2">
          {`${user.profile?.firstName || "Unnamed"} ${user.profile?.lastName || "User"}`}
        </h3>
        <p className="text-md md:text-lg text-gray-500 font-medium mb-4 md:mb-6">
          {user.jobTitle || "Job Title"}
        </p>

        {/* Divider */}
        <div className="h-px w-2/3 mx-auto bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 mb-4 md:mb-6"></div>

        {/* Username */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 mb-4">
          <span className="text-gray-500 font-medium">Username:</span>
          <span className="text-gray-800 font-semibold bg-gray-100 px-2 py-1 rounded-md">
            {user.profile?.username || "N/A"}
          </span>
        </div>

        {/* Email */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 mb-4">
          <span className="text-gray-500 font-medium">Email:</span>
          <span className="text-blue-600 font-semibold hover:underline cursor-pointer">
            {user.profile?.email || "N/A"}
          </span>
        </div>

        {/* Bio */}
        <div className="mt-4 px-4 md:px-6">
          <p className="text-gray-700 text-sm md:text-md italic leading-relaxed">
            {user.Bio || "No bio available."}
          </p>
        </div>
      </div>

      {/* Call-to-Action Buttons */}
      <div className="mt-6 md:mt-8 flex flex-col sm:flex-row justify-center gap-4">
        <button className="px-4 py-2 md:px-6 md:py-3 bg-blue-500 text-white font-bold rounded-full shadow-md hover:bg-blue-600 hover:shadow-lg transition duration-300">
          Message
        </button>
        <button className="px-4 py-2 md:px-6 md:py-3 bg-gray-200 text-gray-800 font-bold rounded-full shadow-md hover:bg-gray-300 hover:shadow-lg transition duration-300">
          More Info
        </button>
      </div>
    </div>
  );
};

export default UserDetails;
