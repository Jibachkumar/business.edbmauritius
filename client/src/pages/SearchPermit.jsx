import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/light.css";

function SearchPermit() {
  return (
    <div className="w-full mt-3 px-4 md:mb-[233px] mb-40">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h2 className="text-lg font-bold text-gray-900 font-[Arial] mb-5">
          Enter the details of the permit you are looking for
        </h2>

        {/* Form */}
        <form className="grid grid-cols-1 md:grid-cols-3 md:gap-6 gap-4 md:ml-3 md:mr-24 mr-36">
          {/* Permit Number */}
          <div className="flex flex-col">
            <label className="text-xs font-medium text-gray-800 mb-1">
              Permit Number
            </label>
            <input
              type="text"
              placeholder="Insert the permit number"
              className="px-2 py-1.5 text-sm border border-gray-300 rounded-sm focus:ring-1 focus:ring-blue-500 focus:outline-none transition"
            />
          </div>

          {/* Issued Date */}
          <div className="flex flex-col">
            <label className="text-xs font-medium text-gray-800 mb-1">
              Issued Date
            </label>
            <div className="relative">
              <Flatpickr
                options={{
                  dateFormat: "Y-m-d",
                  allowInput: true,
                  onOpen: (selectedDates, dateStr, instance) => {
                    const calendar = instance.calendarContainer;

                    // Set popup width
                    calendar.style.width = "300px";

                    // Reduce the day size and spacing
                    const days = calendar.querySelectorAll(".flatpickr-day");
                    days.forEach((day) => {
                      day.style.height = "25px"; // smaller height
                      day.style.lineHeight = "20px"; // vertical align center
                      day.style.margin = "1px"; // gap between days
                      day.style.padding = "0"; // remove extra padding
                    });
                  },
                }}
                placeholder="Select a Date"
                className="w-full px-2 py-1.5 text-sm border border-gray-300 rounded-sm focus:ring focus:ring-blue-500 focus:outline-none pr-10"
              />

              {/* Calendar Icon */}
              <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                <i class="fa-solid fa-calendar-days"></i>
              </div>
            </div>
          </div>

          {/* Permit Holder */}
          <div className="flex flex-col">
            <label className="text-xs font-medium text-gray-800 mb-1">
              Permit Holder
            </label>
            <input
              type="text"
              placeholder="Insert the permit holder name"
              className="px-4 py-1.5 text-sm border border-gray-300 rounded-sm focus:ring-1 focus:ring-blue-500 focus:outline-none transition"
            />
          </div>
        </form>

        {/* Button */}
        <div className="mt-10 md:ml-3">
          <button
            type="submit"
            className="px-3 py-1.5 border text-slate-400 font-semibold border-blue-300 rounded-sm hover:bg-blue-700 transition duration-300 shadow-sm"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchPermit;
