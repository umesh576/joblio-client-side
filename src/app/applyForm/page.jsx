"use client";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { toast } from "react-toastify";

const FormPost = () => {
  const params = useParams();
  const postId = params.postId;
  // useEffect(() => {});
  const handelForm = async (e) => {
    e.preventDefault();
    const fromData = new FormData(e.currentTarget);
    const appliedData = Object.fromEntries(fromData.entries());
    appliedData.postId = postId;
    console.log(appliedData);
    try {
      const response = await fetch(
        "http://localhost:5000/api/applypost/apply",
        {
          method: "POST",
          body: appliedData,
        }
      );
      const data = await response.json();
      if (response.ok) {
        toast.success("Your application was submit sucessfully.");
        obj = {
          userId: "",
          postId: "",
          firstName: "",
          lastname: "",
          experience: "",
        };
      } else {
        toast.error("Something error in submit your application.");
      }
    } catch (e) {
      toast.error("404 error from backend");
    }
  };
  return (
    <div>
      <form
        action=""
        // action="http://localhost:5000/api/applypost/apply"
        // method="post"
        // encType="multipart/form-data"
        onSubmit={handelForm}
      >
        {/* Hidden fields for required backend data */}
        <input type="hidden" name="userId" value="USER_ID_HERE" />
        {/* Replace with actual user ID */}
        <input type="hidden" name="postId" value="POST_ID_HERE" />
        {/* Replace with actual post ID */}
        {/* Existing fields */}
        <input type="text" placeholder="Firstname" name="firstName" required />
        <input
          type="text"
          placeholder="Lastname"
          name="lastname"
          required
        />{" "}
        {/* Note: Match `lastname` (lowercase) with backend */}
        <input
          type="number"
          name="experience"
          placeholder="Years of experience"
          required
        />
        <input type="file" name="resume" accept=".pdf,.doc,.docx" required />{" "}
        {/* Restrict file types */}
        <input
          type="file"
          name="coverLetter"
          accept=".pdf,.doc,.docx"
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormPost;
