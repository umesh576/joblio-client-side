// pages/services.js
import Head from "next/head";
import {
  FaBriefcase,
  FaUserGraduate,
  FaLaptopCode,
  FaUsers,
  FaChartLine,
  FaHandshake,
} from "react-icons/fa";
export default function Services() {
  const services = [
    {
      icon: <FaBriefcase className="text-3xl" />,
      title: "Job Placement",
      description:
        "Connect with top employers through our extensive network. We match your skills with the right opportunities.",
      color: "bg-blue-600",
    },
    {
      icon: <FaUserGraduate className="text-3xl" />,
      title: "Career Counseling",
      description:
        "Personalized guidance to help you navigate your career path and make informed decisions.",
      color: "bg-blue-700",
    },
    {
      icon: <FaLaptopCode className="text-3xl" />,
      title: "Skills Training",
      description:
        "Enhance your marketability with our industry-relevant training programs and certifications.",
      color: "bg-blue-800",
    },
    {
      icon: <FaUsers className="text-3xl" />,
      title: "Networking Events",
      description:
        "Connect with professionals and employers at our exclusive networking sessions.",
      color: "bg-blue-900",
    },
    {
      icon: <FaChartLine className="text-3xl" />,
      title: "Career Development",
      description:
        "Strategies to advance your career and achieve long-term professional growth.",
      color: "bg-blue-500",
    },
    {
      icon: <FaHandshake className="text-3xl" />,
      title: "Interview Preparation",
      description:
        "Master the art of interviewing with our mock sessions and expert feedback.",
      color: "bg-blue-600",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Professional",
      quote:
        "The career counseling service helped me pivot into a new industry with confidence.",
    },
    {
      name: "Michael Chen",
      role: "Software Developer",
      quote:
        "Their interview preparation program was instrumental in landing my dream job.",
    },
    {
      name: "Elena Rodriguez",
      role: "HR Manager",
      quote:
        "We've found exceptional talent through this job center's placement services.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Head>
        <title>Career Services | Professional Job Center</title>
        <meta
          name="description"
          content="Explore our comprehensive career services to advance your professional journey"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Career Services That Make a Difference
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-10 text-blue-100">
            Unlock your potential with our comprehensive suite of career
            development services designed to help you succeed in today's
            competitive job market.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white px-8 py-3 rounded-lg font-bold text-lg shadow-lg transition duration-300">
              Explore Services
            </button>
            <button className="bg-white hover:bg-blue-100 text-blue-800 px-8 py-3 rounded-lg font-bold text-lg shadow-lg transition duration-300">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
              Our Career Services
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-yellow-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer a comprehensive range of services to support your career
              journey at every stage, from exploration to advancement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-lg overflow-hidden border border-blue-100 transform transition duration-300 hover:scale-[1.02] hover:shadow-xl"
              >
                <div className={`${service.color} py-8 flex justify-center`}>
                  <div className="bg-white bg-opacity-20 rounded-full p-6 text-white">
                    {service.icon}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-blue-800 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <button className="text-blue-600 font-medium flex items-center hover:text-blue-800">
                    Learn more
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
              How Our Service Works
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-yellow-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Getting started with our career services is simple and
              straightforward. Follow these steps to begin your journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-bold text-blue-800 mb-3">Register</h3>
              <p className="text-gray-600">
                Create your account and complete your profile
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-bold text-blue-800 mb-3">Assess</h3>
              <p className="text-gray-600">
                Take our skills assessment and career evaluation
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-800 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-bold text-blue-800 mb-3">Plan</h3>
              <p className="text-gray-600">
                Develop your personalized career strategy
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6">
                4
              </div>
              <h3 className="text-xl font-bold text-blue-800 mb-3">Succeed</h3>
              <p className="text-gray-600">
                Implement your plan and achieve your goals
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
              Success Stories
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-yellow-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from professionals who have transformed their careers with
              our services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-md p-8 border border-blue-100"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                  <div className="ml-4">
                    <h4 className="font-bold text-blue-800">
                      {testimonial.name}
                    </h4>
                    <p className="text-blue-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                <div className="flex mt-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-yellow-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-700 to-blue-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Advance Your Career?
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-10 text-blue-100">
            Join thousands of professionals who have transformed their careers
            with our services.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg transition duration-300">
              Get Started Today
            </button>
            <button className="bg-white hover:bg-blue-100 text-blue-800 px-8 py-4 rounded-lg font-bold text-lg shadow-lg transition duration-300">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
