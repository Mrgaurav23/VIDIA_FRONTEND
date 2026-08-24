import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../store/authSlice";
import { loginUser } from "../../api/auth.api";
import store from "../../store/store";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Data to be sent to the backend
    const loginData = { email, password };

    try {
      // API Call to Backend
      const response = await loginUser(loginData);
      /*
      console.log("========== LOGIN DEBUG ==========");
      console.log("Full login response:", response);
      console.log("response.data:", response?.data);
      */
     
      // Assuming the backend returns data.user and data.accessToken
      const { user, accessToken } = response.data;
      /*
      console.log("User received from backend:", user);
      console.log("Access token:", accessToken);
      */
      dispatch(login(user));
      /*
      console.log("User dispatched to Redux:", user);
      console.log("Redux state after dispatch:", store.getState());

      console.log("Login Successful:", user);
      */

      // Store the token
      localStorage.setItem("accessToken", accessToken);

      // The refresh token is often handled automatically by an HTTP-only cookie set by the backend.
      //alert("Login Successful!");
      setSuccessMessage("Login Successful!");
      navigate("/home");
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "An unknown error occurred.";

      console.error("Login Failed:", error);
      alert("Login Failed: " + errorMessage);
    } finally {
      setLoading(false);
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="px-7 py-32 bg-black w-full h-screen">
      <img className="w-22" src="src/assets/vidia-logo.png" alt="" />
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="mb-5 "
      >
        {successMessage && (
          <div className="mb-5 rounded-lg bg-green-500 px-4 py-3 text-center text-white font-semibold">
            {successMessage}
          </div>
        )}
        <h3 className="text-xl font-medium mb-2 text-white">
          What's Your Email
        </h3>
        <input
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className="bg-[#eeeeee] text-black mb-7 px-4 py-2 rounded border text-lg w-full placeholder:text-lg"
          required
          type="email"
          placeholder="email@example.com"
        />
        <h3 className="text-xl mb-2 font-medium text-white">Password</h3>
        <input
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          className=" bg-[#eeeeee] text-black mb-7 px-4 py-2 rounded border text-lg w-full"
          required
          type="password"
          placeholder="password"
        />
        <button className="flex justify-center mb-7 px-4 py-2 w-full rounded border bg-[#C46630] text-black font-semibold">
          Login
        </button>
        <p className="text-center text-white">
          New Here -{" "}
          <Link to="/register" className="text-blue-600 text-sm font-medium">
            Create your Account
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
