import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import UserList from "../components/UserList";
import UserDetails from "../components/UserDetails";

const HomePage = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "https://602e7c2c4410730017c50b9d.mockapi.io/users"
        );
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-200 to-blue-100">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-10 px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          {loading ? (
            <p className="text-center text-lg">Loading...</p>
          ) : (
            <UserList users={users} onSelectUser={setSelectedUser} />
          )}
        </div>
        <div>
          {selectedUser ? (
            <UserDetails user={selectedUser} />
          ) : (
            <p className="text-center text-lg text-gray-600">
              Select a user to view details
            </p>
          )}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
