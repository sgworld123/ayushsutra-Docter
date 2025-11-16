import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import "@fontsource/poppins";  // Import Poppins font
import image1 from '../../assets/image1.jpg';
import image2 from '../../assets/image2.jpg';
import image3 from '../../assets/image3.jpg';
import logo from '../../assets/logo.png'; // Import your logo image

const carouselImages = [image1, image2, image3];

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [currentImage, setCurrentImage] = useState(0);
  const navigate = useNavigate();

  // Carousel effect to change image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % carouselImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleLogin = async (event) => {
    event.preventDefault();
    setError("");
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      auth.onAuthStateChanged(user => {
        if (user) navigate("/");
      });
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      auth.onAuthStateChanged(user => {
        if (user) navigate("/");
      });
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-10 bg-gradient-to-b from-yellow-10 to-yellow-100">
      <div className="max-w-5xl w-full bg-gradient-to-b from-yellow-50 to-yellow-200 rounded-3xl shadow-xl flex overflow-hidden">
        {/* Left - Form panel */}
        <div className="w-full lg:w-1/2 py-1 px-14 flex flex-col justify-center relative">
         <img src={logo} alt="Logo" className="h-50 w-150 object-contain mb-6 mx-auto" />

          <h2
            className="text-3xl font-semibold text-gray-900 mb-4 text-center"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Welcome Back!
          </h2>

          <p className="text-gray-600 mb-12 text-center text-sm">Sign in to continue</p>

          {error && (
            <div className="bg-red-100 text-red-600 p-3 rounded mb-8 text-sm text-center">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-6 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-full border border-gray-300 p-4 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full rounded-full border border-gray-300 p-4 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button
              type="submit"
              className="w-full bg-yellow-400 text-white p-4 rounded-full font-semibold hover:bg-yellow-500 transition"
            >
              Submit
            </button>
          </form>

          <div className="flex justify-center mt-8 max-w-md mx-auto">
            <button
              onClick={handleGoogleLogin}
              className="flex items-center space-x-2 border border-gray-300 rounded-full px-6 py-2 hover:bg-gray-100 transition"
            >
              <img
                src="https://www.svgrepo.com/show/355037/google.svg"
                alt="Google icon"
                className="w-5 h-5"
              />
              <span>Sign in with Google</span>
            </button>
          </div>

          <div className="flex justify-between mt-12 max-w-md mx-auto px-4">
            <p className="text-xs text-gray-500">
              Have an account? <Link to="/sign-up" className="underline hover:text-yellow-600">Sign in</Link>
            </p>

            <p className="text-xs text-gray-400">
              <Link to="/terms" className="underline hover:text-yellow-600 ml-6">Terms & Conditions</Link>
            </p>
          </div>
        </div>

        {/* Right - Carousel images */}
        <div className="hidden lg:flex w-1/2 relative rounded-r-3xl overflow-hidden">
          {carouselImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Slide ${index + 1}`}
              className={`absolute h-full w-full object-cover transition-opacity duration-1000 ${
                index === currentImage ? "opacity-100" : "opacity-0"
              }`}
              draggable={false}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
