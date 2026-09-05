import { months } from "../services/monthlyReport"
import { ChevronRight,ChevronLeft } from "lucide-react"
export default function MonthlyYearCalendar(){
    const yearMonth=months
    return(
        <div className="months">
            <h3>Monthly Report</h3>
            <div className="reduce-increase-month">
                <button><ChevronLeft/></button>
                <p>september</p>
                <button><ChevronRight/></button>

            </div>

        </div>
    )

}