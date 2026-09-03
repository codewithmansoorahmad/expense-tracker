import { NavLink } from "react-router-dom"
function NavBar(){
    return (
        <div className="links">
            <NavLink to="/">DashBoard</NavLink>
            <NavLink to="/add-expense">Add Expense</NavLink>
            <NavLink to="/today-summary">today Summary </NavLink>
            <NavLink to="/monthly-report">monthly report</NavLink>
        </div>
    )
}
export default NavBar