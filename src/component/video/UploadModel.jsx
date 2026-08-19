import React, { useState } from "react";
import { X, Upload, Film, File } from "lucide-react";
import { api } from "../../index.js";
import { useNavigate } from "react-router-dom";

function UploadModel({ onClose }) {
  const navigate = useNavigate();

  const [videoFile, setVideoFile] = useState(null);
  const [thumbnailFile, setThumbnailFile] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage,setSuccessMessage] = useState("");


  const handleFileChange = (e, setFile, type) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;

    if (!selectedFile.type.startsWith(type)) {
      alert(`Please upload a correct ${type} file`);
      return;
    }

    setFile(selectedFile);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!videoFile || !thumbnailFile || !title || !description) return;

    try {
      setIsLoading(true);

      const formData = new FormData();
      formData.append("videoFile", videoFile);
      formData.append("thumbnail", thumbnailFile);
      formData.append("title", title);
      formData.append("description", description);

      const res = await api.post("/video", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      

      //alert("✅ Video Uploaded Successfully!");
      setSuccessMessage("✅ Video Uploaded Successfully!")

      navigate("/home");
      onClose();
    } catch (error) {
      console.error(error);
      alert("❌ Upload Failed! Try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4">
      <div className="bg-gray-900 rounded-xl shadow-2xl w-full max-w-lg transform transition-all border border-gray-700 max-h-[90vh] flex flex-col">

        {/* Header */}
        <div className="p-5 border-b border-gray-800 flex justify-between items-center">
          <h2 className="text-xl font-bold text-white">Upload New Video</h2>
          <button onClick={onClose} className="p-1 rounded-full text-gray-400 hover:bg-gray-700">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          <form className="p-6 space-y-5">

            {/* Video */}
            <div>
              <label className="text-sm text-gray-300 mb-2 block">Video File</label>
              <label
                htmlFor="video-upload"
                className="border-2 border-dashed border-gray-600 rounded-lg p-4 text-center hover:border-purple-500 cursor-pointer"
              >
                <input
                  id="video-upload"
                  type="file"
                  accept="video/*"
                  onChange={(e) => handleFileChange(e, setVideoFile, "video/")}
                  className="hidden"
                  disabled={isLoading}
                />

                {videoFile ? (
                  <div className="text-green-400 text-sm">
                    <Film className="w-8 h-8 mx-auto mb-2" />
                    {videoFile.name}
                  </div>
                ) : (
                  <>
                    <Upload className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                    <p className="text-gray-400">Click to upload video</p>
                  </>
                )}
              </label>
            </div>

            {/* Thumbnail */}
            <div>
              <label className="text-sm text-gray-300 mb-2 block">Thumbnail File</label>
              <label
                htmlFor="thumbnail-upload"
                className="border-2 border-dashed border-gray-600 rounded-lg p-4 text-center hover:border-purple-500 cursor-pointer"
              >
                <input
                  id="thumbnail-upload"
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileChange(e, setThumbnailFile, "image/")}
                  className="hidden"
                  disabled={isLoading}
                />

                {thumbnailFile ? (
                  <div className="text-green-400">
                    <File className="w-8 h-8 mx-auto mb-2" />
                    {thumbnailFile.name}
                  </div>
                ) : (
                  <>
                    <Film className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                    <p className="text-gray-400">Click to upload thumbnail</p>
                  </>
                )}
              </label>
            </div>

            {/* Title */}
            <input
              type="text"
              placeholder="Video Title"
              className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-200"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              disabled={isLoading}
            />

            {/* Description */}
            <textarea
              placeholder="Video Description..."
              rows="4"
              className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 resize-none"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              disabled={isLoading}
            ></textarea>

          </form>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 p-5 border-t border-gray-800">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-gray-700 text-white rounded-full"
            disabled={isLoading}
          >
            Cancel
          </button>

          <button
            onClick={handleUpload}
            disabled={isLoading || !videoFile || !thumbnailFile || !title || !description}
            className="px-5 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700"
          >
            {isLoading ? "Uploading..." : "Publish Video"}
          </button>
        </div>
        {successMessage && (
          <div className="mb-5 rounded-lg bg-green-500 px-4 py-3 text-center text-white font-semibold">
            {successMessage}
          </div>
        )}
      </div>
    </div>
  );
}

export default UploadModel;
