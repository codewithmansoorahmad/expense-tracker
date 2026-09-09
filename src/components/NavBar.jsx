import { NavLink } from "react-router-dom";
import { House, CirclePlus, CalendarDays, ChartColumn } from "lucide-react";
function NavBar() {
  return (
    <>
      <ul className="links">
        <li>
          <NavLink className="link" to="/">
            <House size={25} className="icon" />
            <span>DashBoard</span>
          </NavLink>
        </li>
        <li>
          <NavLink className="link" to="/add-expense">
            <CirclePlus size={25} className="icon"/>
            <span>Add Expense</span>
          </NavLink>
        </li>
        <li>
          <NavLink className="link" to="/today-summary">
          <CalendarDays size={25} className="icon"/>

            <span>Today Summary</span>
          </NavLink>
        </li>
        <li>
          <NavLink className="link" to="/monthly-report">
          <ChartColumn size={25} className="icon"/>
            <span>Monthly report</span>
          </NavLink>
        </li>
      </ul>
    </>
  );
}
export default NavBar;
