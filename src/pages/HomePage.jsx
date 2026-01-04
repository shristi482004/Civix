import React from "react";
import { NavLink } from "react-router-dom";
import {
  MapPin,
  Users,
  CheckCircle,
  Clock,
  FileText,
  Camera,
  Check
} from "lucide-react";

const HomePage = () => {
  const categories = [
    { name: "Road & Infrastructure", icon: "🛣️" },
    { name: "Sanitation", icon: "🗑️" },
    { name: "Water Supply", icon: "💧" },
    { name: "Electricity", icon: "⚡" },
    { name: "Public Safety", icon: "🛡️" }
  ];

  const dummyIssues = [
    {
      id: "1",
      title: "Large pothole on Main Street",
      category: "Road & Infrastructure",
      status: "in_progress",
      imageUrl:
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
      createdAt: "2 hours ago"
    },
    {
      id: "2",
      title: "Overflowing garbage bins in park",
      category: "Sanitation",
      status: "reported",
      imageUrl:
        "https://images.unsplash.com/photo-1581574203491-1c76ed7f66b5",
      createdAt: "1 day ago"
    },
    {
      id: "3",
      title: "Broken streetlight on Cedar Avenue",
      category: "Electricity",
      status: "resolved",
      imageUrl:
        "https://images.unsplash.com/photo-1494526585095-c41746248156",
      createdAt: "3 days ago"
    }
  ];

  const statusColors = {
    reported: "bg-orange-100 text-orange-600",
    in_progress: "bg-blue-100 text-blue-600",
    resolved: "bg-green-100 text-green-600"
  };

  return (
    <div className="w-full">

      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-teal-600 to-emerald-500 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center">
          <div className="mx-auto mb-6 w-fit rounded-full bg-white/20 px-4 py-2 text-sm">
            Join 1,200+ active citizens making a difference
          </div>

          <h1 className="text-4xl font-bold md:text-5xl">
            Report Local Issues.
            <br />
            <span className="text-teal-100">
              Build Better Communities.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-teal-100">
            Civix empowers you to report civic issues in your neighborhood,
            track their progress, and collaborate with your community for
            faster resolutions.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <NavLink
              to="/report"
              className="rounded-full bg-white px-6 py-3 font-semibold text-teal-600 hover:bg-teal-50"
            >
              Report an Issue →
            </NavLink>

            <NavLink
              to="/browse"
              className="rounded-full border border-white/40 px-6 py-3 font-semibold hover:bg-white/10"
            >
              Browse Issues
            </NavLink>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-4 text-sm">
            <span className="rounded-full bg-white/20 px-4 py-2">
              📍 Location-based reporting
            </span>
            <span className="rounded-full bg-white/20 px-4 py-2">
              👥 Community collaboration
            </span>
            <span className="rounded-full bg-white/20 px-4 py-2">
              👁️ Transparent tracking
            </span>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 md:grid-cols-4">
          <StatCard icon={<MapPin />} label="Issues Reported" value="2,847" />
          <StatCard icon={<Users />} label="Active Citizens" value="1,234" />
          <StatCard icon={<CheckCircle />} label="Issues Resolved" value="1,892" />
          <StatCard icon={<Clock />} label="Avg. Resolution Time" value="4.2 days" />
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold">How Civix Works</h2>
        <p className="mt-3 text-gray-600">
          Reporting a civic issue takes just a few minutes.
        </p>

        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-10 px-6 md:grid-cols-4">
          <HowCard icon={<FileText />} title="Describe the Issue" />
          <HowCard icon={<Camera />} title="Add a Photo" />
          <HowCard icon={<Clock />} title="Track Progress" />
          <HowCard icon={<Check />} title="Issue Resolved" />
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="bg-gray-50 py-16">
        <h2 className="text-center text-3xl font-bold">Issue Categories</h2>

        <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-6 px-6 md:grid-cols-5">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="rounded-xl border bg-white p-6 text-center hover:shadow-md"
            >
              <div className="mb-3 text-3xl">{cat.icon}</div>
              <p className="font-semibold">{cat.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* RECENT ISSUES */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-3xl font-bold">Recent Issues</h2>
            <NavLink
              to="/browse"
              className="rounded-full border border-teal-500 px-4 py-2 font-semibold text-teal-600 hover:bg-teal-50"
            >
              View All Issues →
            </NavLink>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {dummyIssues.map((issue) => (
              <div
                key={issue.id}
                className="overflow-hidden rounded-xl border bg-white"
              >
                <img
                  src={issue.imageUrl}
                  alt={issue.title}
                  className="h-48 w-full object-cover"
                />

                <div className="p-4">
                  <span className="text-sm text-teal-600">
                    {issue.category}
                  </span>

                  <h3 className="mt-2 font-semibold">
                    {issue.title}
                  </h3>

                  <div className="mt-4 flex items-center justify-between">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${statusColors[issue.status]}`}
                    >
                      {issue.status.replace("_", " ")}
                    </span>

                    <span className="text-sm text-gray-500">
                      {issue.createdAt}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-teal-600 to-emerald-500 py-20 text-center text-white">
        <h2 className="text-4xl font-bold">Ready to Make a Difference?</h2>
        <p className="mx-auto mt-4 max-w-xl text-teal-100">
          Join thousands of citizens improving their communities.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <NavLink
            to="/report"
            className="rounded-full bg-white px-6 py-3 font-semibold text-teal-600"
          >
            Report an Issue Now →
          </NavLink>

          <NavLink
            to="/browse"
            className="rounded-full border border-white/40 px-6 py-3 font-semibold"
          >
            Explore Issues
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

/* ---------- SMALL COMPONENTS ---------- */

const StatCard = ({ icon, label, value }) => (
  <div className="rounded-xl bg-white p-6 text-center shadow-sm">
    <div className="mx-auto mb-3 w-fit rounded-full bg-teal-100 p-3 text-teal-600">
      {icon}
    </div>
    <h3 className="text-2xl font-bold">{value}</h3>
    <p className="text-gray-600">{label}</p>
  </div>
);

const HowCard = ({ icon, title }) => (
  <div className="text-center">
    <div className="mx-auto mb-4 w-fit rounded-xl bg-teal-500 p-4 text-white">
      {icon}
    </div>
    <h4 className="font-semibold">{title}</h4>
  </div>
);
