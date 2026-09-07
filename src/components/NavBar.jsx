import { NavLink } from "react-router-dom"
function NavBar(){
    return (
        <>
            <ul className="links">
            <li><NavLink className="link" to="/">DashBoard</NavLink></li>
            <li><NavLink className="link" to="/add-expense">Add Expense</NavLink></li>
            <li><NavLink className="link" to="/today-summary">today Summary </NavLink></li>
            <li><NavLink className="link" to="/monthly-report">monthly report</NavLink></li>
            </ul>
            
        </>
    )
}
export default NavBar