import { useState } from "react"
import MonthlyCalendar from "../components/MonthlyCalendar"
import MonthlyYearCalendar from "../components/MonthlyYearCalendar"
import "../css/MonthlyReport.css"
import { monthsCode } from "../services/monthlyReport"
import MonthlyStatistics from "../components/MonthlyStatistics"
import { useSelector } from "react-redux"
function MonthlyReport(){
    const expenses=useSelector((state)=>state.expenses.expensesItems)
      const todayMonth=new Date().toLocaleDateString("en-us",{month:"long"})
         const todayYear=Number (new Date().toLocaleDateString("en-us",{year:"numeric"}))
        const [selectedMonth,setSelectedMonth]=useState(todayMonth)
        const [selectedYear,setSelectedYear]=useState(todayYear)
        const todayDate=new Date().toLocaleDateString("en-us",{day:"2-digit"})
    const yearMonths=monthsCode;
    const [selectedDay,setSelectedDay]=useState(todayDate)
    const monthIndex=monthsCode.findIndex((item)=>selectedMonth===item) + 1

    return <div>
        <MonthlyYearCalendar selectedMonth={selectedMonth}  setSelectedMonth={setSelectedMonth} selectedYear={selectedYear} setSelectedYear={setSelectedYear} yearMonths={yearMonths}/>
<MonthlyCalendar selectedMonth={selectedMonth} monthIndex={monthIndex} monthsCode={monthsCode} selectedYear={selectedYear} selectedDay={selectedDay} setSelectedDay={setSelectedDay}/>
<MonthlyStatistics monthIndex={monthIndex} selectedDay={selectedDay} selectedYear={selectedYear} expenses={expenses}/>
    </div>
}
export default MonthlyReport