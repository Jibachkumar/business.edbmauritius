import { useState, useEffect } from "react";
import { fetchPermit } from "../components/apis/permitApi.js";
import { useParams } from "react-router-dom";

function ViewPermit() {
  const { id } = useParams();
  console.log(id);
  const [error, setError] = useState("");
  const [permitData, setPermitData] = useState([]);

  const loadPermit = async () => {
    setError("");
    try {
      const data = await fetchPermit(id);
      console.log(data);
      if (data) {
        setPermitData([data.permit]);
      }
    } catch (error) {
      console.log(error);
      setError(error);
    }
  };

  useEffect(() => {
    if (id) {
      loadPermit();
    }
  }, [id]);

  const formatDate = (dateString) => {
    if (!dateString) return "";

    const date = new Date(dateString);

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  };

  return (
    <div className="max-w-6xl h-[455px] overflow-y-auto overflow-x-auto mx-auto px-3 py-6">
      {error && <p className="text-red-700">{error}</p>}
      {permitData.length > 0 && (
        <div className="border border-slate-100 w-md md:w-xl lg:w-5xl mx-auto rounded-md overflow-hidden">
          {permitData.map((data) => (
            <div key={data._id}>
              <div className="border-b bg-slate-50 border-slate-300 px-4 py-2 sm:flex-row sm:items-center sm:justify-between">
                <h2 className="font-semibold font-[Arial] text-slate-800 text-sm text-center sm:text-md">
                  Ministry of Labour and Industrial Relations
                </h2>
                <div className="md:flex lg:gap-[440px] mb-2 mt-2 font-[Arial]">
                  <p className="font-semibold text-sm text-slate-800">
                    Permit Number: {data.permitNumber}
                  </p>
                  <p className="text-sm py-1 font-semibold">
                    Status: <span className="text-green-700">Active</span>{" "}
                  </p>
                </div>
              </div>

              <div className="px-2 mt-2 pb-6">
                <div className="flex gap-x-6 font-[Arial]">
                  {/* 📄 Details — BELOW image on mobile, LEFT on desktop */}
                  <div className=" md:text-left grid gap-y-2 text-sm">
                    <div className="flex flex-col justify-center">
                      <div>
                        <span className="font-semibold text-slate-800">
                          Surname:
                        </span>{" "}
                        {data.surname.toUpperCase()}
                      </div>
                      {data.middleName && (
                        <div>
                          <span className="font-semibold text-slate-800">
                            Middle Name:
                          </span>{" "}
                          {data.middleName.charAt(0).toUpperCase() +
                            data.middleName.slice(1)}
                        </div>
                      )}
                      <div>
                        <span className="font-semibold text-slate-800">
                          First Name:
                        </span>{" "}
                        {data.firstName.charAt(0).toUpperCase() +
                          data.firstName.slice(1)}
                      </div>
                      <div>
                        <span className="font-semibold text-slate-800">
                          Nationality:
                        </span>{" "}
                        Nepalese
                      </div>
                    </div>
                  </div>
                  {/* 🖼 Image — TOP on mobile, RIGHT on desktop */}
                  <div className=" w-32 h-32 bg-slate-200 rounded-lg flex items-center justify-center text-xs text-slate-500 md:mx-0">
                    <img
                      src={data.profileImage.url}
                      alt="identity"
                      className="w-full h-full object-fit shadow"
                    />
                  </div>
                </div>
                <div className="mt-2 font-[Arial]">
                  <div className=" text-sm">
                    <span className="font-semibold text-slate-800">
                      Name of Employer:
                    </span>{" "}
                    {data.company}
                  </div>
                  <div className=" text-sm">
                    <span className="font-semibold text-slate-800">
                      Post Held:
                    </span>{" "}
                    {data.postHeld}
                  </div>
                </div>
                <div className="flex md:gap-3 mt-2 font-[Arial]">
                  <div className="text-sm">
                    <div>
                      <span className="font-semibold text-slate-800">
                        Passport Number:
                      </span>{" "}
                      {data.passwortNumber}
                    </div>
                    <div>
                      <span className="font-semibold text-slate-800">
                        Gender:
                      </span>{" "}
                      {data.gender.charAt(0).toUpperCase() +
                        data.gender.slice(1)}
                    </div>
                  </div>
                  <div className="text-sm font-[Arial]">
                    <div>
                      <span className="font-semibold text-slate-800">
                        Date of Birth:
                      </span>{" "}
                      {formatDate(data.birthDate)}
                    </div>
                    <div>
                      <span className="font-semibold text-slate-800">
                        Validity:
                      </span>{" "}
                      {formatDate(data.validityStart)}{" "}
                      <span className="font-semibold text-slate-800">To</span>{" "}
                      {formatDate(data.validityEnd)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="px-4 pb-8">
            <h3 className="font-semibold mb-2">Conditions</h3>
            <ol className="list-decimal font-[Arial] ml-1 space-y-1 text-[13px] text-black/95 leading-tight text-justify justified-text break-words">
              <li>This permit is valid for the period indicated above.</li>
              <li>
                This permit is personal to the holder and is not transferable.
              </li>
              <li>
                The holder is NOT permitted to seek or accept alternative
                employment while in Mauritius or to engage in any trade, art or
                gainful occupation.
              </li>
              <li>
                This permit shall be kept by the holder and produced to any
                authorised person on demand or within three days after demand at
                such Police Station as may be specified by the authorised person
                at the time of the demand.
              </li>
              <li>
                The Minister for Employment may, at any time, vary or cancel
                this permit.
              </li>
              <li>
                In the event of any change of circumstances affecting the
                accuracy of particulars submitted at the time of applying for
                this permit, the holder shall, within fifteen days, notify
                particulars of such change to the Minister for Employment.
              </li>
            </ol>
          </div>
        </div>
      )}
    </div>
  );
}

export default ViewPermit;
