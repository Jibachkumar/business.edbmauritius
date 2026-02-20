import { useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

export default function Licensing() {
  const [openCategory, setOpenCategory] = useState("");
  const [activeTab, setActiveTab] = useState("Category");

  const categories = [
    {
      name: "Construction and Land Development",
      permits: [
        {
          title: "Building and Land Use Permit",
          subtitles: ["Legislation and useful information"],
        },
        {
          title: "Land Conversion Permit",
          subtitles: ["Legislation and useful information"],
        },
        {
          title: "Morcellement Permit",
          subtitles: ["Permit requirements and forms"],
        },
      ],
    },
    {
      name: "Education",
      permits: [
        {
          title: "MQA - Authorisation of Change for Training Institution",
          subtitles: [
            "Legislation and useful information",
            "List of Registered Training Institution",
          ],
        },
        {
          title: "MQA - New Registration for Training Institution",
          subtitles: [
            "Legislation and useful information",
            "List of Registered Training Institution",
          ],
        },
        {
          title: "MQA - Renewal of Registration for Training Institution",
          subtitles: [
            "Legislation and useful information",
            "List of Registered Training Institution",
          ],
        },
      ],
    },
    {
      name: "Environment",
      permits: [
        {
          title: "Environment Impact Assessment (EIA) Licence",
          subtitles: [
            "Legislation and useful information",
            "EIA Report Decision on EIA Applications",
          ],
        },
        {
          title: "Preliminary Environment Report (PER) Approval",
          subtitles: [
            "Legislation and useful information",
            "PER Report Decision on PER Applications",
          ],
        },
      ],
    },
    {
      name: "Health",
      permits: [
        {
          title: "DCCB - License to trade In Dangerous Chemicals",
          subtitles: ["Legislation and useful information"],
        },
        {
          title: "DCCB - Registration of Extremely Dangerous Chemical",
          subtitles: ["Legislation and useful information"],
        },
      ],
    },
    {
      name: "Manufacturing",
      permits: [
        {
          title: "Excise License",
          subtitles: ["Legislation and useful information"],
        },
      ],
    },
    {
      name: "Safety",
      permits: [
        {
          title: "Fire Certificate",
          subtitles: ["Legislation and useful information"],
        },
        {
          title: "Fire Safety Plan",
          subtitles: ["Legislation and useful information"],
        },
      ],
    },
    {
      name: "Schemes",
      permits: [
        {
          title: "Film Rebate Scheme - Mauritius",
          subtitles: ["Legislation and useful information"],
        },
        {
          title: "Freight Rebate Scheme",
          subtitles: ["Legislation and useful information"],
        },
        {
          title: "Support for Trade Promotion and Marketing Scheme",
          subtitles: ["Legislation and useful information"],
        },
        {
          title: "Support for Trade Promotion and Marketing Scheme - Agro",
          subtitles: ["Legislation and useful information"],
        },
      ],
    },
    {
      name: "Tourism",
      permits: [
        {
          title: "Pleasure Craft Licence",
          subtitles: ["Legislation and useful information"],
        },
      ],
    },
    {
      name: "Work & Live",
      permits: [
        {
          title: "Dependent - Occupation Permit",
          subtitles: ["Legislation and useful information"],
        },
        {
          title: "Occupation/Residence Permit",
          subtitles: ["Legislation and useful information"],
        },
        {
          title: "Premium Visa",
          subtitles: ["Legislation and useful information"],
        },
        {
          title: "Request for Skilled Workers from India",
          subtitles: ["Legislation and useful information"],
        },
        {
          title: "Work Permit",
          subtitles: ["Legislation and useful information"],
        },
      ],
    },
  ];

  const agencies = [
    {
      name: "Early Childhood Care and Education Authority",
      permits: [
        {
          title: "Per Capita Grant Claim",
          subtitles: ["Legislation and useful information"],
        },
      ],
    },
    {
      name: "Economic Development Board",
      permits: [
        {
          title: "Film Rebate Scheme - Mauritius",
          subtitles: ["Legislation and useful information"],
        },
        {
          title: "Freight Rebate Scheme",
          subtitles: ["Legislation and useful information"],
        },
        {
          title: "Occupation/Residence Permit",
          subtitles: ["Permit requirements and useful information"],
        },
        {
          title: "Request for Skilled Workers from India",
          subtitles: ["Permit requirements and useful information"],
        },
        {
          title: "Support for Trade Promotion and Marketing Scheme",
          subtitles: ["Permit requirements and useful information"],
        },
        {
          title: "Support for Trade Promotion and Marketing Scheme - Agro",
          subtitles: ["Permit requirements and useful information"],
        },
      ],
    },
    {
      name: "Local Authorities",
      permits: [
        {
          title: "Building and Land Use Permit",
          subtitles: ["Legislation and useful information"],
        },
        {
          title: "Occupation Certificate",
          subtitles: ["Legislation and useful information"],
        },
      ],
    },
    {
      name: "Mauritius Fire and Rescue Service",
      permits: [
        {
          title: "Fire Certificate",
          subtitles: ["Legislation and useful information"],
        },
        {
          title: "Fire Safety Plan",
          subtitles: ["Legislation and useful information"],
        },
      ],
    },
    {
      name: "Mauritius Qualifications Authority",
      permits: [
        {
          title: "MQA - Authorisation of Change for Training Institution",
          subtitles: ["Legislation and useful information"],
        },
        {
          title: "MQA - New Registration for Training Institution",
          subtitles: ["Legislation and useful information"],
        },
        {
          title: "MQA - Renewal of Registration for Training Institution",
          subtitles: ["Legislation and useful information"],
        },
      ],
    },
    {
      name: "Mauritius Revenue Authority",
      permits: [
        {
          title: "Excise License",
          subtitles: ["Legislation and useful information"],
        },
      ],
    },
    {
      name: "Ministry of Agro-Industry, Food Security, Blue Economy and Fisheries",
      permits: [
        {
          title: "Land Conversion Permit",
          subtitles: ["Legislation and useful information"],
        },
      ],
    },
    {
      name: "Ministry of Environment, Solid Waste Management and Climate Change",
      permits: [
        {
          title: "Environment Impact Assessment (EIA) Licence",
          subtitles: [
            "Legislation and useful information",
            "EIA Report",
            "Decision on EIA Applications",
          ],
        },
        {
          title: "Preliminary Environment Report (PER) Approval",
          subtitles: [
            "Legislation and useful information",
            "PER Report",
            "Decision on PER Applications",
          ],
        },
      ],
    },
    {
      name: "Ministry of Health and Wellness",
      permits: [
        {
          title: "DCCB - License to trade In Dangerous Chemicals",
          subtitles: ["Legislation and useful information"],
        },
        {
          title: "DCCB - Registration of Extremely Dangerous Chemical",
          subtitles: ["Legislation and useful information"],
        },
      ],
    },
    {
      name: "Ministry of Housing and Lands",
      permits: [
        {
          title: "Morcellement Permit",
          subtitles: ["Legislation and useful information"],
        },
        {
          title: "Property Acquisition",
          subtitles: ["Legislation and useful information"],
        },
      ],
    },
    {
      name: "Ministry of Labour and Industrial Relations",
      permits: [
        {
          title: "Work Permit",
          subtitles: ["Legislation and useful information"],
        },
      ],
    },
    {
      name: "Passport and Immigration Office",
      permits: [
        {
          title: "Dependent - Occupation Permit",
          subtitles: ["Legislation and useful information"],
        },
        {
          title: "Premium Visa",
          subtitles: ["Legislation and useful information"],
        },
      ],
    },
    {
      name: "Tourism Authority",
      permits: [
        {
          title: "Pleasure Craft Licence",
          subtitles: ["Legislation and useful information"],
        },
      ],
    },
  ];

  return (
    <div className="px-1 pt-10">
      <div className="max-w-[68rem] mx-auto">
        {/* Title + Tabs */}
        <div className="md:flex items-center gap-68 mb-8">
          <h1 className="text-3xl">Permits</h1>

          <div className="w-[205px] mt-2 md:mt-0 flex border border-[#2f6fa3] rounded overflow-hidden ">
            <button
              onClick={() => setActiveTab("Category")}
              className={`px-6 py-2 text-sm w-full transition-all duration-300 cursor-pointer
              ${
                activeTab === "Category"
                  ? "bg-[#2f6fa3] text-white"
                  : "bg-white text-[#2f6fa3]"
              }`}
            >
              Category
            </button>

            <button
              onClick={() => setActiveTab("Agency")}
              className={`px-6 py-2 text-sm w-full transition-all duration-300 cursor-pointer
              ${
                activeTab === "Agency"
                  ? "bg-[#2f6fa3] text-white"
                  : "bg-white text-[#2f6fa3]"
              }`}
            >
              Agency
            </button>
          </div>
        </div>

        {/* Category Section */}
        {activeTab === "Category" &&
          categories.map((category) => {
            const isOpen = openCategory === category.name;

            return (
              <div key={category.name} className={isOpen ? "mb-5" : ""}>
                <div
                  onClick={() => setOpenCategory(isOpen ? null : category.name)}
                  className="flex items-center gap-2 cursor-pointer font-[Arial] text-[#2f6fa3] font-semibold mb-3"
                >
                  {isOpen ? (
                    <i className="fa-solid fa-caret-down text-xl text-black"></i>
                  ) : (
                    <i className="fa-solid fa-caret-right text-xl text-black"></i>
                  )}
                  <span
                    className={`font-bold text-sm hover:underline ${isOpen ? "underline" : ""}`}
                  >
                    {category.name}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <div className="flex items-center gap-2 cursor-pointer text-[#2f6fa3] font-semibold ">
                    {isOpen && (
                      <div className="space-y-3 w-full border-b font-[Arial] border-black pb-5">
                        {category.permits.map((permit) => (
                          <div
                            key={permit.title}
                            className="flex justify-between md:w-[27rem] items-start"
                          >
                            <div>
                              <p className="font-bold text-slate-900 font-[Arial] text-[12px]">
                                {permit.title}
                              </p>
                              {permit.subtitles?.map((sub, index) => (
                                <p
                                  key={index}
                                  className="text-xs text-[#2f6fa3] font-[Arial]"
                                >
                                  {sub}
                                </p>
                              ))}
                            </div>

                            <button className="border border-[#2f6fa3] text-[#2f6fa3] px-6 py-1 text-sm rounded hover:bg-[#2f6fa3] hover:text-white transition">
                              APPLY
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}

        {/* Agency Section */}
        {activeTab === "Agency" &&
          agencies.map((category) => {
            const isOpen = openCategory === category.name;

            return (
              <div key={category.name} className={isOpen ? "mb-5" : ""}>
                <div
                  onClick={() => setOpenCategory(isOpen ? null : category.name)}
                  className="flex items-center gap-2 cursor-pointer font-[Arial] text-[#2f6fa3] font-semibold mb-3"
                >
                  {isOpen ? (
                    <i className="fa-solid fa-caret-down text-xl text-black"></i>
                  ) : (
                    <i className="fa-solid fa-caret-right text-xl text-black"></i>
                  )}
                  <span
                    className={`font-bold text-sm hover:underline ${isOpen ? "underline" : ""}`}
                  >
                    {category.name}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <div className="flex items-center gap-2 cursor-pointer text-[#2f6fa3] font-semibold font-[Arial]">
                    {isOpen && (
                      <div className="space-y-3 w-full border-b border-black pb-5">
                        {category.permits.map((permit) => (
                          <div
                            key={permit.title}
                            className="flex justify-between md:w-[27rem] items-start"
                          >
                            <div>
                              <p className="font-bold text-slate-800 text-[12px]">
                                {permit.title}
                              </p>
                              {permit.subtitles?.map((sub, index) => (
                                <p
                                  key={index}
                                  className="text-xs text-[#2f6fa3]"
                                >
                                  {sub}
                                </p>
                              ))}
                            </div>

                            <button className="border border-[#2f6fa3] text-[#2f6fa3] px-6 py-1 text-sm rounded hover:bg-[#2f6fa3] hover:text-white transition">
                              APPLY
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
