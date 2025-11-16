// Sidebar.js
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import logo from '../assets/logo.png'; // Import your logo image

const menu = [
  { name: "Dashboard", path: "/" },
  { name: "Calendar", path: "/calendar" },
  { name: "Reviews", path: "/doctor-reviews" },
  { name: "Current Patients", path: "/current-patients" },
  { name: "Past Patients", path: "/past-patients" },
];

export default function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  return (
    <nav className="fixed left-0 top-0 h-screen w-75 bg-gradient-to-b from-yellow-100 to-yellow-300 rounded-3xl m-4 shadow flex flex-col py-8 px-6 z-30">
      <div className="flex items-center mb-10">
        {/* Logo, you can customize */}
        <div className="-mb-17 -mt-15 p-2 rounded-full mr-2">
          <img src={logo} alt="Logo" className="h-32 w-auto object-contain mb-6 mx-auto" />
        </div>
      </div>
      <div className="mb-7">
        <div className="text-xs text-gray-400 mb-1">MENU</div>
        <ul className="space-y-2">
          {menu.map(({ name, path }) => {
            const isActive = location.pathname === path;
            return (
              <li key={name}>
                <Link
                  to={path}
                  className={`rounded-lg px-4 py-2 block transition-all ${
                    isActive
                      ? "bg-[#FFD93D] text-green-800 font-semibold shadow"
                      : "hover:bg-[#F6F1E9] text-gray-800"
                  }`}
                >
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="mt-auto mb-4">
        <div className="text-xs text-gray-400 mb-1">GENERAL</div>
        <ul>
          <li>
            <div
              className="flex items-center cursor-pointer rounded-lg px-4 py-2 hover:bg-green-50 text-gray-800"
              onClick={handleLogout}
            >
              <button className="bg-green-800 text-white rounded-full w-9 h-9 mr-2 font-bold">
                R
              </button>
              <span className="hover:underline">Logout</span>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}
