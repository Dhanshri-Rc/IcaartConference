import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaGoogle } from "react-icons/fa";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "dhanshrip.rc@gmail.com" && password === "1234") {
      navigate("/");
    } else {
      alert("Invalid login credentials");
    }
  };

  return (
    <div className="min-h-screen bg-[#f4f4f4] flex items-center justify-center">

      {/* Login Box */}
      <div className="w-[420px] bg-white border shadow-sm p-6">

        <h2 className="text-[22px] font-semibold text-gray-800 mb-4">
          Admin Login
        </h2>

        <form onSubmit={handleLogin} className="space-y-4">

          {/* Email */}
          <div>
            <label className="text-sm text-gray-700">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full mt-1 border px-3 py-2 text-sm focus:outline-none focus:border-orange-500"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-sm text-gray-700">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full mt-1 border px-3 py-2 text-sm focus:outline-none focus:border-orange-500"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div>

          {/* Login Button */}
         
 <button
            type="submit"
            className="w-full py-3 rounded-full text-white font-semibold bg-gradient-to-r from-orange-400 to-pink-500 hover:opacity-90"
          >
            LOGIN
          </button>
        </form>

        {/* Links */}
        <div className="text-sm text-gray-600 mt-4 space-y-1">

         <div className="text-right text-sm text-gray-500 mb-6 cursor-pointer hover:text-gray-700">
            Forgot password?
          </div>

        </div>

         <div className="flex justify-center gap-4">

          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-700 text-white cursor-pointer">
            <FaFacebookF/>
          </div>

          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-sky-500 text-white cursor-pointer">
            <FaTwitter/>
          </div>

          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-red-500 text-white cursor-pointer">
            <FaGoogle/>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Login;