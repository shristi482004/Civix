import { useParams, useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useEffect, useState } from "react";
import { X } from "lucide-react";

const IssueDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [issue, setIssue] = useState(null);

  useEffect(() => {
    const fetchIssue = async () => {
      const snap = await getDoc(doc(db, "issues", id));
      if (snap.exists()) {
        setIssue({ id: snap.id, ...snap.data() });
      }
    };
    fetchIssue();
  }, [id]);

  if (!issue) return null;

  return (
    <div className="min-h-screen bg-[#FDFCFB]">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white border-b px-4 py-3 flex items-center justify-between">
        <h3 className="text-lg font-serif font-bold">Issue Details</h3>
        <button onClick={() => navigate(-1)}>
          <X />
        </button>
      </div>

      {/* Image */}
      {issue.imageUrl && (
        <img
          src={issue.imageUrl}
          alt={issue.title}
          className="w-full h-56 object-cover"
        />
      )}

      {/* Content */}
      <div className="p-6 space-y-6">
        <div className="flex flex-wrap items-center gap-3 text-sm">
          <span className="px-3 py-1 rounded-full bg-teal-50 text-teal-700 font-semibold">
            {issue.category}
          </span>
          <span className="text-gray-400">
            Reported on{" "}
            {issue.createdAt?.toDate
              ? issue.createdAt.toDate().toLocaleDateString()
              : issue.createdAt}
          </span>
        </div>

        <h1 className="text-3xl font-serif font-bold">
          {issue.title}
        </h1>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
            Resident Description
          </h4>
          <p className="text-gray-700 leading-relaxed">
            {issue.description}
          </p>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
            Current Status
          </h4>
          <div className="flex items-center gap-3 p-4 rounded-xl bg-gray-50">
            <span
              className={`h-3 w-3 rounded-full ${
                issue.status === "resolved"
                  ? "bg-emerald-500"
                  : issue.status === "in_progress"
                  ? "bg-teal-500"
                  : "bg-orange-500"
              }`}
            />
            <span className="font-semibold capitalize">
              {issue.status.replace("_", " ")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IssueDetails;
