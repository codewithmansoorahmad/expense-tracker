import { useDispatch, useSelector } from "react-redux"

function YasterDaySummary(){

     const expenses=useSelector((state)=>state.expenses.expensesItems)
     const yasterdayDate=new Date()
     yasterdayDate.setDate(yasterdayDate.getDate() -1)
const formatedYasterday=yasterdayDate.toISOString().split("T")[0]
     const yasterday=expenses.filter((item)=>item.date===formatedYasterday)


    return(
        <div>
            <h3>yasterday summary</h3>
            {
                yasterday.map((item)=>{
                    return <div className="expense-page" key={item.id}>
                        <p>{item.name}</p>
                        <p>{item.price}</p>
                        <p>{item.date}</p>
                    </div>
                })
            }
            
         
        </div>
    )
}
export default YasterDaySummary