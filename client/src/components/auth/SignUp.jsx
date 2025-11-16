import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { motion, AnimatePresence } from "framer-motion";

import image4 from "../../assets/image4.jpg";
import image5 from "../../assets/image5.jpg";
import image6 from "../../assets/image6.jpg";
import logo from "../../assets/logo.png";

const sliderImages = [image4, image5, image6];

export default function SignUp() {
  const [step, setStep] = useState(1);
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();
  const { signup } = useAuth();

  // User fields
  const [fullName, setFullName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [password, setPassword] = useState("");

  // Document uploads
  const [profilePic, setProfilePic] = useState(null);
  const [aadhaar, setAadhaar] = useState(null);
  const [resume, setResume] = useState(null);
  const [experience, setExperience] = useState([]);
  const [practiceCert, setPracticeCert] = useState(null);

  // Registration details
  const [stateReg, setStateReg] = useState("");
  const [rci, setRci] = useState("");

  // Error
  const [error, setError] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleExperienceUpload = (e) => {
    setExperience(Array.from(e.target.files));
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const db = getFirestore();
    const storage = getStorage();

    try {
      const userCredential = await signup(email, password);
      const uid = userCredential.user.uid;

      const uploadFile = async (file, path) => {
        if (!file) return null;
        const fileRef = ref(storage, path);
        await uploadBytes(fileRef, file);
        return await getDownloadURL(fileRef);
      };

      const profilePicURL = await uploadFile(profilePic, `doctors/${uid}/profilePic`);
      const aadhaarURL = await uploadFile(aadhaar, `doctors/${uid}/aadhaar`);
      const resumeURL = await uploadFile(resume, `doctors/${uid}/resume`);
      const practiceCertURL = await uploadFile(practiceCert, `doctors/${uid}/practiceCert`);

      const experienceURLs = experience.length
        ? await Promise.all(
            experience.map((file, idx) => uploadFile(file, `doctors/${uid}/experience_${idx}`))
          )
        : [];

      await addDoc(collection(db, "doctor"), {
        uid,
        fullName,
        mobile,
        email,
        gender,
        dob,
        profilePicURL,
        aadhaarURL,
        resumeURL,
        experienceURLs,
        practiceCertURL,
        stateReg,
        rci,
        createdAt: new Date(),
      });

      navigate("/login");
    } catch (err) {
      setError(err.message);
    }
  };

  // Animations
  const variants = {
    initial: { x: 300, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: -300, opacity: 0 },
  };

  return (
    <div className="h-screen overflow-hidden flex items-center justify-center bg-gradient-to-b from-yellow-10 to-yellow-100 p-6">
      <div className="bg-gradient-to-b from-yellow-50 to-yellow-200 rounded-3xl shadow-xl flex max-w-5xl w-full h-[110%] overflow-hidden">
        
        {/* Left - Form Section */}
        <div className="w-full lg:w-1/2 px-12 py-6 flex flex-col justify-between font-sans h-full">
          <div>
            <img src={logo} alt="Logo" className="h-32 w-auto object-contain mb-6 mx-auto" />
            <h2 className="text-3xl font-semibold text-gray-900 mb-6 mt-6 text-center">
              Create an account
            </h2>

            {error && (
              <div className="bg-red-100 text-red-600 p-3 rounded mb-4 text-sm">{error}</div>
            )}

            <form
              onSubmit={step === 5 ? handleSubmit : (e) => { e.preventDefault(); nextStep(); }}
              className="relative w-full h-[70%] flex flex-col justify-center"
              encType="multipart/form-data"
            >
              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>Step {step} of 5</span>
                  <span>{Math.round((step / 5) * 100)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                  <motion.div
                    className="bg-yellow-400 h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${(step / 5) * 100}%` }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
              </div>

              <AnimatePresence mode="wait">
                {/* STEP 1 - Full Name + Email */}
                {step === 1 && (
                  <motion.div key="step1" variants={variants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.5 }} className="flex flex-col justify-between h-full">
                    <div className="space-y-6">
                      <input type="text" placeholder="Full name" value={fullName} onChange={(e) => setFullName(e.target.value)} className="w-full rounded-lg border border-gray-300 p-3" required />
                      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full rounded-lg border border-gray-300 p-3" required />
                    </div>
                    <div className="flex justify-end mt-8">
                      <button type="button" className="bg-yellow-400 text-white px-6 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition" onClick={nextStep}>Next</button>
                    </div>
                  </motion.div>
                )}

                {/* STEP 2 - Mobile + Gender + DOB + Password */}
                {step === 2 && (
                  <motion.div key="step2" variants={variants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.5 }} className="flex flex-col justify-between h-full">
                    <div className="space-y-6">
                      <input type="tel" placeholder="Mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} className="w-full rounded-lg border border-gray-300 p-3" required />
                      <select value={gender} onChange={(e) => setGender(e.target.value)} className="w-full rounded-lg border border-gray-300 p-3" required>
                        <option value="" disabled>Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                      <input type="date" placeholder="Date of Birth" value={dob} onChange={(e) => setDob(e.target.value)} className="w-full rounded-lg border border-gray-300 p-3" required />
                      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full rounded-lg border border-gray-300 p-3" required />
                    </div>
                    <div className="flex justify-between mt-8">
                      <button type="button" className="bg-gray-200 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-300 transition" onClick={prevStep}>Back</button>
                      <button type="button" className="bg-yellow-400 text-white px-6 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition" onClick={nextStep}>Next</button>
                    </div>
                  </motion.div>
                )}

                {/* STEP 3 - Profile Pic + Aadhaar */}
                {step === 3 && (
                  <motion.div key="step3" variants={variants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.5 }} className="flex flex-col justify-between h-full">
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium mb-1">Profile Picture</label>
                        <input type="file" className="w-full rounded-lg border border-gray-300 p-3" onChange={(e) => setProfilePic(e.target.files[0])} required />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Aadhaar Card</label>
                        <input type="file" className="w-full rounded-lg border border-gray-300 p-3" onChange={(e) => setAadhaar(e.target.files[0])} required />
                      </div>
                    </div>
                    <div className="flex justify-between mt-8">
                      <button type="button" className="bg-gray-200 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-300 transition" onClick={prevStep}>Back</button>
                      <button type="button" className="bg-yellow-400 text-white px-6 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition" onClick={nextStep}>Next</button>
                    </div>
                  </motion.div>
                )}

                {/* STEP 4 - Resume + Experience + Practice Cert */}
                {step === 4 && (
                  <motion.div key="step4" variants={variants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.5 }} className="flex flex-col justify-between h-full">
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium mb-1">Resume / CV</label>
                        <input type="file" className="w-full rounded-lg border border-gray-300 p-3" onChange={(e) => setResume(e.target.files[0])} required />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Letters from Employers</label>
                        <input type="file" className="w-full rounded-lg border border-gray-300 p-3" multiple onChange={handleExperienceUpload} />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Practice Certificate</label>
                        <input type="file" className="w-full rounded-lg border border-gray-300 p-3" onChange={(e) => setPracticeCert(e.target.files[0])} />
                      </div>
                    </div>
                    <div className="flex justify-between mt-8">
                      <button type="button" className="bg-gray-200 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-300 transition" onClick={prevStep}>Back</button>
                      <button type="button" className="bg-yellow-400 text-white px-6 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition" onClick={nextStep}>Next</button>
                    </div>
                  </motion.div>
                )}

                {/* STEP 5 - Registration (Submit) */}
                {step === 5 && (
                  <motion.div key="step5" variants={variants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.5 }} className="flex flex-col justify-between h-full">
                    <div className="space-y-6">
                      <input type="text" placeholder="State Medical Council Registration Number" value={stateReg} onChange={(e) => setStateReg(e.target.value)} className="w-full rounded-lg border border-gray-300 p-3" required />
                      <input type="text" placeholder="RCI License Number (for clinical psychologists)" value={rci} onChange={(e) => setRci(e.target.value)} className="w-full rounded-lg border border-gray-300 p-3" />
                    </div>
                    <div className="flex justify-between mt-8">
                      <button type="button" className="bg-gray-200 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-300 transition" onClick={prevStep}>Back</button>
                      <button type="submit" className="bg-yellow-400 text-white px-6 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition">Submit</button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>

          {/* Already a User? */}
          <p className="mt-6 text-sm text-gray-600 text-center">
            Already have an account?{" "}
            <a href="/login" className="text-yellow-600 font-semibold hover:underline">
              Login here
            </a>
          </p>
        </div>

        {/* Right - Slider */}
        <div className="hidden lg:block w-1/2 relative rounded-r-3xl overflow-hidden">
          <img src={sliderImages[currentSlide]} alt="Sign Up Visual" className="w-full h-full object-cover transition-transform duration-700 ease-in-out" draggable={false} />
        </div>
      </div>
    </div>
  );
}
