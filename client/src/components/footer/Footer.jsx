import { FaChevronDown } from "react-icons/fa";
import { useState } from "react";

function Footer() {
  const [open, setOpen] = useState(false);
  const [legOpen, setLegOpen] = useState(false);
  const [mauritius, setMauritius] = useState(false);
  const [media, setMedia] = useState(false);
  const [links, setLinks] = useState(false);
  const [privacy, setPrivacy] = useState(false);
  const [terms, setTerms] = useState(false);
  const [communiques, setcommuniques] = useState(false);
  return (
    <footer
      className={`bg-[#444141] relative text-white mt-9 text-sm overflow-hidden`}
    >
      <div
        className={`md:w-7xl md:mx-auto px-4 py-5 grid mx-auto md:grid-cols-6 gap-x-5`}
      >
        <div className={`border-b md:border-none border-white pb-3 mt-1`}>
          <img
            src="https://business.edbmauritius.org/wps/wcm/connect/business/868397c6-fa4f-4eed-af98-f1e4cc2a9b84/ISO-IEC-27001-2022+Red.png?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_IA161OC0OOVAC0Q4TMNE2N3G33-868397c6-fa4f-4eed-af98-f1e4cc2a9b84-oW.sh28"
            alt="ftrlogo"
            className="w-[85px] h-24 hidden md:block"
          />
          <h2 className="hidden md:block">sucess story</h2>
          <h1
            className="hover:underline cursor-pointer"
            onClick={() =>
              window.open("https://govmu.org/EN/Pages/default.aspx", "_blank")
            }
          >
            Helpdesk contact
          </h1>
          <h1
            className="md:hidden hover:underline cursor-pointer"
            onClick={() =>
              window.open("https://govmu.org/EN/Pages/default.aspx", "_blank")
            }
          >
            nels@edbmauritius.org
          </h1>
          <button className="hidden md:block">click here</button>
        </div>

        {/* GOVERNMENT DIRECTORY */}
        <div
          className="border-b py-1 md:border-none border-white relative"
          onClick={() => setOpen(!open)}
        >
          <div className="flex justify-between pb-1">
            <h4 className="text-[15px] font-normal text-white hover:underline cursor-pointer">
              Government Directory
            </h4>
            <div
              className={`block md:hidden cursor-pointer ${
                open ? "rotate-180" : ""
              }`}
            >
              <i className="fa-solid fa-caret-down text-xl"></i>
            </div>
          </div>
          <ul
            className={`font-inter transition-all duration-300 ease-in-out ${open ? "block " : "hidden"} md:block `}
          >
            <li
              className="hover:underline cursor-pointer p-0 m-0 leading-none"
              onClick={() =>
                window.open("https://govmu.org/EN/Pages/default.aspx", "_blank")
              }
            >
              Ministries
            </li>
            <li
              className="hover:underline cursor-pointer p-0 m-0 leading-none"
              onClick={() =>
                window.open("https://govmu.org/EN/Pages/default.aspx", "_blank")
              }
            >
              Departments
            </li>
            <li
              className="hover:underline cursor-pointer p-0 m-0 leading-none"
              onClick={() =>
                window.open("https://govmu.org/EN/Pages/default.aspx", "_blank")
              }
            >
              Parastatal Organisations
            </li>
            <li
              className="hover:underline cursor-pointer p-0 m-0 leading-none"
              onClick={() =>
                window.open("https://govmu.org/EN/Pages/default.aspx", "_blank")
              }
            >
              Other Bodies
            </li>
          </ul>
        </div>

        {/* Justice & Defence */}
        <div
          className="border-b py-1 md:border-none border-white"
          onClick={() => setLegOpen(!legOpen)}
        >
          <div className="flex justify-between pb-1">
            <h4 className="text-[15px] font-normal mb-1 text-white hover:underline cursor-pointer">
              Legislations
            </h4>
            <div
              className={`block md:hidden cursor-pointer ${
                legOpen ? "rotate-180" : ""
              }`}
            >
              <i className="fa-sharp fa-solid fa-caret-down text-xl"></i>
            </div>
          </div>
          <ul
            className={`space-y-1 transition-all duration-300 ${legOpen ? "block " : "hidden"} md:block `}
          >
            <li
              className="hover:underline cursor-pointer md:block"
              onClick={() =>
                window.open("https://govmu.org/EN/Pages/default.aspx", "_blank")
              }
            >
              Justice & Defence
            </li>
          </ul>
        </div>

        {/* Explore Mauritius */}
        <div
          className="border-b md:border-none border-white py-1"
          onClick={() => setMauritius(!mauritius)}
        >
          <div className="flex justify-between pb-1">
            <h4 className="text-[15px] font-normal mb-1 text-white hover:underline cursor-pointer">
              Explore Mauritius
            </h4>
            <div
              className={`block md:hidden cursor-pointer ${
                mauritius ? "rotate-180" : ""
              }`}
            >
              <i className="fa-sharp fa-solid fa-caret-down text-xl"></i>
            </div>
          </div>
          <ul
            className={`space-y-1 ${mauritius ? "block " : "hidden"} md:block `}
          >
            <li
              className="hover:underline cursor-pointer md:block"
              onClick={() =>
                window.open("https://govmu.org/EN/Pages/default.aspx", "_blank")
              }
            >
              History
            </li>
          </ul>
        </div>

        {/* media */}
        <div
          className="border-b md:border-none border-white py-1"
          onClick={() => setMedia(!media)}
        >
          <div className=" flex justify-between pb-1">
            <h4 className="text-[15px] font-normal mb-1 text-white hover:underline cursor-pointer">
              Media
            </h4>
            <div
              className={`block md:hidden cursor-pointer ${
                media ? "rotate-180" : ""
              }`}
            >
              <i className="fa-sharp fa-solid fa-caret-down text-xl"></i>
            </div>
          </div>
          <ul className={`space-y-1 ${media ? "block " : "hidden"} md:block `}>
            <li
              className="hover:underline cursor-pointer md:block"
              onClick={() =>
                window.open("https://govmu.org/EN/Pages/default.aspx", "_blank")
              }
            >
              Communiques
            </li>
          </ul>
        </div>

        {/* Links */}
        <div
          className="border-b md:border-none border-white py-1"
          onClick={() => setLinks(!links)}
        >
          <div className="flex justify-between pb-1">
            <h4 className="text-[15px] font-normal mb-1 text-white hover:underline cursor-pointer">
              Other Links
            </h4>
            <div
              className={`block md:hidden cursor-pointer ${
                links ? "rotate-180" : ""
              }`}
            >
              <i className="fa-sharp fa-solid fa-caret-down text-xl"></i>
            </div>
          </div>
          <ul
            className={`space-y-1 font-normal ${links ? "block " : "hidden"} md:block `}
          >
            <li
              className="hover:underline cursor-pointer md:block m-0 p-0 leading-none"
              onClick={() =>
                window.open("https://govmu.org/EN/Pages/default.aspx", "_blank")
              }
            >
              News
            </li>
            <li
              className="hover:underline cursor-pointer m-0 p-0 leading-none"
              onClick={() =>
                window.open("https://govmu.org/EN/Pages/default.aspx", "_blank")
              }
            >
              E-Services
            </li>
            <li
              className="hover:underline cursor-pointer m-0 p-0 leading-none"
              onClick={() =>
                window.open("https://govmu.org/EN/Pages/default.aspx", "_blank")
              }
            >
              ISMS Policy
            </li>
            <li
              className="hover:underline cursor-pointer m-0 p-0 leading-none"
              onClick={() =>
                window.open("https://govmu.org/EN/Pages/default.aspx", "_blank")
              }
            >
              Supplier Relationship Policy
            </li>
            <li
              className="hover:underline cursor-pointer m-0 p-0 leading-none"
              onClick={() =>
                window.open("https://govmu.org/EN/Pages/default.aspx", "_blank")
              }
            >
              Terms of Use
            </li>
            <li
              className="hover:underline cursor-pointer m-0 p-0 leading-none"
              onClick={() =>
                window.open("https://govmu.org/EN/Pages/default.aspx", "_blank")
              }
            >
              Privacy Policy
            </li>
            <li
              className="hover:underline cursor-pointer m-0 p-0 leading-none"
              onClick={() =>
                window.open("https://govmu.org/EN/Pages/default.aspx", "_blank")
              }
            >
              Contact Us
            </li>
          </ul>
        </div>

        <div>
          {/* Privacy Statement */}
          <div
            className="md:hidden mt-9 pb-1 border-t border-b md:border-none border-white pt-1.5"
            onClick={() => setPrivacy(!privacy)}
          >
            <div className="flex justify-between">
              <h4 className="text-[15px] font-normal text-white cursor-pointer">
                Privacy Statement
              </h4>
              <div
                className={`block md:hidden cursor-pointer ${
                  privacy ? "rotate-180" : ""
                }`}
              >
                <i className="fa-sharp fa-solid fa-caret-down text-xl"></i>
              </div>
            </div>
            <ul className={`${privacy ? "block" : "hidden"} md:block `}>
              <li className="cursor-pointer md:block m-0 p-0 leading-none">
                Privacy Statement text
              </li>
            </ul>
          </div>

          {/* Terms of Use */}
          <div
            className="md:hidden border-b md:border-none border-white pt-1.5 pb-1"
            onClick={() => setTerms(!terms)}
          >
            <div className="flex justify-between">
              <h4 className="text-[15px] font-normal text-white cursor-pointer">
                Terms of Use
              </h4>
              <div
                className={`block md:hidden cursor-pointer ${
                  terms ? "rotate-180" : ""
                }`}
              >
                <i className="fa-sharp fa-solid fa-caret-down text-xl"></i>
              </div>
            </div>
            <ul className={`${terms ? "block " : "hidden"} md:block `}>
              <li className="cursor-pointer md:block m-0 p-0 leading-none">
                Communiques
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div
            className="md:hidden border-b md:border-none border-white pt-1.5 pb-1"
            onClick={() => setcommuniques(!communiques)}
          >
            <div className="flex justify-between">
              <h4 className="text-[15px] font-normal text-white cursor-pointer">
                Legal
              </h4>
              <div
                className={`block md:hidden cursor-pointer ${
                  communiques ? "rotate-180" : ""
                }`}
              >
                <i className="fa-sharp fa-solid fa-caret-down text-xl"></i>
              </div>
            </div>
            <ul className={`${communiques ? "block " : "hidden"} md:block `}>
              <li className="cursor-pointer md:block m-0 p-0 leading-none">
                Communiques
              </li>
            </ul>
          </div>
        </div>

        {/* logo */}
        <div className="md:hidden mt-6">
          <img
            src="https://business.edbmauritius.org/wps/wcm/connect/business/16d6872a-d40e-4e5b-a460-b9d792829d93/Coat+of+Arms+of+Mauritius.png?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_IA161OC0OOVAC0Q4TMNE2N3G33-16d6872a-d40e-4e5b-a460-b9d792829d93-mqNcSNq"
            alt="footerLogo"
            className="h-[60px] object-cover"
          />
          <h2 className="pl-20 text-md">Government of Maurities</h2>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
