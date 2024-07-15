import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-white p-12 min-h-[550px]">
      <div className="max-w-[1260px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-5">
        {/* First Column */}
        <div>
          <div className="flex items-center space-x-2">
            <img
              src="images/swiggy-logo-bg-black-up.png"
              className="w-11"
              alt="Swiggy Logo"
            />
            <span
              className="text-2xl font-extrabold"
              style={{ fontFamily: "Gilroy, sans-serif" }}
            >
              ZaikaBazaar
            </span>
          </div>
          <p
            className="mt-2 ml-4 text-[rgba(255,255,255,0.6)] font-[700] text-[18px]"
            style={{ fontFamily: "Gilroy, sans-serif" }}
          >
            &copy; 2024 Bundl Technologies <br />
            Pvt. Ltd
          </p>
        </div>

        {/* Second Column */}
        <div className="space-y-4">
          <h3
            className="font-extrabold text-2xl mb-2"
            style={{ fontFamily: "Gilroy, sans-serif" }}
          >
            Company
          </h3>
          <ul
            className="text-[rgba(255,255,255,0.6)] font-[700] text-[18px] leading-[19px] tracking-[-0.3px] space-y-5 cursor-pointer"
            style={{ fontFamily: "Gilroy, sans-serif" }}
          >
            <li>About</li>
            <li>Careers</li>
            <li>Team</li>
            <li>Swiggy One</li>
            <li>Swiggy Instamart</li>
            <li>Swiggy Genie</li>
          </ul>
        </div>

        {/* Third Column */}
        <div className="space-y-4">
          <h3
            className="font-extrabold text-2xl mb-2"
            style={{ fontFamily: "Gilroy, sans-serif" }}
          >
            Legal
          </h3>
          <ul
            className="text-[rgba(255,255,255,0.6)] font-[700] text-[18px] leading-[19px] tracking-[-0.3px] space-y-5 cursor-pointer"
            style={{ fontFamily: "Gilroy, sans-serif" }}
          >
            <li>Terms & Conditions</li>
            <li>Cookie Policy</li>
            <li>Privacy Policy</li>
            <li>Investor Relations</li>
          </ul>
          <br />
          <br />
          <h3
            className="font-extrabold text-2xl mt-3"
            style={{ fontFamily: "Gilroy, sans-serif" }}
          >
            Contact Us
          </h3>
          <ul
            className="text-[rgba(255,255,255,0.6)] font-[700] text-[18px] leading-[19px] tracking-[-0.3px] space-y-5 cursor-pointer"
            style={{ fontFamily: "Gilroy, sans-serif" }}
          >
            <li>Help & Support</li>
            <li>Partner with us</li>
            <li>Ride with us</li>
          </ul>
        </div>

        {/* Fourth Column */}
        <div className="space-y-4">
          <h3
            className="font-extrabold text-2xl mb-2"
            style={{ fontFamily: "Gilroy, sans-serif" }}
          >
            We Deliver To
          </h3>
          <ul
            className="text-[rgba(255,255,255,0.6)] font-[700] text-[18px] leading-[19px] tracking-[-0.3px] space-y-5 cursor-pointer "
            style={{ fontFamily: "Gilroy, sans-serif" }}
          >
            <li>Bangalore</li>
            <li>Gurgaon</li>
            <li>Hyderabad</li>
            <li>Delhi</li>
            <li>Mumbai</li>
            <li>Pune</li>
          </ul>
          <div
            className="mt-2 inline-flex items-center cursor-pointer text-[rgba(255,255,255,0.6)] border border-white rounded-[10px] p-2.5"
            style={{ fontFamily: "Gilroy, sans-serif" }}
          >
            <span className="font-[700] text-[18px] leading-[19px] tracking-[-0.3px]">
              589 cities
            </span>
            <svg
              className="ml-1 w-4 h-4 transform transition-transform duration-300"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06-.02L10 10.94l3.71-3.75a.75.75 0 111.06 1.06l-4.25 4.3a.75.75 0 01-1.06 0l-4.25-4.3a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </footer>
  );
}
