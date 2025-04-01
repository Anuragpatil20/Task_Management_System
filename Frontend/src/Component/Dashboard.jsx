import React, { useState } from "react";

function Dashboard() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <nav className="px-5 pt-5 flex justify-between md:justify-around items-center relative shadow pb-4 bg-gray-800 text-white">
        <img
          className="w-10"
          src="https://upload.wikimedia.org/wikipedia/en/thumb/b/bd/Reddit_Logo_Icon.svg/220px-Reddit_Logo_Icon.svg.png"
          alt="Logo"
        />

        {/* Toggle Button */}
        <button onClick={() => setOpen(!open)} className="md:hidden focus:outline-none text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a className="hover:text-blue-500 hover:underline" href="/user"></a>
       
        </div>

        <div className="hidden md:flex space-x-4">
          <a className="rounded-xl p-3 bg-blue-500 hover:bg-white hover:text-blue-500 underline"  href="/user">Task_Managemen</a>
          <a className="rounded-xl p-3 border-2 border-white hover:bg-white hover:text-black" href="/talk">Let's talk</a>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="absolute top-full left-0 w-full bg-gray-800 lg:hidden flex flex-col items-center py-5 space-y-4">
            <a className="hover:text-blue-500 hover:underline" href="/">Home</a>
            <a className="hover:text-blue-500 hover:underline" href="/services">Services</a>
            <a className="hover:text-blue-500 hover:underline" href="/project">Project</a>
            <a className="hover:text-blue-500 hover:underline" href="/about-us">About us</a>
            <a className="rounded-xl p-3 bg-blue-500 hover:bg-white hover:text-blue-500" href="/started">Get Started</a>
            <a className="rounded-xl p-3 border-2 border-white hover:bg-white hover:text-black" href="/talk">Let's talk</a>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Dashboard;
