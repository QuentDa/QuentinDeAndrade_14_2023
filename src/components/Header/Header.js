import "./Header.css";
import { NavLink, useLocation } from "react-router-dom";

export default function Header() {
    const location = useLocation();
  
    return (
      <header className="header">
        <h1>HRnet</h1>
        {location.pathname === "/" ? (
          <NavLink to="Employees" end>
            View Current Employees
          </NavLink>
        ) : (
          <NavLink to="/">Create Employee</NavLink>
        )}
      </header>
    );
  }