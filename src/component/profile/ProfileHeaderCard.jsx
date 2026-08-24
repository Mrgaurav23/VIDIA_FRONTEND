import React, { useRef, useState } from "react";
import { Edit2 } from "lucide-react";
import { updateUserAvatar } from "../../api/auth.api";

function ProfileHeaderCard({ user, onUserUpdate }) {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files?.[0];

    if (!selectedFile) return;

    // Check image type
    if (!selectedFile.type.startsWith("image/")) {
      setError("Please select a valid image");
      return;
    }

    // 5 MB limit
    if (selectedFile.size > 5 * 1024 * 1024) {
      setError("Image size should be less than 5MB");
      return;
    }

    setFile(selectedFile);

    const imageUrl = URL.createObjectURL(selectedFile);
    setPreview(imageUrl);

    setError("");
    setSuccess("");
  };

  const handleEditClick = () => {
    fileInputRef.current?.click();
  };

  const handleUpload = async () => {
    if (!file) {
      setError("Please select an image first");
      return;
    }

    try {
      setLoading(true);
      setError("");
      setSuccess("");

      const formData = new FormData();

      formData.append("avatar", file);

      const response = await updateUserAvatar(formData);

      console.log("Updated user:", response);

      setSuccess(
        response?.message || "Avatar updated successfully"
      );

      // Parent user state ko update karna
      if (onUserUpdate && response?.data) {
        onUserUpdate(response.data);
      }

      // Reset selected file
      setFile(null);

      // Preview ko thodi der baad clear kar sakte ho
      setPreview("");

      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } catch (error) {
      console.error("Avatar update failed:", error);

      setError(
        error?.response?.data?.message ||
          error?.message ||
          "Failed to update avatar"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-800 rounded-xl p-6 shadow-xl border border-gray-700/50 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">

      {/* Hidden File Input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />

      {/* Avatar */}
      <img
        src={preview || user?.avatar}
        alt={`${user?.username || "User"} avatar`}
        className="w-24 h-24 rounded-full border-4 border-purple-500 object-cover"
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src =
            "https://placehold.co/100x100/1f2937/ffffff?text=U";
        }}
      />

      {/* User Information */}
      <div className="flex-grow text-center md:text-left">

        <h2 className="text-xl font-bold text-white">
          {user?.fullName}
        </h2>

        <p className="text-gray-400 mt-1">
          @{user?.username}
        </p>

        <div className="flex items-center justify-center md:justify-start space-x-4 text-gray-400 text-sm mt-3">

          <span>
            {user?.subscribersCount || 0} Subscribers
          </span>

          <span className="hidden sm:inline">
            •
          </span>

          <span>
            {user?.channelSubscribedToCount || 0} Subscribed
          </span>

        </div>

        {/* Messages */}
        {error && (
          <p className="text-red-400 text-sm mt-3">
            {error}
          </p>
        )}

        {success && (
          <p className="text-green-400 text-sm mt-3">
            {success}
          </p>
        )}

      </div>

      {/* Edit / Upload */}
      <div className="flex flex-col items-center gap-2">

        <button
          type="button"
          onClick={handleEditClick}
          disabled={loading}
          className="flex-shrink-0 bg-gray-700 hover:bg-gray-600 disabled:opacity-50 text-purple-400 font-semibold py-2 px-5 rounded-full transition duration-200 flex items-center space-x-2"
        >
          <Edit2 className="w-4 h-4" />

          <span>
            {file ? "Change Image" : "Edit Profile"}
          </span>
        </button>

        {/* Upload button only when image selected */}
        {file && (
          <button
            type="button"
            onClick={handleUpload}
            disabled={loading}
            className="bg-purple-600 hover:bg-purple-700 disabled:opacity-50 text-white font-semibold py-2 px-5 rounded-full transition duration-200"
          >
            {loading ? "Uploading..." : "Upload Avatar"}
          </button>
        )}

      </div>
    </div>
  );
}

export default ProfileHeaderCard;