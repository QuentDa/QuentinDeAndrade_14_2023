import "./Header.css";
import { NavLink, useLocation } from "react-router-dom";

export default function Header() {
    const location = useLocation();
  
    return (
      <header className="header flex flex-col items-center justify-center gap-20 text-center xl:w-1/3 xl:h-screen bg-emerald-400 text-white">
        <h1 className="mb-4 text-5xl font-extrabold tracking-tight">HRnet</h1>
        <h2 className="mb-4 text-2xl opacity-80 xl:w-4/5">Welcome to your dashboard. You are currently logged in as an admin and are allowed to view the current employees in the system, and create new employees as well.</h2>
        {location.pathname === "/" ? (
          <NavLink className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" to="/employees" end>
            View Current Employees
          </NavLink>
        ) : (
          <NavLink className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" to="/">Add an Employee</NavLink>
        )}
      </header>
    );
  }