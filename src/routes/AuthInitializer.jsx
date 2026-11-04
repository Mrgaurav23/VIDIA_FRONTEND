import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {login, logout} from "../store/authSlice.js"
import api from "../api/axios.js";

function AuthInitializer() {
  const dispatch = useDispatch();

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const response = await api.get("/users/current-user");

        dispatch(login(response.data.data));
      } catch (error) {
        dispatch(logout());
      }
    };

    verifyUser();
  }, [dispatch]);

  return null;
}

export default AuthInitializer;
