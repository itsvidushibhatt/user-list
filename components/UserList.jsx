import React, { useState, useEffect } from "react";
import Loader from "./Loader"; // Import your Loader component

const UserList = ({ users = [], onSelectUser }) => {
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [preloadedImages, setPreloadedImages] = useState([]);

  useEffect(() => {
    if (!users || users.length === 0) return;

    const preloadImagesWithRetry = () => {
      const promises = users.map((user) =>
        new Promise((resolve) => {
          const loadImage = (src, retries = 3) => {
            const img = new Image();
            img.src = src;
            img.onload = () => resolve(src);
            img.onerror = () => {
              if (retries > 0) {
                setTimeout(() => loadImage(src, retries - 1), 500); // Retry after 500ms
              } else {
                resolve("https://via.placeholder.com/50"); // Fallback image
              }
            };
          };

          const imageSrc =
            user?.avatar?.startsWith("https://cloudflare-ipfs.com")
              ? user.avatar.replace(
                  "https://cloudflare-ipfs.com",
                  "https://gateway.pinata.cloud"
                )
              : user?.avatar || "https://via.placeholder.com/50";

          loadImage(imageSrc);
        })
      );

      Promise.all(promises).then((loadedImages) => {
        setPreloadedImages(loadedImages);
        setImagesLoaded(true);
      });
    };

    preloadImagesWithRetry();
  }, [users]);

  const handleUserClick = (user) => {
    if (!user) return;
    setSelectedUserId(user.id);
    onSelectUser(user);

    // Scroll to top of details on click
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!users || users.length === 0) {
    return (
      <div className="flex justify-center items-center h-96">
        <p className="text-gray-500 text-lg">No users available to display.</p>
      </div>
    );
  }

  if (!imagesLoaded) {
    return (
      <div className="flex justify-center items-center h-96">
        <Loader /> {/* Display the loader while images are being preloaded */}
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Heading */}
      <h3 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">
        User List
      </h3>

      {/* User List */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user, index) => (
          <li
            key={`${user.id || "user"}-${index}`} // Ensure unique key
            onClick={() => handleUserClick(user)}
            className={`relative group p-6 bg-gradient-to-br from-white to-gray-100 rounded-xl shadow-md transition transform hover:-translate-y-2 duration-300 ${
              selectedUserId === user?.id
                ? "ring-4 ring-blue-500"
                : "hover:ring-2 hover:ring-blue-300"
            }`}
          >
            {/* Avatar */}
            <div className="relative w-16 h-16 mx-auto">
              <img
                src={preloadedImages[index]} // Use preloaded images
                alt={user?.profile?.username || "User Avatar"}
                className="w-full h-full rounded-full object-cover border-4 border-gray-300 group-hover:border-blue-500"
              />
              {selectedUserId === user?.id && (
                <span className="absolute bottom-0 right-0 w-4 h-4 bg-blue-500 rounded-full border-2 border-white"></span>
              )}
            </div>

            {/* User Info */}
            <div className="mt-4 text-center">
              <p className="font-bold text-lg text-gray-800 group-hover:text-blue-600">
                {`${user?.profile?.firstName || "Unnamed"} ${
                  user?.profile?.lastName || "User"
                }`}
              </p>
              <p className="text-sm text-gray-500">{user?.jobTitle || "Job Title"}</p>
              <p className="text-sm text-gray-400 truncate">
                {user?.Bio || "No bio available."}
              </p>
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 via-blue-300 to-blue-500 opacity-0 group-hover:opacity-10 transition duration-300"></div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
