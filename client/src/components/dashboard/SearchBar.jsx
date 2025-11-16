import React, { useState } from "react";
import { Bell, MessageCircle } from "lucide-react"; // icons

export default function SearchBarWithProfile() {
  const [search, setSearch] = useState("");
  const [profileImg, setProfileImg] = useState("https://randomuser.me/api/portraits/men/1.jpg");

  const user = {
    name: "Dr. Robert Downey Jr.",
    id: "doctor@ironman.com",
  };

  // To change the profile image
  const handleImageChange = (e) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      const imgUrl = URL.createObjectURL(file);
      setProfileImg(imgUrl);
    }
  };

  return (
    <div className="flex items-center bg-gradient-to-b from-yellow-50 to-yellow-200 p-4 rounded-xl shadow-md min-w-[400px]">
      {/* Search bar */}
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search..."
        className="flex-grow px-4 py-2 rounded-l-full w-50 border border-gray-300 outline-none"
      />

      {/* Icons */}
      <div className="flex items-center space-x-3 ml-4">
        <button className="p-2 rounded-full bg-white shadow hover:bg-gray-100">
          <Bell className="w-5 h-5 text-gray-600" />
        </button>
        <button className="p-2 rounded-full bg-white shadow hover:bg-gray-100">
          <MessageCircle className="w-5 h-5 text-gray-600" />
        </button>

        {/* Profile */}
        <div className="flex items-center space-x-3">
          <div className="relative">
            <img
              src={profileImg}
              alt="Profile"
              className="w-12 h-12 rounded-full border-2 border-green-600 object-cover"
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="absolute bottom-0 right-0 w-6 h-6 opacity-0 cursor-pointer"
              style={{ zIndex: 2 }}
              title="Change profile"
            />
          </div>
          <div className="text-left">
            <p className="font-semibold text-gray-800">{user.name}</p>
            <p className="text-sm text-gray-500">{user.id}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
