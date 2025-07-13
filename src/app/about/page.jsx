// pages/about.js
import Head from "next/head";
import {
  FaBriefcase,
  FaHandshake,
  FaUsers,
  FaChartLine,
  FaMedal,
  FaLightbulb,
} from "react-icons/fa";

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      bio: "15+ years in HR and talent development",
      color: "bg-blue-600",
    },
    {
      name: "Michael Chen",
      role: "Director of Career Services",
      bio: "Career strategist with Fortune 500 experience",
      color: "bg-blue-700",
    },
    {
      name: "Elena Rodriguez",
      role: "Head of Training",
      bio: "Certified career coach and skills development expert",
      color: "bg-blue-800",
    },
    {
      name: "David Kim",
      role: "Employer Relations",
      bio: "Connects top talent with leading companies",
      color: "bg-blue-900",
    },
  ];

  const values = [
    {
      icon: <FaHandshake className="text-3xl" />,
      title: "Integrity",
      description:
        "We maintain the highest ethical standards in all our services and interactions",
    },
    {
      icon: <FaUsers className="text-3xl" />,
      title: "Empowerment",
      description:
        "We equip job seekers with the tools and confidence to succeed",
    },
    {
      icon: <FaChartLine className="text-3xl" />,
      title: "Excellence",
      description: "We strive for exceptional results in everything we do",
    },
    {
      icon: <FaMedal className="text-3xl" />,
      title: "Innovation",
      description:
        "We continuously improve our services to meet evolving market needs",
    },
    {
      icon: <FaLightbulb className="text-3xl" />,
      title: "Collaboration",
      description:
        "We believe in the power of partnerships to create opportunities",
    },
  ];

  const milestones = [
    { year: "2015", event: "Founded with a mission to bridge the skills gap" },
    { year: "2017", event: "Expanded services to 5 major cities" },
    { year: "2019", event: "Launched digital training platform" },
    { year: "2021", event: "Reached 10,000 successful placements" },
    { year: "2023", event: "Recognized as Top Career Services Provider" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Empowering Careers, Transforming Lives
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-10 text-blue-100">
            Discover our mission, meet our team, and learn how we've helped
            thousands achieve their professional goals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white px-8 py-3 rounded-lg font-bold text-lg shadow-lg transition duration-300">
              Our Services
            </button>
            <button className="bg-white hover:bg-blue-100 text-blue-800 px-8 py-3 rounded-lg font-bold text-lg shadow-lg transition duration-300">
              Join Our Team
            </button>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96" />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6">
                Our Story
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-yellow-500 mb-6"></div>
              <p className="text-gray-600 mb-6">
                Founded in 2015, CareerConnect began with a simple mission: to
                bridge the gap between talented professionals and meaningful
                career opportunities. What started as a small team of career
                advisors has grown into a comprehensive career services
                organization serving thousands of job seekers annually.
              </p>
              <p className="text-gray-600 mb-6">
                Our journey began when our founder, Sarah Johnson, recognized
                the challenges professionals faced in navigating an increasingly
                complex job market. She envisioned a place where job seekers
                could access personalized guidance, skills development, and
                direct connections to employers.
              </p>
              <p className="text-gray-600">
                Today, we're proud to have helped over 10,000 individuals launch
                new careers, transition industries, and achieve their
                professional aspirations. Our approach combines cutting-edge
                technology with human expertise to deliver transformative career
                solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
              Our Mission & Vision
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-yellow-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Driving career success through innovative solutions and
              personalized support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-blue-100">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <FaBriefcase className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-blue-800 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600">
                To empower individuals at every career stage with the tools,
                resources, and connections needed to achieve meaningful
                employment and professional fulfillment. We're committed to
                breaking down barriers to career advancement and creating
                pathways to economic opportunity.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-blue-100">
              <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <FaLightbulb className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-blue-800 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600">
                To create a world where every individual has access to rewarding
                career opportunities and the support needed to thrive in an
                evolving job market. We envision becoming the most trusted
                career partner for professionals and employers alike,
                transforming how talent connects with opportunity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
              Meet Our Leadership Team
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-yellow-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Passionate professionals dedicated to your career success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-lg overflow-hidden border border-blue-100"
              >
                <div
                  className={`${member.color} h-48 flex items-center justify-center`}
                >
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-32 h-32" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-blue-800 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                  <div className="mt-4 flex justify-center space-x-3">
                    <div className="bg-blue-100 w-8 h-8 rounded-full flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-blue-700"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <div className="bg-blue-100 w-8 h-8 rounded-full flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-blue-700"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                      </svg>
                    </div>
                    <div className="bg-blue-100 w-8 h-8 rounded-full flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-blue-700"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
              Our Core Values
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-yellow-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md border border-blue-100 flex flex-col items-center text-center"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 text-blue-700">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-blue-800 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-16 bg-gradient-to-r from-blue-700 to-blue-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Journey
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-yellow-500 mx-auto mb-6"></div>
            <p className="text-blue-200 max-w-2xl mx-auto">
              Key milestones in our mission to transform careers
            </p>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-500 z-0"></div>

            <div className="space-y-12 relative z-10">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  } items-center`}
                >
                  <div className="w-1/2 p-4">
                    <div
                      className={`bg-white p-6 rounded-xl shadow-lg ${
                        index % 2 === 0 ? "mr-auto" : "ml-auto"
                      } max-w-md`}
                    >
                      <div className="text-yellow-600 font-bold text-lg mb-2">
                        {milestone.year}
                      </div>
                      <p className="text-gray-700">{milestone.event}</p>
                    </div>
                  </div>
                  <div className="w-1/2 flex justify-center">
                    <div className="w-6 h-6 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-500 to-blue-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join Our Growing Community
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-10 text-blue-100">
            Whether you're seeking career advancement or looking to hire top
            talent, we're here to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg transition duration-300">
              Explore Our Services
            </button>
            <button className="bg-white hover:bg-blue-100 text-blue-800 px-8 py-4 rounded-lg font-bold text-lg shadow-lg transition duration-300">
              Contact Our Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
