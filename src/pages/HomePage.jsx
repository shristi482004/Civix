import React from "react";
import { NavLink } from "react-router-dom";
import {
  FileText,
  Camera,
  Clock,
  Check
} from "lucide-react";

const HomePage = () => {
  const dummyIssues = [
    {
      id: "1",
      title: "Large pothole on Main Street",
      category: "Road & Infrastructure",
      status: "in_progress",
      imageUrl: "https://images.unsplash.com/photo-1587763483696-6d41d2de6084?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      createdAt: "2 hours ago"
    },
    {
      id: "2",
      title: "Overflowing garbage bins in park",
      category: "Sanitation",
      status: "reported",
      imageUrl: "https://images.unsplash.com/photo-1598706496038-58784d1287cd?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      createdAt: "1 day ago"
    },
    {
      id: "3",
      title: "Broken streetlight on Cedar Avenue",
      category: "Electricity",
      status: "resolved",
      imageUrl: "https://images.unsplash.com/photo-1742119193536-7d228ef7f466?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      createdAt: "3 days ago"
    }
  ];

  const statusColors = {
    reported: "bg-amber-100 text-amber-800",
    in_progress: "bg-teal-100 text-teal-800",
    resolved: "bg-emerald-100 text-emerald-800"
  };

  return (
    <div className="w-full bg-[#FDFCFB]">

      {/* HERO */}
      <section className="pt-24 pb-24 md:-mt-24 relative min-h-screen flex items-center justify-center overflow-hidden graph-paper">
        <div className="relative z-10 max-w-6xl px-6 text-center">
          <p className="animate-fade-up delay-100 text-[11px] font-bold uppercase tracking-[0.35em] text-teal-700/70 mb-8">
            The Community’s Digital Leader
          </p>

          <h1 className="animate-fade-up delay-200 text-4xl md:text-6xl lg:text-7xl font-serif font-bold leading-[1.1] text-gray-900 mb-10">
            <span className="inline-block bg-teal-100 px-6 py-3 rounded-[26px] text-teal-900 border border-teal-200 -rotate-2 mr-2">
              Civix.
            </span>
            for the <span className="italic font-normal">ignored</span>,<br />
            the street-smart and<br />
            the <span className="underline decoration-teal-300 decoration-6 underline-offset-8">
              civic-obsessed
            </span>
          </h1>

          <div className="animate-fade-up delay-300 flex flex-col sm:flex-row justify-center gap-6">
            <NavLink
              to="/report"
              className="px-10 py-5 bg-teal-900 text-white font-semibold rounded-full text-lg transition hover:scale-[1.04] hover:shadow-lg"
            >
              Start a Report — Now
            </NavLink>

            <NavLink
              to="/browse"
              className="px-10 py-5 bg-white border-2 border-teal-200 text-teal-900 font-semibold rounded-full transition hover:bg-teal-50 hover:scale-[1.03]"
            >
              Explore the Feed
            </NavLink>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="-mt-32 pb-24 graph-paper">
        <div className="mx-auto max-w-4xl bg-white rounded-[48px] border border-gray-100 shadow-xl p-16 animate-fade-up">
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-gray-400 text-center mb-14">
            Real-Time Community Impact
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            <Stat value="1.2k" label="Total Reports" />
            <Stat value="450" label="Resolved" />
            <Stat value="22" label="Active Wards" />
            <Stat value="92%" label="Fix Rate" />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 text-center animate-fade-up">
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-gray-400 mb-6">
            About Civix
          </p>

          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">
            A public record<br />
            <span className="italic text-teal-700">for what gets ignored.</span>
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed">
            Civix is a community-powered civic ledger — documenting everyday
            issues and turning visibility into accountability.
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 bg-[#EEF5F3]">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-gray-400 mb-6">
            How it works
          </p>

          <h2 className="text-4xl font-serif font-bold mb-16">
            A report becomes a record.
          </h2>

          <div className="grid md:grid-cols-4 gap-14">
            <HowCard icon={<FileText />} title="Describe the issue" />
            <HowCard icon={<Camera />} title="Add context & evidence" />
            <HowCard icon={<Clock />} title="Track its progress" />
            <HowCard icon={<Check />} title="Resolution is recorded" />
          </div>
        </div>
      </section>

      

      {/* RECENT ISSUES */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-5xl font-serif font-bold mb-14">
            Civic transparency<br />
            <span className="italic text-teal-700">starts here.</span>
          </h2>

          <div className="grid gap-10 md:grid-cols-3">
            {dummyIssues.map((issue) => (
              <div
                key={issue.id}
                className="bg-white border border-gray-200 rounded-[32px] overflow-hidden transition hover:-translate-y-1 hover:shadow-xl"
              >
                <img
                  src={issue.imageUrl}
                  alt={issue.title}
                  className="h-56 w-full object-cover"
                />

                <div className="p-8">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-teal-600">
                    {issue.category}
                  </span>

                  <h3 className="mt-3 text-2xl font-serif font-bold">
                    {issue.title}
                  </h3>

                  <div className="mt-6 flex items-center justify-between">
                    <span
                      className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest ${statusColors[issue.status]}`}
                    >
                      {issue.status.replace("_", " ")}
                    </span>

                    <span className="text-xs text-gray-400 font-bold">
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
      <section className="py-20 bg-teal-900 text-white text-center">
        <h2 className="text-4xl md:text-5xl font-serif font-bold">
          Ready to Make a Difference?
        </h2>

        <p className="mt-6 text-teal-100 max-w-xl mx-auto">
          Join thousands of citizens building transparent, accountable communities.
        </p>

        <div className="mt-7 flex justify-center gap-6">
          <NavLink
            to="/report"
            className="px-10 py-4 bg-white text-teal-900 rounded-full font-semibold transition hover:scale-[1.04]"
          >
            Report an Issue
          </NavLink>

          <NavLink
            to="/browse"
            className="px-10 py-4 border border-white/40 rounded-full font-semibold transition hover:bg-white/10"
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

const Stat = ({ value, label }) => (
  <div className="flex flex-col items-center transition hover:-translate-y-1">
    <div className="w-full aspect-square bg-[#E8F5F3] rounded-[32px] flex items-center justify-center mb-4">
      <span className="text-5xl md:text-6xl font-serif font-bold text-teal-900">
        {value}
      </span>
    </div>
    <span className="text-[11px] font-bold uppercase tracking-widest text-gray-400">
      {label}
    </span>
  </div>
);

const HowCard = ({ icon, title }) => (
  <div className="flex flex-col items-center text-center transition hover:-translate-y-1">
    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-[24px] bg-white text-teal-900 shadow-sm">
      {icon}
    </div>

    <h4 className="text-lg font-serif font-semibold text-gray-900">
      {title}
    </h4>

    <div className="mt-4 h-[2px] w-10 bg-teal-300/70" />
  </div>
);
