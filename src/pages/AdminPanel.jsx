import { useEffect, useState } from "react";
import { collection, getDocs, updateDoc, doc } from "firebase/firestore";
import { db } from "../firebase";
import { useAuth } from "../context/Authcontext";
import toast from "react-hot-toast";

const AdminPanel = () => {
  const { isAdmin } = useAuth();
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    if (!isAdmin) return;

    const fetchIssues = async () => {
      const snapshot = await getDocs(collection(db, "issues"));
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setIssues(data);
    };

    fetchIssues();
  }, [isAdmin]);

  const updateStatus = async (issueId, newStatus) => {
    try {
      await updateDoc(doc(db, "issues", issueId), {
        status: newStatus,
      });
      toast.success("Status updated");

      setIssues((prev) =>
        prev.map((issue) =>
          issue.id === issueId
            ? { ...issue, status: newStatus }
            : issue
        )
      );
    } catch (err) {
      toast.error("Failed to update status");
    }
  };

  if (!isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FDFCFB]">
        <p className="rounded-2xl border border-red-200 bg-white px-8 py-6 text-red-600 font-semibold shadow-sm">
          Access denied. Admins only.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FDFCFB] px-6 py-16">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-14">
          <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-teal-600/70 mb-4">
            Administrative Control
          </p>

          <h1 className="text-4xl font-serif font-bold text-gray-900">
            Issue moderation panel
          </h1>

          <p className="mt-3 text-gray-600 max-w-2xl">
            Review reported civic issues and update their status as progress is made.
            Every change is reflected publicly.
          </p>
        </div>

        {/* Issues list */}
        <div className="space-y-4">
          {issues.map((issue) => (
            <div
              key={issue.id}
              className="group flex flex-col md:flex-row md:items-center justify-between gap-4 rounded-[24px] border border-gray-200 bg-white px-6 py-5 transition hover:shadow-md"
            >
              {/* Left */}
              <div className="space-y-1">
                <h3 className="text-lg font-serif font-semibold text-gray-900">
                  {issue.title}
                </h3>

                <p className="text-sm text-gray-500">
                  {issue.category} · {issue.location}
                </p>
              </div>

              {/* Right */}
              <div className="flex items-center gap-4">
                <span className="text-[11px] font-bold uppercase tracking-widest text-gray-400">
                  Status
                </span>

                <select
                  value={issue.status}
                  onChange={(e) =>
                    updateStatus(issue.id, e.target.value)
                  }
                  className="rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium capitalize outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-200"
                >
                  <option value="reported">Reported</option>
                  <option value="in_progress">In Progress</option>
                  <option value="resolved">Resolved</option>
                </select>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {issues.length === 0 && (
          <div className="mt-20 text-center text-gray-500">
            No issues found.
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;
