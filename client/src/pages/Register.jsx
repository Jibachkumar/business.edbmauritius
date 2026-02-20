import React from "react";

function Register() {
  return (
    <div className="w-full pt-12 pb-10 bg-white">
      {/* Title */}
      <h1 className="text-[34px] font-semibold text-black mb-8">Register</h1>

      {/* Content */}
      <div className="w-[340px] space-y-2 text-[15px] leading-[1.3] text-gray-800 text-justify justified-text break-words">
        <p>
          For security and identification purposes, we need to validate both
          your email address and your mobile phone number before creating your
          user account.
        </p>

        <p>
          Your user account will be identified by the email address which you
          provide below and will be required for login on the National
          E-Licensing System.
        </p>

        <p>
          We recommend that you register with your work email address when
          representing a company, or your personal email address when acting as
          an individual.
        </p>

        <p>
          During registration, an SMS token will be sent to your mobile number
          for validation and will expire after 24 hours.
        </p>
      </div>

      <form className="space-y-4 mt-7 px-1">
        {/* Title */}
        <div>
          <label className="block text-md font-semibold text-black mb-1">
            Title
          </label>
          <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm bg-white focus:outline-none focus:ring-1 focus:ring-blue-500">
            <option>Select Title</option>
            <option>Mr.</option>
            <option>Ms.</option>
            <option>Mrs.</option>
          </select>
        </div>

        {/* First Name */}
        <div>
          <label className="block text-sm font-semibold text-black mb-1">
            First Name
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm  focus:outline-none focus:ring-1 focus:ring-blue-500 placeholder-gray-200"
          />
        </div>

        {/* Last Name */}
        <div>
          <label className="block text-sm font-semibold text-black mb-1">
            Last Name
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        {/* Gender */}
        <div>
          <label className="block text-sm font-semibold text-black mb-1">
            Gender
          </label>
          <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm bg-white focus:outline-none focus:ring-1 focus:ring-blue-500">
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-semibold text-black mb-1">
            Email
          </label>
          <input
            type="email"
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        {/* Mobile Number */}
        <div>
          <label className="block text-sm font-semibold text-black mb-1">
            Mobile Number
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              className="w-20 border border-gray-300 rounded-md px-2 py-2 text-sm bg-white focus:outline-none"
            />
            <input
              type="text"
              className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm bg-white focus:outline-none"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-4 pt-4">
          <button
            type="button"
            className="px-5 py-2 text-sm border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-5 py-2 text-sm border border-blue-400 text-blue-300 rounded-md cursor-not-allowed"
            disabled
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register;
