import { deleteExpense } from "../redux/slice"
export default function TodayExpensesPages({todayExpenses,dispatch,navigate}){
    return(
          <div className="todayExpenses">
                <h2>Today Expenses</h2>

<div className="expenses-main-page">
                    {
                    todayExpenses.map((item)=>{
                            return <div className="expense-page" key={item.id}>
                                <p>{item.name}</p>
                                <p>RS: {item.price}</p>
                                <p>{item.time}</p>
                                <button className="btn-edit" onClick={()=>navigate(`/add-expense/${item.id}`)}>Edit</button>
                                <button className="btn-delete" onClick={()=>dispatch(deleteExpense(item))}>Delete</button>
                            </div>
                        })
                    }
            </div>
                    
                </div>
    )
}