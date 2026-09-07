import { useSelector } from "react-redux"

export default function RecentExpense(){
    const expenses=useSelector((state)=>state.expenses.expensesItems)
const recentExpenses=expenses.slice(-5)
console.log(recentExpenses)
    return <div className="recentExpense">
        {
            recentExpenses.map((item)=>{
                return <div className="recent-expense" key={item.id}>
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                    <p>{item.date}</p>
                </div>
            })
        }

    </div>
}