import { useState } from "react";
import { Upload, Send, MapPin } from "lucide-react";

const ReportIssues = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");

  const handleImage = (file) => {
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      {/* Header */}
      <h1 className="text-3xl font-semibold text-gray-900">
        Report an Issue
      </h1>
      <p className="text-gray-500 mt-1">
        Help improve your community by reporting civic issues.
      </p>

      {/* Card */}
      <div className="mt-8 bg-white border rounded-2xl shadow-sm p-6 space-y-6">
        {/* Issue Title */}
        <div>
          <label className="text-sm font-medium text-gray-700">
            Issue Title *
          </label>
          <input
            type="text"
            placeholder="Brief description of the issue"
            className="mt-1 w-full rounded-lg border px-4 py-2 focus:ring-2 focus:ring-teal-500 outline-none"
          />
        </div>

        {/* Detailed Description */}
        <div>
          <label className="text-sm font-medium text-gray-700">
            Detailed Description *
          </label>
          <textarea
            rows="4"
            placeholder="Provide more details about the issue..."
            className="mt-1 w-full rounded-lg border px-4 py-2 focus:ring-2 focus:ring-teal-500 outline-none resize-none"
          />
        </div>

        {/* Location */}
        <div>
          <label className="text-sm font-medium text-gray-700">
            Location *
          </label>
          <div className="relative mt-1">
            <MapPin className="absolute left-3 top-2.5 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Enter location or landmark"
              className="w-full rounded-lg border pl-10 pr-4 py-2 focus:ring-2 focus:ring-teal-500 outline-none"
            />
          </div>
        </div>

        {/* Image Upload */}
        <div>
          <label className="text-sm font-medium text-gray-700">
            Upload Image
          </label>

          <div
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => {
              e.preventDefault();
              handleImage(e.dataTransfer.files[0]);
            }}
            className="mt-2 flex flex-col items-center justify-center gap-2 border-2 border-dashed rounded-xl p-6 text-center cursor-pointer hover:border-teal-500 transition"
          >
            <Upload className="text-teal-600" />
            <p className="text-sm text-gray-600">
              Drag & drop an image or{" "}
              <span className="text-teal-600 font-medium">browse</span>
            </p>

            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => handleImage(e.target.files[0])}
            />
          </div>

          {/* Preview */}
          {preview && (
            <img
              src={preview}
              alt="Preview"
              className="mt-4 h-48 w-full object-cover rounded-xl border"
            />
          )}
        </div>

        {/* Submit */}
        <button
          className="w-full flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-xl font-medium transition"
        >
          Submit Issue
          <Send size={18} />
        </button>
      </div>
    </div>
  );
};

export default ReportIssues;
