import { X, MapPin, Clock } from "lucide-react";

const statusStyles = {
  reported: "bg-orange-100 text-orange-700",
  in_progress: "bg-blue-100 text-blue-700",
  resolved: "bg-green-100 text-green-700",
};

const IssueModal = ({ issue, onClose }) => {
  if (!issue) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-xl">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-2 hover:bg-gray-900"
        >
          <X size={20} />
        </button>

        {/* Image */}
        {issue.imageUrl && (
          <img
            src={issue.imageUrl}
            alt={issue.title}
            className="h-64 w-full rounded-t-2xl object-cover"
          />
        )}

        {/* Content */}
        <div className="space-y-5 p-6">
          {/* Category + Status */}
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-teal-600">
              {issue.category}
            </span>

            <span
              className={`rounded-full px-3 py-1 text-xs font-semibold capitalize ${statusStyles[issue.status]}`}
            >
              {issue.status.replace("_", " ")}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-2xl font-semibold text-gray-900">
            {issue.title}
          </h2>

          {/* Description */}
          <p className="text-gray-700">
            {issue.description}
          </p>

          {/* Meta info */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <MapPin size={16} />
              {issue.location}
            </div>

            <div className="flex items-center gap-1">
              <Clock size={16} />
              {issue.createdAt?.toDate().toLocaleString()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IssueModal;
