"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { toast } from "react-toastify";

const ApplyJobPage = () => {
  const { postId } = useParams();
  const router = useRouter();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJob = async () => {
      if (!postId) return;
      try {
        const res = await fetch(`http://localhost:5000/api/post/${postId}`);
        if (res.ok) {
          toast.success("Post fetched successfully");
        }
        const data = await res.json();
        setPost(data.data);
      } catch (error) {
        console.error("Failed to fetch job details:", error);
        toast.error("Failed to load job details");
      } finally {
        setLoading(false);
      }
    };
    fetchJob();
  }, [postId]);

  const handleApply = async () => {
    try {
      console.log(localStorage.getItem("access_token"));
      // Check authentication only when button is clicked
      const authCheck = await fetch("http://localhost:5000/api/auth/check", {
        // headers: {
        //   Authorization: `Bearer ${localStorage.getItem("access_token")}`, // Retrieve token from storage
        // },
        credentials: "include",
      });

      if (!authCheck.ok) {
        toast.info("Please login to apply for this job");
        router.push(`/login?redirect=/post/${postId}`);
        return;
      }
      console.log(authCheck);

      router.push(`/applyForm?postId=${postId}`);
    } catch (error) {
      console.error("Authentication check failed:", error);
      toast.error("Failed to verify authentication");
    }
  };

  if (loading) return <div className="text-center py-16">Loading...</div>;
  if (!post)
    return <div className="text-center py-16 text-red-500">Job not found</div>;

  return (
    <div className="container mx-auto max-w-3xl py-10 px-4">
      <h1 className="text-3xl font-bold text-blue-800 mb-4">{post.title}</h1>
      <p className="text-gray-700 mb-2">{post.description}</p>
      <p className="text-gray-600 mb-2 font-medium">
        Category: {post.jobCategory?.name || "General"}
      </p>
      <p className="text-gray-600 mb-2">Experience: {post.experience}</p>
      <p className="text-gray-600 mb-2">Salary: {post.salary}</p>
      <p className="text-gray-600 mb-6">Qualification: {post.qualification}</p>

      <button
        onClick={handleApply}
        className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg"
      >
        Apply for this Job
      </button>
    </div>
  );
};

export default ApplyJobPage;
