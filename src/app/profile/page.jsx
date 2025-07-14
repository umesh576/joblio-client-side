"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

// app/profile/page.jsx
const ProfilePage = () => {
  const router = useRouter();
  //   const [user, setUser] = useState();
  // User data (replace with actual data fetching in real app)

  //fetching user and checking user is login or not

  useEffect(() => {
    // checking user login or not
    const checkUserLoginOrNot = async () => {
      const token = localStorage.getItem("authToken");

      if (!token) {
        toast.error("please login first");
        router.push("/login");
        return;
      }
      //   try {
      const isLogin = await fetch("http://localhost:5000/api/auth/check", {
        headers: {
          Authorization: `BEARER ${token}`,
        },
      });

      if (!isLogin.ok) {
        toast.info("Please login to apply for this job");
        router.push("/login");
        return;
      }

      const data = await isLogin.json();
      const user = await fetch(
        `http://localhost:5000/api/user/${data.user._id}`
      );
      //   console.log(await user.json().data);
      if (!user.ok) {
        toast.error("User can't fetch sucessfully.");
      }

      const userData = await user.json();
      console.log(userData.data);
      //   setUser(userData.data);

      // return userData.data;
      //   return
      //   } catch (e) {
      //     toast.error("Failed to open this file");
      //   }
    };
    checkUserLoginOrNot();
  }, [""]);

  const user = {
    _id: "68691a4adb03ecfa5a393f76",
    firstName: "Ram",
    lastName: "Joshi",
    email: "uj29771@gmail.com",
    phoneNumber: "9848426264",
    role: "JobSeeker",
    jobType: "Any",
    skill: "Computer Engineer",
    address: "Kathmandu, Nepal",
    gender: "Male",
    profile: "/profile.jpg", // Update with actual path
    createdAt: "2025-07-05T12:27:54.619+00:00",
    updatedAt: "2025-07-13T20:52:06.575+00:00",
  };

  // Format date without date-fns
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-10 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Profile Header */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-teal-500 h-32 relative">
            <div className="absolute -bottom-16 left-8">
              <div className="bg-white p-1 rounded-full">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-32 h-32" />
              </div>
            </div>
          </div>

          <div className="pt-20 px-8 pb-8">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-3xl font-bold text-gray-800">
                  {user.firstName || "umesh"} {user.lastName}
                </h1>
                <p className="text-gray-600 mt-1">{user.skill}</p>

                <div className="flex items-center mt-3 space-x-4">
                  <span className="flex items-center text-gray-600">
                    <svg
                      className="w-5 h-5 mr-1 text-blue-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    {user.email}
                  </span>
                  <span className="flex items-center text-gray-600">
                    <svg
                      className="w-5 h-5 mr-1 text-blue-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    +977 {user.phoneNumber}
                  </span>
                </div>
              </div>

              <button className="bg-white border border-blue-500 text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg font-medium transition duration-200">
                Edit Profile
              </button>
            </div>

            <div className="border-t border-gray-200 mt-8 pt-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Personal Information
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InfoCard
                  title="Professional Details"
                  items={[
                    { label: "Role", value: user.role },
                    { label: "Job Type", value: user.jobType },
                    { label: "Primary Skill", value: user.skill },
                  ]}
                />

                <InfoCard
                  title="Personal Details"
                  items={[
                    { label: "Location", value: user.address },
                    { label: "Gender", value: user.gender },
                    {
                      label: "Member Since",
                      value: formatDate(user.createdAt),
                    },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <StatCard
            title="Jobs Applied"
            value={19}
            icon={
              <svg
                className="w-8 h-8 text-teal-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
            }
          />

          <StatCard
            title="Active Applications"
            value={5}
            icon={
              <svg
                className="w-8 h-8 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            }
          />

          <StatCard
            title="Profile Completeness"
            value="85%"
            icon={
              <svg
                className="w-8 h-8 text-amber-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            }
          />
        </div>
      </div>
    </div>
  );
};

// Reusable Info Card Component
const InfoCard = ({ title, items }) => (
  <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
    <h3 className="font-medium text-gray-700 mb-3">{title}</h3>
    <div className="space-y-3">
      {items.map((item, index) => (
        <div key={index} className="flex justify-between">
          <span className="text-gray-600">{item.label}:</span>
          <span className="font-medium text-gray-800">{item.value}</span>
        </div>
      ))}
    </div>
  </div>
);

// Reusable Stat Card Component
const StatCard = ({ title, value, icon }) => (
  <div className="bg-white rounded-xl shadow-sm p-6 flex items-center">
    <div className="mr-4 bg-blue-50 p-3 rounded-full">{icon}</div>
    <div>
      <p className="text-gray-600">{title}</p>
      <p className="text-2xl font-bold text-gray-800">{value}</p>
    </div>
  </div>
);

export default ProfilePage;
