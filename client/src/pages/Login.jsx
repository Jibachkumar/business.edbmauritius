import React from "react";

function Login() {
  return (
    <div className="w-full md:max-w-[53rem] mx-auto pt-4 md:pb-[86px]">
      <div className="">
        {/* Title */}
        <h1 className="text-4xl font-light text-blue-500 mb-7.5">
          LOGIN AS...
        </h1>

        {/* Form */}
        <form className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-[16px] text-gray-600 mb-1">
              User (e-mail address)
            </label>
            <input
              type="email"
              className="w-[312px] border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-[16px] text-gray-600 mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                className="w-[312px] border border-gray-300 rounded px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {/* eye icon placeholder */}
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer">
                👁
              </span>
            </div>
          </div>

          {/* Links */}
          <div className="flex justify-between">
            <div className="text-sm">
              <a href="#" className="text-blue-500 hover:underline block">
                Forgot Password?
              </a>
              <a href="#" className="text-blue-500 hover:underline block">
                Not Registered yet? Register here.
              </a>
            </div>

            {/* Actions */}
            <div className="flex justify-end gap-x-5 mr-5">
              <button
                type="button"
                className="border border-blue-500 text-blue-500 px-6 py-1 rounded hover:bg-blue-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blue-600 text-sm text-white px-6 rounded flex items-center gap-x-1 hover:bg-blue-700"
              >
                LOGIN <span className="text-lg">→</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
