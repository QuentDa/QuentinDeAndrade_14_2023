import "./Header.css";
import { NavLink, useLocation } from "react-router-dom";

export default function Header() {
    const location = useLocation();
  
    return (
      <header className="header flex items-center justify-between h-[130px] w-1/2 mx-auto">
        <h1 className="mb-4 text-5xl font-extrabold tracking-tight text-gray-900">HRnet</h1>
        {location.pathname === "/" ? (
          <NavLink className="text-blue-500 hover:text-blue-700" to="Employees" end>
            View Current Employees
          </NavLink>
        ) : (
          <NavLink className="text-blue-500 hover:text-blue-700" to="/">Create Employee</NavLink>
        )}
      </header>
    );
  }