import { useSelector } from "react-redux"
import { monthsCode } from "../services/monthlyReport"

export default function DashBoardStatistics(){
const expenses=useSelector((state)=>state.expenses.expensesItems)
const totalPrice=expenses.length>0?expenses.reduce((acc,curr)=>acc+Number(curr.price),0):0
const months=monthsCode
const todayMonth=new Date().toLocaleDateString("en-us",{month:"long"})
const todayYear=new Date().toLocaleDateString("en-us",{year:"numeric"})
const monthIndex=months.findIndex((item)=>item===todayMonth)+1
const todayDate=new Date().toISOString().split("T")[0]


const monthItems=expenses.filter((item)=>{
    const [year,month]=item.date.split("-")
   
    return year===todayYear &&month===String(monthIndex).padStart(2,"0")
})
console.log(monthItems)
let todayItems=monthItems.filter((item)=>item.date===todayDate)
const todayPrice=todayItems.length>0?todayItems.reduce((acc,curr)=>acc+Number(curr.price),0):0

const thisMonth=monthItems.length>0?monthItems.reduce((acc,curr)=>acc+Number(curr.price),0):0
const expensivePurchase=expenses.length>0?expenses.reduce((acc,curr)=>
    Number(acc.price)>Number(curr.price)?acc:curr
):0
const thisMonthExpensive=monthItems.length>0?monthItems.reduce((acc,curr)=>Number(acc.price)>Number(curr.price)?acc:curr):0

    return (
        <div className="dashboard-statistics">
            <div className="total-spent">
                <h3>Total Spent</h3>
                <p>RS:{totalPrice}</p>
            </div>
            <div className="this-month">
                <h3>This Month Spent</h3>
                <p>RS:{thisMonth}</p>
            </div>
            <div className="today-spent">
                <h3>Today Spent</h3>
                <p>RS:{todayPrice}</p>
            </div>
            <div className="total-expenses">
                <h3>Total Expenses</h3>
                <p>{expenses.length}</p>
            </div>
            <div className="this-month-expenses">
                <h3>{todayMonth.slice(0,3)} Expenses</h3>
                <p>{monthItems.length}</p>
            </div>
            <div className="expensive-item">
                <h3>Highest Expense</h3>
                <p>RS:{expensivePurchase.price}</p>
            </div>
            <div className="this-month-expensive">
                <h3>{todayMonth.slice(0,3)} Highest Expense</h3>
                <p>RS:{thisMonthExpensive.price}</p>
            </div>

        </div>
    )

}