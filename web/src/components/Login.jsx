import { useLocation } from "react-router-dom";
import { loginWithGoogle, loginWithFacebook } from "../api";
import { useEffect } from "react";
import axios from "axios";

const Login = () => {
  const location = useLocation();

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8887/auth/google/callback"
        );
        if (response.data.token) {
          localStorage.setItem("token", response.data.token);
          window.location.href = "/";
        }
      } catch (error) {
        console.error("Error fetching token:", error);
      }
    };
    fetchToken();
  }, [location]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <button
        className="mb-4 p-2 bg-blue-500 text-white rounded"
        onClick={loginWithGoogle}
      >
        Login with Google
      </button>
      <button
        className="p-2 bg-blue-700 text-white rounded"
        onClick={loginWithFacebook}
      >
        Login with Facebook
      </button>
    </div>
  );
};

export default Login;
