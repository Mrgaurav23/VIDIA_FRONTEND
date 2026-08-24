import { useState } from "react";
import { changePassword } from "../../api/auth.api";

function ChangePassword({ setShowChangePassword }) {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    setSuccessMessage("");

    if (!oldPassword || !newPassword || !confirmPassword) {
      alert("All fields are required!");
      return;
    }

    if (newPassword !== confirmPassword) {
      alert("New password and confirm password do not match!");
      return;
    }

    try {
      setLoading(true);

      const passwordData = {
        oldPassword,
        newPassword,
        confirmPassword,
      };

      const response = await changePassword(passwordData);

      console.log("Password updated successfully:", response.data);

      setSuccessMessage("Password changed successfully!");

      setOldPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (error) {
      const errorMessage =
        error?.response?.data?.message ||
        error?.message ||
        "An unknown error occurred";

      console.error("Change Password Failed:", error);

      alert("Change Password Failed: " + errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
      <div className="w-full max-w-[450px] rounded-[14px] bg-[#1d293b] p-6 shadow-xl">

        {/* Header */}
        <div className="mb-5">
          <h2 className="text-[22px] font-medium text-white">
            Change Password
          </h2>

          <p className="mt-1 text-[14px] text-[#b8c2d1]">
            Update your password to keep your account secure.
          </p>
        </div>

        <form onSubmit={submitHandler} className="space-y-4">

          {/* Current Password */}
          <div>
            <label className="mb-2 block text-[14px] font-medium text-white">
              Current Password
            </label>

            <input
              type="password"
              placeholder="Enter current password"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              className="h-[46px] w-full rounded-[9px] border border-[#4b5870] bg-[#37445A] px-3 text-[14px] text-white outline-none placeholder:text-[#aab4c3]"
            />
          </div>

          {/* New Password */}
          <div>
            <label className="mb-2 block text-[14px] font-medium text-white">
              New Password
            </label>

            <input
              type="password"
              placeholder="Enter new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="h-[46px] w-full rounded-[9px] border border-[#4b5870] bg-[#37445A] px-3 text-[14px] text-white outline-none placeholder:text-[#aab4c3]"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="mb-2 block text-[14px] font-medium text-white">
              Confirm New Password
            </label>

            <input
              type="password"
              placeholder="Confirm new password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="h-[46px] w-full rounded-[9px] border border-[#4b5870] bg-[#37445A] px-3 text-[14px] text-white outline-none placeholder:text-[#aab4c3]"
            />
          </div>

          {/* Success */}
          {successMessage && (
            <p className="rounded-[8px] bg-green-500/10 px-3 py-2 text-sm text-green-400">
              {successMessage}
            </p>
          )}

          {/* Buttons */}
          <div className="flex gap-3 pt-2">

            <button
              disabled={loading}
              type="submit"
              className="h-[46px] flex-1 cursor-pointer rounded-[9px] bg-[#8b00e8] text-[14px] font-semibold text-white transition hover:bg-[#7900c9] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Updating..." : "Update Password"}
            </button>

            <button
              type="button"
              onClick={() => setShowChangePassword(false)}
              className="h-[46px] rounded-[9px] bg-[#37445A] px-5 text-[14px] font-medium text-white transition hover:bg-[#414f65]"
            >
              Cancel
            </button>

          </div>
        </form>
      </div>
    </div>
  );
}

export default ChangePassword;