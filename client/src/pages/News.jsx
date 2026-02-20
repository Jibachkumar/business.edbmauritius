import { useState } from "react";

function News() {
  return (
    <div className="md:max-w-[68rem] mx-auto mt-12">
      <h2 className="text-[24px] font-bold mb-1">Morcellement Permit</h2>
      <p>
        The Morcellement Board is established under Section (4) of the
        Morcellement Act 1990 as amended.
      </p>
      <a
        href="#"
        className="text-[#3a7ab5] underline inline-block leading-tight"
      >
        Read More
      </a>
      <h2 className="text-[24px] font-bold mb-1 mt-6">News and Events</h2>
      <a href="#" className="text-[#3a7ab5] underline inline-block mt-2">
        Read More
      </a>

      <div className="mb-[145px]">
        <div className="inline-flex border border-slate-300 rounded-sm mt-4 text-[14.5px]">
          {["First", "Previous", "1", "Next", "Last"].map((label) => (
            <button
              key={label}
              className={`border-r border-slate-300 px-3 py-1
                      ${label === "1" ? "text-slate-500 font-semibold" : "text-black"}
                    `}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default News;
