import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

function FaqsAndNotice() {
  const data = [
    {
      title:
        "Do I need clearance from the CEB and CWA when my land is built up?",
      desc: "This is a requirement from the CEB and CWA as per their regulations.",
    },
    {
      title: "How long will it take to obtain the Morcellement Permit?",
      desc: "For the issuance of a Letter of Intent: A minimum of 10 to 12 weeks if all the documents are in order and the application is recommended by the stakeholders and approved by the Minister. Thereafter, the applicant will have a time frame of three years for the submission of clearances as per the Letter of Intent.",
    },
    {
      title: "How often are Board Meetings held?",
      desc: "Every two (2) weeks.",
    },
    {
      title: "Is withdrawal of an application possible?",
      desc: "An application can be requested to be withdrawn by an applicant, subject to valid justifications, provided in a letter or email that has been signed by all the owners. No processing fee will be refunded upon withdrawal.",
    },
    {
      title: "Plans - Dimensions",
      desc: "All plans to be submitted with the application for subdivision/excision that are larger than A3 should be submitted in hardcopies (14 originals and 15 copies) and should be submitted in autocad on DVD.",
    },
    {
      title: "Plans - Requirements",
      desc: "All plans to be submitted with the application for subdivision/excision should be DRAWN TO SCALE.",
    },
    {
      title: "Which fees do I have to pay at the Morcellement Unit?",
      desc: "A processing fee at the time of application and a Morcellement fee prior to receiving the Morcellement Permit. The fees are available in the guideline.",
    },
    {
      title: "Why do I have to pay Wastewater Management Authority fees?",
      desc: "Payment is mandatory as per S25 of the Wastewater Management Authority Act 2000",
    },
  ];

  const dataMid = [
    {
      title: "Cash office opening Hours",
      desc: "The Cash Office of the Ministry of Housing and Lands, which is located on the second floor of the Ebene Tower, is open from 08:45-14:30 during weekdays.",
    },
    {
      title: "What do I do after I receive the Morcellement Permit?",
      desc: "After receipt of the Morcellement Permit, you should apply for a PIN Certificate at the Cadastre Unit and contact your surveyor for a survey report and thereafter a Notary for obtention of a title deed.",
    },
    {
      title: "What is the purpose of the Morcellement Unit?.",
      desc: "the Morcellement Unit is mainly responsible for processing of applications for morcellement, i.e. the division of a plot of land into two or more lots and the excision of land",
    },
    {
      title: "Who should sign the application form?",
      desc: "The application form being online, the applicant should upload an authorisation letter, duly signed by all owners, giving permission to a third party or one of the owners to apply on their behalf.",
    },
  ];

  const [activeTab, setActiveTab] = useState("FAQs");
  const [openIndex, setOpenIndex] = useState([]);

  const tabDataMap = {
    FAQs: data,
    "Did You Know": dataMid,
  };

  const currentData = tabDataMap[activeTab];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setOpenIndex([]); // reset accordion when tab changes
  };

  const handleClick = (index) => {
    setOpenIndex(
      (prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index) // close this one
          : [...prev, index], // open this one
    );
  };

  return (
    <div
      className={`md:max-w-[69rem] mx-auto space-y-3 mt-12 ${activeTab === "Did You Know" ? "mb-[72px]" : "mb-14"}`}
    >
      {/* Top Tabs */}
      <div className="flex justify-center relative">
        <div className="block md:inline-flex border border-[#3a7ab5] rounded-sm overflow-hidden">
          {["FAQs", "Did You Know", "Notices"].map((tab, index, arr) => (
            <button
              key={tab}
              onClick={() => handleTabClick(tab)}
              className={`px-7 py-1.5 relative cursor-pointer
                ${
                  activeTab === tab
                    ? "bg-[#3a7ab5] text-white"
                    : "bg-white text-[#3a7ab5]"
                }
                ${index !== arr.length - 1 ? "border-r border-[#3a7ab5]" : ""}
              `}
            >
              {tab}
            </button>
          ))}
          <div className="absolute md:right-0 md:top-1 top-11 right-2">
            <p
              onClick={() =>
                window.open(
                  "https://edbmauritius.atlassian.net/servicedesk/customer/portal/4/user/login?destination=portal%2F4",
                  "_blank",
                )
              }
              className=" ml-8 text-[15px] font-sans text-[#3a7ab5] underline"
            >
              Request NELS Helpdesk Support
            </p>
          </div>
        </div>
      </div>
      <div className="md:mt-0 mt-10 mx-3">
        {currentData && (
          <div>
            <h2 className="text-[22px] font-[Arial] font-bold mb-1 text-[#1f1f1f]">
              Morcellement Permit
            </h2>
            {currentData.map((item, index) => {
              const isOpen = openIndex.includes(index);

              return (
                <div
                  key={index}
                  className="border border-gray-300 rounded mb-5"
                >
                  {/* Clickable Header */}
                  <div
                    onClick={() => handleClick(index)}
                    className="cursor-pointer flex justify-between items-center px-4 py-1.5 bg-[#f8f9fa]"
                  >
                    <span
                      className={`font-semibold text-[16px] ${
                        isOpen ? "text-[#3a7ab5]" : "text-[#8d8888]"
                      }`}
                    >
                      {item.title}
                    </span>
                    <span>
                      <FaChevronDown
                        className={`text-lg text-[#8d8888] ${
                          isOpen ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </span>
                  </div>

                  {/* Content */}
                  <div
                    className={`transition-all duration-500 ease-in-out overflow-hidden
                  ${isOpen ? "max-h-40" : "max-h-0"}
                `}
                  >
                    <p className="px-4 py-5 text-[13px] bg-white">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {activeTab === "Notices" && (
          <div className="mt-10 mb-[156px]">
            <h3 className="text-[23px] font-bold text-black leading-tight hover:text-[#3a7ab5] hover:underline cursor-pointer">
              Supported Browsers
            </h3>

            <p className="text-xs mt-[2px]">December 27, 2018</p>
            <a href="#" className="text-[#3a7ab5] underline inline-block mt-6">
              Read More
            </a>
            {/* Pagination */}
            <div>
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
        )}
      </div>
    </div>
  );
}

export default FaqsAndNotice;
