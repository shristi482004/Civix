import { useEffect, useState } from "react";
import { collection, getDocs, query, where, orderBy } from "firebase/firestore";
import { db } from "../firebase";
import { useAuth } from "../context/Authcontext";
import IssueCard from "../components/IssueCard";

const Profile = () => {
  const { user } = useAuth();
  const [myIssues, setMyIssues] = useState([]);

  useEffect(() => {
    const fetchMyIssues = async () => {
      if (!user) return;

      const q = query(
        collection(db, "issues"),
        where("userId", "==", user.uid),
       
      );

      console.log("USER UID:", user.uid);


      const snapshot = await getDocs(q);
      console.log("SNAPSHOT SIZE:", snapshot.size);


      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setMyIssues(data);
    };

    fetchMyIssues();
  }, [user]);

  return (
    <div className="mx-auto max-w-7xl px-6 py-10">
      <h1 className="text-3xl font-bold text-gray-900">My Reports</h1>
      <p className="mt-2 text-gray-600">
        Issues you’ve reported to the community
      </p>

      {myIssues.length === 0 ? (
        <p className="mt-6 text-gray-500">No reports yet.</p>
      ) : (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {myIssues.map((issue) => (
            <IssueCard key={issue.id} issue={issue} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Profile;
