// pages/contact.js
import Head from "next/head";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaClock,
  FaUser,
  FaEnvelopeOpen,
  FaPaperPlane,
} from "react-icons/fa";

export default function ContactPage() {
  const contactMethods = [
    {
      icon: <FaPhone className="text-2xl" />,
      title: "Phone",
      details: "(555) 123-4567",
      action: "Call us",
      color: "bg-blue-600",
    },
    {
      icon: <FaEnvelope className="text-2xl" />,
      title: "Email",
      details: "info@careerconnect.com",
      action: "Send message",
      color: "bg-blue-700",
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      title: "Visit Us",
      details: "123 Career Avenue, Suite 500, New York, NY 10001",
      action: "Get directions",
      color: "bg-blue-800",
    },
    {
      icon: <FaClock className="text-2xl" />,
      title: "Hours",
      details: "Mon-Fri: 9AM-6PM\nSat: 10AM-4PM\nSun: Closed",
      action: "Schedule appointment",
      color: "bg-blue-900",
    },
  ];

  const faqs = [
    {
      question: "How quickly do you respond to inquiries?",
      answer:
        "We typically respond to all inquiries within 1 business day. For urgent matters, please call us directly.",
    },
    {
      question: "Do I need an appointment to visit your office?",
      answer:
        "While walk-ins are welcome, we recommend scheduling an appointment to ensure a career specialist is available to assist you.",
    },
    {
      question: "What services can I access through your center?",
      answer:
        "We offer career counseling, job placement services, resume writing, interview preparation, skills training, and networking opportunities.",
    },
    {
      question: "Are your services free?",
      answer:
        "Most of our core services are free for job seekers. Some specialized training programs may have fees, which we clearly communicate upfront.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Head>
        <title>Contact Us | Professional Job Center</title>
        <meta
          name="description"
          content="Get in touch with our career specialists for personalized assistance"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            We're Here to Help
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-10 text-blue-100">
            Contact our career specialists for personalized assistance with your
            job search and career development.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white px-8 py-3 rounded-lg font-bold text-lg shadow-lg transition duration-300">
              Schedule Consultation
            </button>
            <button className="bg-white hover:bg-blue-100 text-blue-800 px-8 py-3 rounded-lg font-bold text-lg shadow-lg transition duration-300">
              Browse Services
            </button>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
              Contact Information
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-yellow-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Reach out to us through any of these convenient methods
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-lg overflow-hidden border border-blue-100 transform transition duration-300 hover:scale-[1.02]"
              >
                <div className={`${method.color} py-8 flex justify-center`}>
                  <div className="bg-white bg-opacity-20 rounded-full p-6 text-white">
                    {method.icon}
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-blue-800 mb-3">
                    {method.title}
                  </h3>
                  <p className="text-gray-600 mb-4 whitespace-pre-line">
                    {method.details}
                  </p>
                  <button className="text-blue-600 font-medium hover:text-blue-800 flex items-center justify-center">
                    {method.action}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
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

      {/* Contact Form & Map */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Form */}
            <div className="lg:w-1/2">
              <div className="bg-white rounded-xl shadow-lg p-8 border border-blue-100">
                <h2 className="text-3xl font-bold text-blue-800 mb-6">
                  Send Us a Message
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-yellow-500 mb-6"></div>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-gray-700 font-medium mb-2"
                      >
                        Your Name
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-blue-600">
                          <FaUser />
                        </div>
                        <input
                          type="text"
                          id="name"
                          className="w-full pl-10 pr-4 py-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="John Doe"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-gray-700 font-medium mb-2"
                      >
                        Email Address
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-blue-600">
                          <FaEnvelope />
                        </div>
                        <input
                          type="email"
                          id="email"
                          className="w-full pl-10 pr-4 py-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      rows="5"
                      className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Tell us about your career goals or questions..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white py-4 rounded-lg font-bold text-lg shadow-lg transition duration-300 flex items-center justify-center"
                  >
                    Send Message
                    <FaPaperPlane className="ml-2" />
                  </button>
                </form>
              </div>
            </div>

            {/* Map & Location */}
            <div className="lg:w-1/2">
              <div className="bg-white rounded-xl shadow-lg p-8 border border-blue-100 h-full">
                <h2 className="text-3xl font-bold text-blue-800 mb-6">
                  Visit Our Office
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-yellow-500 mb-6"></div>

                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64 mb-8 flex items-center justify-center">
                  <div className="text-center p-4">
                    <FaMapMarkerAlt className="text-4xl text-blue-600 mx-auto mb-3" />
                    <p className="text-gray-600 font-medium">
                      CareerConnect Location Map
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                      <FaMapMarkerAlt className="text-blue-700 text-xl" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-blue-800 mb-1">
                        Headquarters
                      </h3>
                      <p className="text-gray-600">
                        123 Career Avenue, Suite 500
                        <br />
                        New York, NY 10001
                        <br />
                        United States
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                      <FaClock className="text-blue-700 text-xl" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-blue-800 mb-1">
                        Business Hours
                      </h3>
                      <p className="text-gray-600">
                        Monday - Friday: 9:00 AM - 6:00 PM
                        <br />
                        Saturday: 10:00 AM - 4:00 PM
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                      <FaPhone className="text-blue-700 text-xl" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-blue-800 mb-1">
                        Contact Numbers
                      </h3>
                      <p className="text-gray-600">
                        Main: (555) 123-4567
                        <br />
                        Support: (555) 123-4568
                        <br />
                        Fax: (555) 123-4569
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
              Frequently Asked Questions
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-yellow-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our services and contact
              process
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="mb-6 border border-blue-100 rounded-xl overflow-hidden"
              >
                <div className="bg-gradient-to-r from-blue-50 to-white p-6 flex justify-between items-center cursor-pointer">
                  <h3 className="text-lg font-bold text-blue-800">
                    {faq.question}
                  </h3>
                  <svg
                    className="w-5 h-5 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
                <div className="p-6 bg-white">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-500 to-blue-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Advance Your Career?
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-10 text-blue-100">
            Schedule a free consultation with one of our career specialists
            today
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg transition duration-300">
              Book Appointment
            </button>
            <button className="bg-white hover:bg-blue-100 text-blue-800 px-8 py-4 rounded-lg font-bold text-lg shadow-lg transition duration-300">
              Call Now: (555) 123-4567
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
