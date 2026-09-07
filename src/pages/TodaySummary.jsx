import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import "../css/TodaySummary.css"
import YasterDaySummary from "../components/YasterdaySummary"
import TodayExpensesPages from "../components/todayExpensePages"
import TodaySummaryHead from "../components/TodaySummaryHead"

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
  const averagePrice=todayExpenses.length>0?(totalExpense/todayExpenses.length).toFixed(2):0
  console.log(averagePrice)
  const highestPrice=todayExpenses.length>0?todayExpenses.reduce((acc,curr)=> curr.price>acc.price?curr:acc).price:0
  const LowestPrice=todayExpenses.length?todayExpenses.reduce((acc,curr)=>curr.price<acc.price?curr:acc).price:0
       const yasterdayDate=new Date()
     yasterdayDate.setDate(yasterdayDate.getDate() -1)
const formatedYasterday=yasterdayDate.toISOString().split("T")[0]
     const yasterday=expenses.filter((item)=>item.date===formatedYasterday)
   


    return(
        <div className="today-summary">
            <TodaySummaryHead todayDate={todayDate} averagePrice={averagePrice} highestPrice={highestPrice} LowestPrice={LowestPrice} todayExpenses={todayExpenses} totalExpense={totalExpense}/>
                {
                    todayExpenses.length>0?<TodayExpensesPages todayExpenses={todayExpenses} navigate={navigate} dispatch={dispatch}/>:yasterday.length>0 &&<YasterDaySummary yasterday={yasterday}/>
                }

                    <button className="btn-add-expense" onClick={()=>navigate("/add-expense")}>Add Expense</button>

                
            </div>




         
    )
}
export default TodaySummary