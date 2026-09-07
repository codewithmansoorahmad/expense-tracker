import { useState } from "react"
import { useSelector } from "react-redux"

export default function RecentExpense(){
    const expenses=useSelector((state)=>state.expenses.expensesItems)
const recentExpenses=expenses.slice(-5)
const [isBool,setIsBool]=useState(false)
console.log(recentExpenses)
    return <div className="recentExpense">
        <div className="view-all">

        <h3>Recent Expense</h3>
        <button onClick={()=>setIsBool(!isBool)}>{isBool?"Back":"view all"}</button>
        </div>
        {
          !isBool?  recentExpenses.map((item)=>{
                return <div className="recent-expense" key={item.id}>
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                    <p>{item.date}</p>
                </div>
            }): expenses.map((item)=>{
                return <div className="recent-expense" key={item.id}>
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                    <p>{item.date}</p>
                </div>
            })
        }


    </div>
}