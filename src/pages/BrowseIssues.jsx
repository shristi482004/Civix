import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import IssueCard from "../components/IssueCard";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../firebase";
import IssueModal from "../components/IssueModal";


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
      "https://images.unsplash.com/photo-1587763483696-6d41d2de6084?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      "https://images.unsplash.com/photo-1598706496038-58784d1287cd?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      "https://images.unsplash.com/photo-1742119193536-7d228ef7f466?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      "https://images.unsplash.com/photo-1635351235168-568f7afff426?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      "https://plus.unsplash.com/premium_photo-1751835491345-f33aed5db0a8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      "https://images.unsplash.com/photo-1662611527890-fcb76be46544?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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


  const [selectedIssue, setSelectedIssue] = useState(null);

  //  Backend-ready data loader
  useEffect(() => {
  const fetchIssues = async () => {
    try {
      const q = query(
        collection(db, "issues"),
        orderBy("createdAt", "desc")
      );

      const querySnapshot = await getDocs(q);

      const firestoreIssues = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      // 🔥 MERGE: Firestore issues first, then dummy
      setIssues([...firestoreIssues, ...dummyIssues]);

    } catch (error) {
      console.error("Error fetching issues:", error);
      // fallback: show dummy issues only
      setIssues(dummyIssues);
    }
  };

  fetchIssues();
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
  <div className="mx-auto max-w-7xl px-6 py-20">
    {/* Header */}
    <div className="mb-14 max-w-2xl">
      <span className="block text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 mb-4">
        Real-time reports
      </span>

      <h1 className="text-5xl font-serif font-bold text-gray-900 leading-tight">
        Browse civic issues
      </h1>

      <p className="mt-4 text-lg text-gray-600 font-light">
        Explore civic issues reported by community members.
      </p>
    </div>

    {/* Search */}
    <div className="relative mb-10 max-w-md">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
      <input
        type="text"
        placeholder="Search issues..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full rounded-full border border-gray-300 px-12 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
      />
    </div>

    {/* Category filters */}
    <div className="mb-8 flex flex-wrap gap-3">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setCategory(cat)}
          className={`rounded-full px-5 py-2 text-sm font-semibold border transition
            ${
              category === cat
                ? "bg-teal-600 text-white border-teal-600"
                : "text-teal-700 border-teal-300 hover:bg-teal-50"
            }`}
        >
          {cat}
        </button>
      ))}
    </div>

    {/* Status filters */}
    <div className="mb-14 flex flex-wrap gap-3">
      {statuses.map((s) => (
        <button
          key={s}
          onClick={() => setStatus(s)}
          className={`rounded-full px-5 py-2 text-sm font-semibold border capitalize transition
            ${
              status === s
                ? "bg-gray-900 text-white border-gray-900"
                : "text-gray-600 border-gray-300 hover:bg-gray-100"
            }`}
        >
          {s.replace("_", " ")}
        </button>
      ))}
    </div>

    {/* Results count */}
    <p className="mb-10 text-sm font-medium text-gray-400 uppercase tracking-widest">
      Showing {filteredIssues.length} issues
    </p>

    {/* Grid */}
    <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
      {filteredIssues.map((issue) => (
        <IssueCard
          key={issue.id}
          issue={issue}
          onView={setSelectedIssue}
        />
      ))}
    </div>

    {/* Modal */}
    <IssueModal
      issue={selectedIssue}
      onClose={() => setSelectedIssue(null)}
    />
  </div>
);

};

export default BrowseIssues;
