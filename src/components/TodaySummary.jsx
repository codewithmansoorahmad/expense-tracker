import { useSelector } from "react-redux"

function TodaySummary(){
     const expenses=useSelector((state)=>state.expenses.expensesItems)
     console.log(expenses)
    return(
        <div>

         
        </div>
    )
}
export default TodaySummary