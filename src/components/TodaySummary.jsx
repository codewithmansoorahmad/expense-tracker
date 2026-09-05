import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { deleteExpense } from "../redux/slice"
import "../css/TodaySummary.css"
import YasterDaySummary from "./YasterdaySummary"
import TodayExpensesPages from "./todayExpensePages"

function TodaySummary(){
  const todayDateItems = new Date().toISOString().split("T")[0]

     const expenses=useSelector((state)=>state.expenses.expensesItems)
     const todayExpenses=expenses.filter((item)=>item.date===todayDateItems)
     const navigate=useNavigate()
     const dispatch=useDispatch()
  const todayDate = new Date().toLocaleDateString("en-us",{
    month:"short",
    day:"2-digit",
    year:"numeric"
  })
  const totalExpense=todayExpenses.reduce((acc,curr)=>acc+Number(curr.price),0)
  const averagePrice=(totalExpense/todayExpenses.length).toFixed(2)
  const highestPrice=todayExpenses.length>0?todayExpenses.reduce((acc,curr)=> curr.price>acc.price?curr:acc).price:"N/A"
  const LowestPrice=todayExpenses.length?todayExpenses.reduce((acc,curr)=>curr.price<acc.price?curr:acc).price:"N/A"

    return(
        <div className="today-summary">
            <div className="head-today">
                <h1>Today's Expenses</h1>
                <p>{todayDate}</p>
            </div>
            <div className="total-expense">
                <h3>Total spent today</h3>
                <h1>RS: {totalExpense}</h1>
            </div>
            <div className="expenses-grid">
                <div className="expenses-length">
                    <h3>Expenses</h3>
                    <p>{todayExpenses.length}</p>
                </div>
                <div className="highest-expense-price">
                    <h3>Highest expense price</h3>
                    <p>{highestPrice}</p> 
                </div>
                <div className="lowest-expense-price">
                    <h3>Lowest expense price</h3>
                    <p>{LowestPrice}</p> 
                </div>
                <div className="average-expense-price">
                    <h3>Average Price</h3>
                    <p>{averagePrice?averagePrice:"N/A"}</p>
                    
                </div>
            </div>
                {
                    todayExpenses.length>0?<TodayExpensesPages todayExpenses={todayExpenses} navigate={navigate} dispatch={dispatch}/>:<YasterDaySummary/>
                }

                    <button className="btn-add-expense" onClick={()=>navigate("/add-expense")}>Add Expense</button>

                
            </div>




         
    )
}
export default TodaySummary