import { X } from "lucide-react";

const statusStyles = {
  reported: "bg-orange-100 text-orange-700",
  in_progress: "bg-teal-100 text-teal-700",
  resolved: "bg-emerald-100 text-emerald-700",
};

const IssueModal = ({ issue, onClose }) => {
  if (!issue) return null;

  return (
   <div className="fixed inset-0 z-50 flex items-start md:items-center justify-center bg-black/40 backdrop-blur-sm px-4 py-4 overflow-y-auto">

      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200 max-h-[90vh] flex flex-col relative">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-teal-500" />
            <h3 className="text-lg font-serif font-bold text-gray-900">
              Issue Details
            </h3>
          </div>

          <button
            onClick={onClose}
            className="rounded-full p-2 hover:bg-gray-100 transition"
          >
            <X size={20} className="text-gray-500" />
          </button>
        </div>

        {/* Image */}
        {issue.imageUrl && (
          <img
            src={issue.imageUrl}
            alt={issue.title}
            className="w-full h-40 md:h-64 object-cover"
          />
        )}

        {/* Content */}
        <div className="p-6 md:p-8 space-y-6 overflow-y-auto overscroll-contain">

          
          {/* Category + Date */}
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <span className="px-3 py-1 rounded-full border border-teal-200 bg-teal-50 text-teal-700 font-semibold">
              {issue.category}
            </span>

            <span className="text-gray-400 text-sm">
              Reported on{" "}
              {issue.createdAt?.toDate
                ? issue.createdAt.toDate().toLocaleDateString()
                : issue.createdAt}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 leading-tight">
            {issue.title}
          </h2>

          {/* Description + Status */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Description */}
            <div className="md:col-span-2">
              <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">
                Resident Description
              </h4>
              <p className="text-gray-700 leading-relaxed">
                {issue.description}
              </p>
            </div>

            {/* Status */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">
                Current Status
              </h4>
              <div className="flex items-center gap-3 p-4 rounded-xl border border-gray-100 bg-gray-50">
                <span
                  className={`h-3 w-3 rounded-full ${
                    issue.status === "resolved"
                      ? "bg-emerald-500"
                      : issue.status === "in_progress"
                      ? "bg-teal-500"
                      : "bg-orange-500"
                  }`}
                />
                <span className="font-semibold text-gray-800 capitalize">
                  {issue.status.replace("_", " ")}
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default IssueModal;
