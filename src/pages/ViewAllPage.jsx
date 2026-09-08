import { useDispatch, useSelector } from "react-redux"
import { deleteExpense } from "../redux/slice"
import "../css/viewAll.css"
import {  useNavigate } from "react-router-dom"
import { ArrowLeft } from "lucide-react"
function ViewAllPage(){
    const expenses=useSelector((state)=>state.expenses.expensesItems)
const dispatch=useDispatch()
const navigate=useNavigate()
    return<div>
        <button className="back-btn" onClick={()=>navigate(-1)}><ArrowLeft/></button>
        {
            expenses.length>0?

            expenses.map((item)=>{
                return <div className="expense-page" key={item.id}>
                    <p>{item.name}</p>
                    <p>RS:{item.price}</p>
                    <p>{item.date}</p>
                    <p>{item.category}</p>
                    <button className="edit" onClick={()=>navigate("/add-expense/"+item.id)}>Edit</button>
                    <button className="delete" onClick={()=>dispatch(deleteExpense(item))}>Delete</button>
                </div>
            })
            :<h1 style={{textAlign:"center",marginTop:"50px"}}>NO Expense Are Available To Show</h1>
        }

    </div>
}
export default ViewAllPage