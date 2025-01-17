import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import login from "../assets/login.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast,Bounce } from "react-toastify";

const Login = () => {
  const [formData, setFormdata] = useState({
    email: "",
    password: "",
    people: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleonChange = (e) => {
    const { name, value } = e.target;
    setFormdata({ ...formData, [name]: value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(""); // Reset any previous error
    try {
      const response = await axios.post("http://localhost:3000/api/v1/login", {
        email: formData.email,
        password: formData.password,
      });
      toast.success('🦄 Login Successfully!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
          navigate(`/dashboard/${formData.email}/${formData.people}`);
      
    } catch (error) {
      console.error("Login Error:", error);
      setError("Invalid email or password. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="bg-[#f3edeb] flex justify-center items-center flex-col sm:flex-row"
      style={{ minHeight: "90vh" }}
    >
      {/* Login Illustration */}
      <div className="flex justify-center items-center">
        <img
          src={login}
          alt="Login Illustration"
          className="sm:w-96 w-72 h-auto"
        />
      </div>

      {/* Login Form */}
      <div className="flex justify-center items-center flex-col p-4 shadow-lg sm:me-14">
        <h1 className="text-3xl font-mono my-3 text-center sm:text-left">
          Welcome 👋
        </h1>
        <p className="text-lg text-gray-400 my-3 text-center sm:text-left">
          Don't have an account?{" "}
          <a href="/register" className="text-blue-400 hover:underline">
            Register
          </a>
        </p>

        {/* Error Message */}
        {error && (
          <p className="text-red-500 text-center my-2">{error}</p>
        )}

        <form
          onSubmit={handleOnSubmit}
          className="flex flex-col items-center sm:items-start"
        >
          {/* Email Field */}
          <TextField
            id="email"
            label="Email"
            variant="filled"
            style={{ width: "100%", maxWidth: "400px", margin: "1% 0" }}
            name="email"
            type="email"
            required
            onChange={handleonChange}
            value={formData.email}
          />

          {/* Password Field */}
          <TextField
            id="password"
            label="Password"
            variant="filled"
            style={{ width: "100%", maxWidth: "400px", margin: "1% 0" }}
            name="password"
            type="password"
            autoComplete="current-password"
            required
            onChange={handleonChange}
            value={formData.password}
          />

          {/* User Role */}
          <div className="flex text-base font-medium sm:justify-start justify-center mt-4">
            <div className="flex items-center me-8 w-max">
              <input
                type="radio"
                id="client"
                name="people"
                value="client"
                checked={formData.people === "client"}
                onChange={handleonChange}
              />
              <label htmlFor="client" className="ml-2">
                Client
              </label>
            </div>
            <div className="flex items-center w-max">
              <input
                type="radio"
                id="provider"
                name="people"
                value="provider"
                checked={formData.people === "provider"}
                onChange={handleonChange}
              />
              <label htmlFor="provider" className="ml-2">
                Provider
              </label>
            </div>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="bg-orange-500 text-white py-2 px-6 w-max rounded mt-4 hover:bg-blue-500"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
