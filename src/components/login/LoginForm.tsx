"use client";

import { useState } from "react";
import Input from "../ui/Input";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password });
    try {
      const response = await fetch("http://localhost:5000/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const result = await response.json();
      if (response.ok) {
        alert("✅ Login successful!");
        // Optionally: redirect or store token
        console.log("JWT Token:", result.token);
        router.push("/"); //or localStorage.setItem('token', result.token)
      } else if (response.status === 401) {
        alert("❌ Invalid email or password");
      } else {
        alert(result.message || "❌ Something went wrong");
      }

      const token = result.token;
      console.log(token);
      localStorage.setItem("authToken", token);
    } catch (error) {
      console.error("Login error:", error);
      alert("❌ Something went wrong. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <Input
        label="Email"
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        label="Password"
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {/* <Button type="submit">Login</Button> */}
      <Link href="/signup" className="text-blue-600 hover:underline">
        Don’t have an account? Sign up
      </Link>{" "}
      <button
        type="submit"
        className="bg-blue-700 hover:bg-blue-500 text-white font-bold py-3 px-4 rounded-lg transition duration-300 cursor-pointer"
      >
        Login{" "}
      </button>
    </form>
  );
}
