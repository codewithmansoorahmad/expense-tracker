import { useNavigate } from "react-router-dom";

export default function RecentButtons(){
    const navigate=useNavigate()
    return <div className="btns">
        <button onClick={()=>navigate("/add-expense")}>Add Expense</button>
        <button onClick={()=>navigate("/today-summary")}>Today Summary</button>
        <button onClick={()=>navigate("/monthly-report")}>Monthly Report</button>
    </div>
    
}