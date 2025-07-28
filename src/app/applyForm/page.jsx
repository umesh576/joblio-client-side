"use client";

// Heroicons (install from @heroicons/react if needed)
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
// Icons (can be imported from @heroicons/react or similar)
const UserIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

const BriefcaseIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
  </svg>
);

const DocumentIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
    <polyline points="14 2 14 8 20 8"></polyline>
  </svg>
);

const UploadIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
    <polyline points="17 8 12 3 7 8"></polyline>
    <line x1="12" y1="3" x2="12" y2="15"></line>
  </svg>
);

const FormPost = () => {
  const router = useRouter();
  const [submit, isSubmit] = useState(false);
  const searchParams = useSearchParams();
  const postId = searchParams.get("postId");
  const userId = searchParams.get("userId");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch(
        "http://localhost:5000/api/applypost/apply",
        {
          method: "POST",
          body: formData,
          headers: {
            Authorization: `BEARER ${localStorage.getItem("authToken")}`,
          },
        }
      );

      const data = await response.json();
      console.log(data);

      if (response.ok) {
        toast.success("Application submitted successfully!");
        e.target.reset();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error, "hey");
    }
  };
  const [resumeName, setResumeName] = useState("");
  const [coverLetterName, setCoverLetterName] = useState("");

  const handleFileChange = (e, type) => {
    const file = e.target.files[0];
    if (file) {
      if (type === "resume") setResumeName(file.name);
      if (type === "coverLetter") setCoverLetterName(file.name);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow rounded-lg overflow-hidden">
          {/* Form Header */}
          <div className="bg-blue-700 px-6 py-4">
            <h2 className="text-xl font-semibold text-white">
              Job Application Form
            </h2>
          </div>

          <form
            onSubmit={handleSubmit}
            encType="multipart/form-data"
            className="px-6 py-8 space-y-6"
          >
            {/* Hidden fields */}
            <input type="hidden" name="postId" value={postId} />
            <input type="hidden" name="userId" value={userId} />

            {/* Personal Information Section */}
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Personal Information
              </h3>

              <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6">
                <div>
                  <label
                    htmlFor="firstName"
                    className=" text-sm font-medium text-gray-700 mb-1 flex items-center"
                  >
                    <UserIcon className="mr-2" />
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="lastname"
                    className=" text-sm font-medium text-gray-700 mb-1 flex items-center"
                  >
                    <UserIcon className="mr-2" />
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastname"
                    name="lastname"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className=" text-sm font-medium text-gray-700 mb-1 flex items-center"
                  >
                    <UserIcon className="mr-2" />
                    email*
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="number"
                    className=" text-sm font-medium text-gray-700 mb-1 flex items-center"
                  >
                    <UserIcon className="mr-2" />
                    number*
                  </label>
                  <input
                    type="number"
                    id="number"
                    name="number"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* Experience Section */}
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Professional Details
              </h3>

              <div className="max-w-xs">
                <label
                  htmlFor="experience"
                  className=" text-sm font-medium text-gray-700 mb-1 flex items-center"
                >
                  <BriefcaseIcon className="mr-2" />
                  Years of Experience *
                </label>
                <input
                  type="number"
                  id="experience"
                  name="experience"
                  min="0"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="max-w-xs">
                <label
                  htmlFor="linkdenProfile"
                  className="text-sm font-medium text-gray-700 mb-1 flex items-center"
                >
                  <BriefcaseIcon className="mr-2" />
                  LinkedIn profile *
                </label>
                <input
                  type="url"
                  id="linkdenProfile"
                  name="linkdenProfile" // Matches backend
                  pattern="https?://(www\.)?linkedin\.com/.*"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="https://linkedin.com/in/username"
                />
              </div>
            </div>

            {/* Documents Section */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Application Documents
              </h3>

              <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6">
                {/* Resume Upload */}
                <div>
                  <label className=" text-sm font-medium text-gray-700 mb-1 flex items-center">
                    <DocumentIcon className="mr-2" />
                    Resume (PDF/DOC) *
                  </label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div className="space-y-1 text-center">
                      <div className="flex text-sm text-gray-600 justify-center">
                        <label
                          htmlFor="resume"
                          className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none"
                        >
                          <UploadIcon className="mx-auto h-8 w-8 text-blue-500" />
                          <span className="block mt-2">Upload resume</span>
                          <input
                            id="resume"
                            name="resume"
                            type="file"
                            required
                            className="sr-only"
                            onChange={(e) => handleFileChange(e, "resume")}
                          />
                        </label>
                      </div>
                      <p className="text-xs text-gray-500">
                        PDF, DOC, DOCX up to 5MB
                      </p>
                      {resumeName && (
                        <p className="text-xs text-gray-900 truncate max-w-xs">
                          Selected: {resumeName}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Cover Letter Upload */}
                <div>
                  <label className=" text-sm font-medium text-gray-700 mb-1 flex items-center">
                    <DocumentIcon className="mr-2" />
                    Cover Letter (PDF/DOC)
                  </label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div className="space-y-1 text-center">
                      <div className="flex text-sm text-gray-600 justify-center">
                        <label
                          htmlFor="coverLetter"
                          className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none"
                        >
                          <UploadIcon className="mx-auto h-8 w-8 text-blue-500" />
                          <span className="block mt-2">
                            Upload cover letter
                          </span>
                          <input
                            id="coverLetter"
                            name="coverLetter"
                            type="file"
                            className="sr-only"
                            onChange={(e) => handleFileChange(e, "coverLetter")}
                          />
                        </label>
                      </div>
                      <p className="text-xs text-gray-500">
                        PDF, DOC, DOCX up to 5MB
                      </p>
                      {coverLetterName && (
                        <p className="text-xs text-gray-900 truncate max-w-xs">
                          Selected: {coverLetterName}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Button */}

            <div className="pt-6">
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
              >
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default FormPost;
