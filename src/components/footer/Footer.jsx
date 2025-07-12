import React from "react";

const FooterSection = () => {
  return (
    <div>
      {/* Footer Section */}
      <footer className="bg-blue-800 text-white py-10 mt-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">JobSeeker</h3>
              <p className="text-blue-200">
                Connecting talented professionals with the best companies around
                the world.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">For Job Seekers</h4>
              <ul className="space-y-2 text-blue-200">
                <li>
                  <a href="#" className="hover:text-white">
                    Browse Jobs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Career Resources
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Resume Builder
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Job Alerts
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">For Employers</h4>
              <ul className="space-y-2 text-blue-200">
                <li>
                  <a href="#" className="hover:text-white">
                    Post a Job
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Search Resumes
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Pricing Plans
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    HR Solutions
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Contact Us</h4>
              <ul className="space-y-2 text-blue-200">
                <li>contact@jobseeker.com</li>
                <li>+1 (555) 123-4567</li>
                <li>123 Business Ave, Suite 100</li>
                <li>New York, NY 10001</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-blue-700 mt-8 pt-6 text-center text-blue-300">
            <p>© {new Date().getFullYear()} JobSeeker. All rights reserved.</p>
            <div className="mt-4 flex justify-center space-x-6">
              <a href="#" className="hover:text-white">
                Terms
              </a>
              <a href="#" className="hover:text-white">
                Privacy
              </a>
              <a href="#" className="hover:text-white">
                Cookies
              </a>
              <a href="#" className="hover:text-white">
                Help Center
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FooterSection;
