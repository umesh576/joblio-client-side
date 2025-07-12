"use client";
import React from "react";
import SignupForm from "@/components/signup/SignupPage";
const Page = () => {
  return (
    <div className=" flex justify-center py-10 ">
      <div className=" border border-black px-5 ">
        <SignupForm />
      </div>
    </div>
  );
};

export default Page;
