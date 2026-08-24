import React, { useState } from "react";
import Logout from "../../pages/auth/Logout";
import { updateAccountDetails } from "../../api/auth.api";
import ChangePassword from "../../pages/auth/ChangePassword";

function SettingView() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [showChangePassword, setShowChangePassword] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!fullName || !email) {
      alert("Full name and email are required");
      return;
    }

    try {
      setLoading(true);

      const updatedDetails = {
        fullName,
        email,
      };

      const response = await updateAccountDetails(updatedDetails);

      //console.log("Update Account Details:", response);

      // Backend se updated user yahan milega
      const user = response.data;

      //console.log("Updated User:", user);

      setSuccessMessage("Account details updated successfully!");
    } catch (error) {
      const errorMessage =
        error?.response?.data?.message ||
        error?.message ||
        "An unknown error occurred.";

      console.error("Update Details Failed:", error);
      alert("Update Details Failed: " + errorMessage);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <div className="text-gray-300 p-4">
        <h3 className="text-2xl font-semibold mb-4">Account Settings</h3>
        <p>Update your personal information and preferences.</p>
        <div className="mt-4 max-w-md space-y-4">
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            {successMessage && (
              <div className="mb-5 rounded-lg bg-green-500 px-4 py-3 text-center text-white font-semibold">
                {successMessage}
              </div>
            )}
            <div>
              <label className="text-sm font-medium text-gray-400">
                FullName
              </label>
              <input
                type="text"
                placeholder="user"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full p-2 mt-1 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-purple-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-400">Email</label>
              <input
                type="email"
                placeholder="user@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 mt-1 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-purple-500 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className=" text-white text-center text-lg font-medium mt-4 p-4 w-full bg-[#8200DB] hover:bg-[#6c07aa] w- rounded-xl cursor-pointer"
            >
              {loading ? "Updating..." : "Update Details"}
            </button>
          </form>
          <button
            onClick={() => setShowChangePassword(true)}
            className=" text-white text-center text-lg font-medium mt-4 p-4 w-full bg-[#8200DB] hover:bg-[#6c07aa] w- rounded-xl cursor-pointer"
          >
            Change Password
          </button>
          {showChangePassword && (
            <ChangePassword setShowChangePassword={setShowChangePassword} />
          )}
          <Logout />
        </div>
      </div>
    </div>
  );
}

export default SettingView;
