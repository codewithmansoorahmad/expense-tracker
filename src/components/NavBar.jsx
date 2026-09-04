import { NavLink } from "react-router-dom"
function NavBar(){
    return (
        <div className="links">
            <NavLink className="link" to="/">DashBoard</NavLink>
            <NavLink className="link" to="/add-expense">Add Expense</NavLink>
            <NavLink className="link" to="/today-summary">today Summary </NavLink>
            <NavLink className="link" to="/monthly-report">monthly report</NavLink>
        </div>
    )
}
export default NavBar