import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../api/auth.api";

function Register() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUserName] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("fullName", fullName);
    formData.append("username", username);
    formData.append("email", email);
    formData.append("password", password);

    if (avatar) {
      formData.append("avatar", avatar);
    }

    if (coverImage) {
      formData.append("coverImage", coverImage);
    }

    try {
      const response = await registerUser(formData)
      console.log("Registrtion Successfully : ", response.data);
      setSuccessMessage("Account successfully created! You can now log in.");
      setTimeout(() => { navigate("/login"); }, 1000);
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "An unknown error occurred.";

      console.error("Registration Failed:", error);
      alert("Error: " + errorMessage);
    } finally {
      setLoading(false);
      setFullName("");
      setUserName("");
      setPassword("");
      setEmail("");
    }
  };

  return (
    <div className="px-7 py-22 bg-black w-full  min-h-screen">
      <img className="w-22" src="src/assets/vidia-logo.png" alt="" />
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="mb-5 h-screen"
      >
        {successMessage && (
          <div className="mb-5 rounded-lg bg-green-500 px-4 py-3 text-center text-white font-semibold">
            {successMessage}
          </div>
        )}
        <h3 className="text-xl font-medium mb-2 text-white">Fullname</h3>
        <input
          value={fullName}
          onChange={(e) => {
            setFullName(e.target.value);
          }}
          className="bg-[#eeeeee] text-black mb-7 px-4 py-2 rounded border text-lg w-full placeholder:text-lg"
          required
          type="text"
          placeholder="Fullname"
        />
        <h3 className="text-xl font-medium mb-2 text-white">username</h3>
        <input
          value={username}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          className="bg-[#eeeeee] text-black mb-7 px-4 py-2 rounded border text-lg w-full placeholder:text-lg"
          required
          type="text"
          placeholder="username"
        />
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
        <h3 className="text-xl mb-2 font-medium text-white">Avatar</h3>
        <input
          onChange={(e) => {
            setAvatar(e.target.files[0]);
          }}
          className=" bg-[#eeeeee] text-black mb-7 px-4 py-2 rounded border text-lg w-full"
          required
          type="file"
          accept="image/*"
        />
        <h3 className="text-xl mb-2 font-medium text-white">Cover Image</h3>
        <input
          onChange={(e) => {
            setCoverImage(e.target.files[0]);
          }}
          className=" bg-[#eeeeee] text-black mb-7 px-4 py-2 rounded border text-lg w-full"
          required
          type="file"
          accept="image/*"
        />
        <button
          className="mb-7 px-4 py-2 w-full rounded border bg-[#A897F2] text-black font-semibold "
          disabled={loading}
        >
          {loading ? "Creating..." : "Create Account"}
        </button>
        <p className=" text-white text-center text-lg font-medium">
          Already Account Exist's -{" "}
          <Link to="/login" className="text-blue-700">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
