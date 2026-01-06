import { useState } from "react";
import { Send, MapPin } from "lucide-react";

import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import { useAuth } from "../context/Authcontext";
import toast from "react-hot-toast";




const ReportIssues = () => {


  const { user } = useAuth();
const [category, setCategory] = useState("");

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [imageUrl, setImageUrl] = useState("");

 
 

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



      // reset form
      setTitle("");
      setDescription("");
      setLocation("");
     setImageUrl("");

    
    } catch (error) {
      

      console.error("FIRESTORE ERROR:", error);
     toast.error(error.message);

    }
  };

return (
  <div className="mx-auto max-w-3xl px-6 py-20">
    {/* Header */}
    <div className="mb-12 max-w-xl">
      <span className="block text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 mb-4">
        Community reporting
      </span>

      <h1 className="text-5xl font-serif font-bold text-gray-900 leading-tight">
        Report an issue
      </h1>

      <p className="mt-4 text-lg text-gray-600 font-light">
        Share civic issues with your community to help drive action and accountability.
      </p>
    </div>

    {/* Form container */}
    <div className="bg-white border border-gray-200 rounded-[32px] shadow-xl shadow-gray-200/40 p-10 space-y-8">
      {/* Title */}
      <div>
        <label className="block text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-2">
          Issue title
        </label>
        <input
          type="text"
          placeholder="Brief description of the issue"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full rounded-xl border border-gray-300 px-5 py-3 text-sm focus:ring-2 focus:ring-teal-500 outline-none"
        />
      </div>

      {/* Description */}
      <div>
        <label className="block text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-2">
          Description
        </label>
        <textarea
          rows="4"
          placeholder="Provide more details about the issue..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full rounded-xl border border-gray-300 px-5 py-3 text-sm leading-relaxed focus:ring-2 focus:ring-teal-500 outline-none resize-none"
        />
      </div>

      {/* Category */}
      <div>
        <label className="block text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-2">
          Category *
        </label>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full rounded-xl border border-gray-300 px-5 py-3 bg-white text-sm focus:ring-2 focus:ring-teal-500 outline-none"
        >
          <option value="">Select category</option>
          <option value="Road & Infrastructure">Road & Infrastructure</option>
          <option value="Sanitation">Sanitation</option>
          <option value="Water Supply">Water Supply</option>
          <option value="Electricity">Electricity</option>
          <option value="Public Safety">Public Safety</option>
        </select>
      </div>

      {/* Location */}
      <div>
        <label className="block text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-2">
          Location
        </label>
        <div className="relative">
          <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
          <input
            type="text"
            placeholder="Enter location or landmark"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full rounded-xl border border-gray-300 pl-11 pr-5 py-3 text-sm focus:ring-2 focus:ring-teal-500 outline-none"
          />
        </div>
      </div>

      {/* Image URL */}
      <div>
        <label className="block text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-2">
          Image URL (optional)
        </label>
        <input
          type="url"
          placeholder="https://example.com/image.jpg"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          className="w-full rounded-xl border border-gray-300 px-5 py-3 text-sm focus:ring-2 focus:ring-teal-500 outline-none"
        />
      </div>

      {/* Submit */}
      <button
        onClick={handleSubmit}
        className="w-full flex items-center justify-center gap-3 bg-teal-900 hover:bg-teal-800 text-white py-4 rounded-full font-bold text-sm uppercase tracking-widest transition shadow-lg"
      >
        Submit issue
        <Send size={18} />
      </button>
    </div>
  </div>
);

};

export default ReportIssues;
