import { useState } from "react";
import { Upload, Send, MapPin } from "lucide-react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import { useAuth } from "../context/Authcontext";
import toast from "react-hot-toast";




const ReportIssues = () => {

  const [uploading, setUploading] = useState(false);

  const { user } = useAuth();
const [category, setCategory] = useState("");

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");

  const handleImage = (file) => {
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async () => {
    console.log("Submit clicked");
    console.log("DB VALUE:", db);

    if (!title || !description || !location || !category) {
toast.error("Please fill all required fields");

  setCategory("");

  return;
}


    try {
      console.log("About to write to Firestore");

      let imageUrl = null;

if (image) {
  try {
    setUploading(true);

    const { ref, uploadBytes, getDownloadURL } = await import(
      "firebase/storage"
    );
    const { storage } = await import("../firebase");

    const imageRef = ref(
      storage,
      `issues/${user.uid}/${Date.now()}-${image.name}`
    );

    await uploadBytes(imageRef, image);
    imageUrl = await getDownloadURL(imageRef);
  } catch (err) {
    toast.error("Image upload failed");
    setUploading(false);
    return;
  }
}


      const docRef = await addDoc(collection(db, "issues"), {
        title,
        description,
        category,
        location,
        status: "reported",
        imageUrl: imageUrl,
        createdAt: serverTimestamp(),
        userId: user.uid,
        userEmail: user.email,
      });

      console.log("Document written with ID:", docRef.id);
     toast.success("Issue reported successfully!");
setUploading(false);


      // reset form
      setTitle("");
      setDescription("");
      setLocation("");
      setImage(null);
      setPreview("");
    } catch (error) {
      setUploading(false);

      console.error("FIRESTORE ERROR:", error);
     toast.error(error.message);

    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-semibold text-gray-900">
        Report an Issue
      </h1>

      <div className="mt-8 bg-white border rounded-2xl shadow-sm p-6 space-y-6">
        <input
          type="text"
          placeholder="Brief description of the issue"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full rounded-lg border px-4 py-2"
        />

        <textarea
          rows="4"
          placeholder="Provide more details about the issue..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full rounded-lg border px-4 py-2"
        />

        {/* Category */}
<div>
  <label className="text-sm font-medium text-gray-700">
    Category *
  </label>

  <select
    value={category}
    onChange={(e) => setCategory(e.target.value)}
    className="mt-1 w-full rounded-lg border px-4 py-2 bg-white focus:ring-2 focus:ring-teal-500 outline-none"
  >
    <option value="">Select category</option>
    <option value="Road & Infrastructure">Road & Infrastructure</option>
    <option value="Sanitation">Sanitation</option>
    <option value="Water Supply">Water Supply</option>
    <option value="Electricity">Electricity</option>
    <option value="Public Safety">Public Safety</option>
  </select>
</div>


        <input
          type="text"
          placeholder="Enter location or landmark"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full rounded-lg border px-4 py-2"
        />

        {/* Image Upload */} <div> <label className="text-sm font-medium text-gray-700"> Upload Image </label> <div onDragOver={(e) => e.preventDefault()} onDrop={(e) => { e.preventDefault(); handleImage(e.dataTransfer.files[0]); }} className="mt-2 flex flex-col items-center justify-center gap-2 border-2 border-dashed rounded-xl p-6 text-center cursor-pointer hover:border-teal-500 transition" > <Upload className="text-teal-600" /> <p className="text-sm text-gray-600"> Drag & drop an image or{" "} <span className="text-teal-600 font-medium">browse</span> </p> <input type="file" accept="image/*" className="hidden" onChange={(e) => handleImage(e.target.files[0])} /> </div> {/* Preview */} {preview && ( <img src={preview} alt="Preview" className="mt-4 h-48 w-full object-cover rounded-xl border" /> )} </div>

        <button
  onClick={handleSubmit}
  disabled={uploading}
  className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-medium transition
    ${
      uploading
        ? "bg-gray-400 cursor-not-allowed"
        : "bg-teal-600 hover:bg-teal-700 text-white"
    }`}
>
  {uploading ? "Uploading..." : "Submit Issue"}
  <Send size={18} />
</button>

      </div>
    </div>
  );
};

export default ReportIssues;
