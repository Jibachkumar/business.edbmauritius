import React from 'react'

function Home() {
  return (
    <div className="w-full mx-auto md:max-w-[68rem] ">
        <div className=" w-full mx-auto mt-20 h-[300px] text-white bg-[rgb(249,197,70)] bg-no-repeat  bg-[center_bottom]"
            style={{
                backgroundImage:
                "url('https://business.edbmauritius.org/wps/wcm/connect/business/550a4771-b2f4-41c7-bbf7-6ca08dd2ae1b/mountains.svg?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_IA161OC0OOVAC0Q4TMNE2N3G33-550a4771-b2f4-41c7-bbf7-6ca08dd2ae1b-m9Jhkgm')",
            }}
        >         
            <h2 className="text-center text-2xl md:text-3xl w-md md:w-full pt-7 font-light">Welcome to the National Electronic Licensing System of Mauritius</h2>
            <div className="flex justify-center pt-16">
                <button className="bg-[#3a7ab5] py-2 px-6 rounded-sm">Apply for permit</button>
            </div>
            <div className="flex mx-auto md:pt-[67px] pt-[40px] relative md:w-lg w-[275px]">
                <input type="text" placeholder="Search license plateform" className="bg-white w-full py-[7px] rounded-sm border border-[#ccc] hover:border-[#3a7ab5] focus:outline-none focus:border-[#3a7ab5] placeholder-slate-500 pl-3 text-sslate-400 text-[15px] font-light"/>
                <button className="absolute right-0 bg-[#3a7ab5] text-center py-[7px] md:px-7 px-5 rounded-sm  hover:bg-[#3a7ab5]">search</button>
            </div>
        </div>

        <div className="h-[300px] mt-4 relative">
            <img src="https://business.edbmauritius.org/wps/wcm/connect/business/97dc413c-4d10-4e11-b4eb-79a7b0c73ba2/caudan.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_IA161OC0OOVAC0Q4TMNE2N3G33-97dc413c-4d10-4e11-b4eb-79a7b0c73ba2-mh5WuXi" alt="" className="w-full h-full object-cover"/>
            <h1 className="absolute z-10 top-1 left-12 text-white text-[21px]">Mauritius Business Licensing Platform</h1>
        </div>

        <div className="mt-4 grid grid-cols-1 sm:gap-x-3 gap-3 sm:grid-cols-4 w-full h-full text-white">
            <div className="bg-[rgb(241,104,86)] h-[85px] md:h-[250px] pl-[18px] pt-[3px]">
                <h1 className="text-[26px] font-light">Agencies</h1>
                <p className="text-sm font-light mt-2">Browse permits by agency</p>
            </div>
            <div className="bg-[rgb(87,92,112)] h-[85px] md:h-[250px] pl-[18px] pt-[4px]">
                <h1 className="text-[26px] font-light">Permits</h1>
                <p className="text-sm font-light mt-2">Browse permits by category</p>
            </div>
            <div className="bg-[rgb(249,197,70)] h-[230px] md:h-[250px] pl-[18px] pt-[5px]">
                <h1 className="text-[26px] font-light">News</h1>
                <p className="text-sm font-light mt-3">Morecellement Board</p>
                <p className="text-sm font-light mt-4">News & Events</p>
            </div>
            <div className="bg-[rgb(38,152,113)] h-[230px] md:h-[250px] pl-[20px] pt-[10px]">
                <h1 className="text-[26px] font-light">Notices</h1>
                <p className="text-sm font-light mt-3">Support Browsers</p>
            </div>
        </div>

    </div>
  )
}

export default Home