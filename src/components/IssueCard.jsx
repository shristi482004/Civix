import { MapPin, Clock } from "lucide-react";

const statusStyles = {
  reported: "bg-orange-100 text-orange-700 border-orange-200",
  in_progress: "bg-teal-100 text-teal-700 border-teal-200",
  resolved: "bg-emerald-100 text-emerald-700 border-emerald-200",
};


const IssueCard = ({ issue, onView }) => {
  
  return (
    
    <div
      className="group bg-white border border-gray-200 rounded-[28px] overflow-hidden transition-all duration-300 hover:shadow-xl cursor-pointer"
      onClick={() => onView(issue)}
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={issue.imageUrl}
          alt={issue.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Status pill */}
        <span
          className={`absolute top-4 left-4 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest border rounded-full ${statusStyles[issue.status]}`}
        >
          {issue.status.replace("_", " ")}
        </span>
      </div>

      {/* Content */}
      <div className="p-8 flex flex-col h-full">
        {/* Category */}
        <span className="text-[11px] font-bold uppercase tracking-widest text-teal-600 mb-3">
          {issue.category}
        </span>

        {/* Title */}
        <h3 className="text-xl font-serif font-bold text-gray-900 leading-snug mb-3 group-hover:text-teal-800 transition-colors">
          {issue.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 leading-relaxed line-clamp-2 mb-6">
          {issue.description}
        </p>

       {/* Footer — LOCATION + DATE ONLY */}
        <div className="pt-6 border-t border-gray-100 flex items-center justify-between text-[11px] font-bold uppercase tracking-widest text-gray-400">
          <div className="flex items-center gap-2 truncate">
            <span className="w-2 h-2 rounded-full bg-teal-300"></span>
            <span className="truncate max-w-[140px]">
              {issue.location}
            </span>
          </div>

          <span>
            {issue.createdAt?.toDate
              ? issue.createdAt.toDate().toLocaleDateString()
              : issue.createdAt}
          </span>
        </div>

       

      
      </div>
    </div>
  );
};

export default IssueCard;
