import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import IssueCard from "../components/IssueCard";

const categories = [
  "All Categories",
  "Road & Infrastructure",
  "Sanitation",
  "Water Supply",
  "Electricity",
  "Public Safety"
];

const dummyIssues = [
  {
    id: "1",
    title: "Large pothole on Main Street causing traffic",
    description:
      "There's a significant pothole approximately 2 feet wide near the intersection of Main Street and Oak Avenue, causing traffic delays and vehicle damage.",
    category: "Road & Infrastructure",
    status: "in_progress",
    imageUrl:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
    location: "Main St & Oak Ave",
    createdAt: "2 days ago"
  },
  {
    id: "2",
    title: "Overflowing garbage bins in Central Park",
    description:
      "The garbage bins near the children's playground have been overflowing for 3 days, attracting pests and creating unsanitary conditions.",
    category: "Sanitation",
    status: "reported",
    imageUrl:
      "https://images.unsplash.com/photo-1581574203491-1c76ed7f66b5",
    location: "Central Park",
    createdAt: "1 day ago"
  },
  {
    id: "3",
    title: "Broken streetlight on Cedar Lane",
    description:
      "The streetlight at 45 Cedar Lane has been non-functional for a week. The area is completely dark at night and unsafe for pedestrians.",
    category: "Electricity",
    status: "resolved",
    imageUrl:
      "https://images.unsplash.com/photo-1504198453319-5ce911bafcde",
    location: "45 Cedar Lane",
    createdAt: "5 days ago"
  },
  {
    id: "4",
    title: "Water main leak flooding sidewalk",
    description:
      "There's a significant water leak from the main pipe causing flooding on the sidewalk near Elm Street bus stop.",
    category: "Water Supply",
    status: "in_progress",
    imageUrl:
      "https://images.unsplash.com/photo-1601972599720-b5b6a02a94c1",
    location: "Elm Street Bus Stop",
    createdAt: "3 days ago"
  },
  {
    id: "5",
    title: "Unsafe playground equipment at Community Park",
    description:
      "The swing set at Community Park has broken chains and exposed bolts. Children could get seriously injured.",
    category: "Public Safety",
    status: "reported",
    imageUrl:
      "https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf",
    location: "Community Park",
    createdAt: "12 hours ago"
  },
  {
    id: "6",
    title: "Illegal dumping near riverside trail",
    description:
      "Someone has dumped construction waste and old appliances near the entrance of the riverside walking trail.",
    category: "Sanitation",
    status: "reported",
    imageUrl:
      "https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62",
    location: "Riverside Trail",
    createdAt: "4 hours ago"
  }
];


const statuses = ["All Statuses", "reported", "in_progress", "resolved"];

const BrowseIssues = () => {
  const [issues, setIssues] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Categories");
  const [status, setStatus] = useState("All Statuses");

  // 🔁 Backend-ready data loader
  useEffect(() => {
    // TODAY: dummy data
    setIssues(dummyIssues);

    // TOMORROW:
    // const fetchIssues = async () => {
    //   const data = await getIssuesFromFirestore();
    //   setIssues(data);
    // };
    // fetchIssues();
  }, []);

  const filteredIssues = issues.filter((issue) => {
    const matchesSearch =
      issue.title.toLowerCase().includes(search.toLowerCase()) ||
      issue.description.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      category === "All Categories" || issue.category === category;

    const matchesStatus =
      status === "All Statuses" || issue.status === status;

    return matchesSearch && matchesCategory && matchesStatus;
  });

  return (
    <div className="mx-auto max-w-7xl px-6 py-10">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Browse Issues</h1>
        <p className="mt-2 text-gray-600">
          Explore civic issues reported by community members.
        </p>
      </div>

      {/* Search */}
      <div className="relative mb-6 max-w-md">
        <Search className="absolute left-3 top-3 text-gray-400" size={18} />
        <input
          type="text"
          placeholder="Search issues..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-lg border px-10 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
      </div>

      {/* Filters */}
      <div className="mb-6 flex flex-wrap gap-3">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium border
              ${
                category === cat
                  ? "bg-teal-500 text-white border-teal-500"
                  : "text-teal-600 border-teal-500 hover:bg-teal-50"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mb-8 flex gap-3">
        {statuses.map((s) => (
          <button
            key={s}
            onClick={() => setStatus(s)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium border capitalize
              ${
                status === s
                  ? "bg-teal-500 text-white border-teal-500"
                  : "text-gray-600 border-gray-300 hover:bg-gray-100"
              }`}
          >
            {s.replace("_", " ")}
          </button>
        ))}
      </div>

      {/* Results */}
      <p className="mb-4 text-sm text-gray-500">
        Showing {filteredIssues.length} issues
      </p>

      {/* Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredIssues.map((issue) => (
          <IssueCard key={issue.id} issue={issue} />
        ))}
      </div>
    </div>
  );
};

export default BrowseIssues;
