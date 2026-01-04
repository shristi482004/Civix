import { MapPin, Clock } from "lucide-react";

const statusStyles = {
  reported: "bg-orange-100 text-orange-700",
  in_progress: "bg-blue-100 text-blue-700",
  resolved: "bg-green-100 text-green-700"
};

const IssueCard = ({ issue }) => {
  return (
    <div className="rounded-xl border bg-white shadow-sm hover:shadow-md transition">
      <img
        src={issue.imageUrl}
        alt={issue.title}
        className="h-48 w-full rounded-t-xl object-cover"
      />

      <div className="p-4 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium text-teal-600">
            {issue.category}
          </span>

          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold capitalize ${statusStyles[issue.status]}`}
          >
            {issue.status.replace("_", " ")}
          </span>
        </div>

        <h3 className="font-semibold text-gray-900 line-clamp-2">
          {issue.title}
        </h3>

        <p className="text-sm text-gray-600 line-clamp-2">
          {issue.description}
        </p>

        <div className="flex items-center justify-between text-xs text-gray-500">
          <div className="flex items-center gap-1">
            <MapPin size={14} />
            {issue.location}
          </div>

          <div className="flex items-center gap-1">
            <Clock size={14} />
            {issue.createdAt}
          </div>
        </div>

        <button className="text-sm font-medium text-teal-600 hover:underline">
          View Details →
        </button>
      </div>
    </div>
  );
};

export default IssueCard;
