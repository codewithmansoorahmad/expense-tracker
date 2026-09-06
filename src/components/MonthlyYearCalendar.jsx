import { ChevronRight,ChevronLeft } from "lucide-react"
export default function MonthlyYearCalendar({selectedMonth,setSelectedMonth,selectedYear,setSelectedYear,yearMonths}){
  
    function getReduceMonth(){
      const monthIndex=  yearMonths.findIndex((item)=>item===selectedMonth)-1
      if(monthIndex==-1){
        setSelectedMonth(yearMonths[yearMonths.length-1])
        setSelectedYear(selectedYear-1)
        return
      }
      setSelectedMonth(yearMonths[monthIndex])
    }

    function getIncreaseMonth(){
      const monthIndex=  yearMonths.findIndex((item)=>item===selectedMonth)+1
 if(monthIndex==yearMonths.length){
        setSelectedMonth(yearMonths[0])
        setSelectedYear(selectedYear + 1)
        return
      }
      setSelectedMonth(yearMonths[monthIndex])
    }
    




    return(
        <div className="months">
            <h3>Monthly Report</h3>
            <div className="reduce-increase-month">
                <button onClick={getReduceMonth}><ChevronLeft/></button>
                <div className="date">
                <p>{selectedMonth}</p>
                <p>{selectedYear}</p>
                </div>
                <button onClick={getIncreaseMonth}><ChevronRight/></button>

            </div>

        </div>
    )

}