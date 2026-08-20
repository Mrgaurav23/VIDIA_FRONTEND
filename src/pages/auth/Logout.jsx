import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../store/authSlice";
import { logoutUser } from "../../api/auth.api";

function Logout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async () => {

    try {
      const response = await logoutUser()

      //const { user } = response.data;

      if (response.success) {
        dispatch(logout());
      }

      // Access token remove karo
        localStorage.removeItem("accessToken");

      navigate("/");
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "logout error occured.";

      console.error("Logout Failed:", error);
      alert("Logout Failed: " + errorMessage);
    }
  };

  return (
    <button
      className=" text-white text-center text-lg font-medium mt-4 p-4 w-full bg-[#4f0418] w- rounded-xl"
      onClick={logoutHandler}
    >
      LOGOUT
    </button>
  );
}

export default Logout;
